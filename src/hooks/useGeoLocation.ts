import { useState, useEffect } from 'react'

interface LatLong {
  lat: any
  lng: any
}
interface GeoLocation {
  loaded: boolean
  coordinates?: LatLong
  error?: {
    code: any
    message: any
  }
}

const useGeoLocation = () => {
  const [location, setLocation] = useState<GeoLocation>({
    loaded: false,
    coordinates: { lat: '', lng: '' }
  })

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
    })
  }

  const onError = (error: any) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message
      }
    })
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported'
      })
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return location
}

export default useGeoLocation
