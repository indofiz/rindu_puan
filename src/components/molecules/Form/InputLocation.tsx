import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import useGeoLocation from "../../../hooks/useGeoLocation";
import { LocateFixedIcon, LocateOffIcon } from "lucide-react";
import { cn } from "../../../utils/classMerge";
import Label from "../../atoms/Form/Label";
import Message from "../../atoms/Form/Message";
import { dataChangeLocation, dataError } from "../../organism/Form/utils/param";
import icon from "../../../assets/icon/location.svg";
import iconShadow from "../../../assets/icon/location-shadow.png";
import MapFullScreen from "../../organism/MapFullScreen";

interface InputLocation {
  id: string;
  className?: string;
  label: string;
  caption?: string;
  errorMessage?: any;
  required?: boolean;
  onChangeLocation?: (param: dataChangeLocation) => void;
  handleError?: (param: dataError) => void;
  longitude: number;
  latitude: number;
  latitudeId?: string;
  longitudeId?: string;
}

const InputLocation: React.FC<InputLocation> = (props) => {
  const { id = "", label, caption, latitude, longitude, errorMessage } = props;

  const locationHook = useGeoLocation();

  const iconMedia = new L.Icon({
    iconAnchor: [22, 60],
    iconUrl: icon,
    iconSize: [48, 48],
    popupAnchor: [0, -50],
    shadowUrl: iconShadow,
    shadowSize: [42, 42],
    shadowAnchor: [19, 54],
  });
  const [isMyLocation, setisMyLocation] = useState<boolean>(false);

  const urlMap = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  //TODO: OnChange data to parent component
  const handleChange = (param: dataChangeLocation) => {
    if (props.onChangeLocation) props.onChangeLocation(param);
  };
  // console.log(latitude, longitude)

  const aktifMylocation = () => {
    if (!locationHook.error) {
      const data = {
        latitudeId: String(props.latitudeId),
        longitudeId: String(props.longitudeId),
        valueLatitude: locationHook.coordinates?.lat,
        valueLongitude: locationHook.coordinates?.lng,
      };
      handleChange({ target: data });
      // setlocation(data)
      setisMyLocation((prev) => !prev);
    }
  };

  const ShowMyLocation = () => {
    const map = useMap();
    if (locationHook.loaded && !locationHook.error) {
      map.flyTo(
        [locationHook?.coordinates?.lat, locationHook?.coordinates?.lng],
        map.getZoom()
      );
      return location === null ? null : (
        <Marker
          position={[
            locationHook?.coordinates?.lat,
            locationHook?.coordinates?.lng,
          ]}
          icon={iconMedia}
        >
          <Popup>
            Apakah Lokasi Benar?
            <br />
          </Popup>
        </Marker>
      );
    } else {
      alert(locationHook?.error?.message);
      return null;
    }
  };

  function ClickLocation() {
    const map = useMapEvents({
      click(e) {
        const data = {
          latitudeId: String(props.latitudeId),
          longitudeId: String(props.longitudeId),
          valueLatitude: e.latlng.lat,
          valueLongitude: e.latlng.lng,
        };
        handleChange({ target: data });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return (
      <Marker position={{ lat: latitude, lng: longitude }} icon={iconMedia}>
        <Popup>Lokasi Kejadian</Popup>
      </Marker>
    );
  }

  return (
    <div className="flex flex-col">
      <Label id={id} label={label} required={props?.required ? true : false} />

      <MapContainer
        center={[latitude, longitude]}
        attributionControl={false}
        zoom={16}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "240px" }}
      >
        <TileLayer attribution="DPPPAKB PGK" url={urlMap} />
        {locationHook.loaded && !locationHook.error && isMyLocation ? (
          <ShowMyLocation />
        ) : (
          <ClickLocation />
        )}
        <MapFullScreen />
      </MapContainer>
      <button
        onClick={aktifMylocation}
        className={cn(
          "py-3 mt-2 mb-2 w-full rounded-md text-white font-medium flex justify-center gap-2",
          isMyLocation ? "bg-primary" : "bg-secondary"
        )}
      >
        {isMyLocation ? <LocateOffIcon /> : <LocateFixedIcon />}{" "}
        {isMyLocation ? "Matikan" : "Aktifkan"} Lokasi Saya
      </button>
      {caption && (
        <Message message={caption} className="text-xs text-gray-500" />
      )}

      {errorMessage &&
        errorMessage.map((mes: { id: string; message: string; state: any }) => (
          <Message key={mes.id} state={mes.state} message={mes.message} />
        ))}
    </div>
  );
};

export default InputLocation;
