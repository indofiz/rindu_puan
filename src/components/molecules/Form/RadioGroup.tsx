import { FC } from "react";
import Radio, { RadioProps } from "../../atoms/Form/Radio";
import Label from "../../atoms/Form/Label";
import { cn } from "../../../utils/classMerge";
import { radioVariant } from "./utils/variant";
import Message from "../../atoms/Form/Message";

interface RadioGroup extends RadioProps {
  message?: [];
  list_radio?: {}[] | undefined;
  label: string;
  caption?: string;
  errorMessage?: any;
}

const RadioGroup: FC<RadioGroup> = (props) => {
  const {
    message,
    id,
    label,
    list_radio,
    errorMessage,
    caption,
    className,
    ...rest
  } = props;
  return (
    <div className="flex flex-col gap-1">
      <Label id={id} label={label} required={props.required} />
      <div className="grid grid-cols-2 gap-2" id={id}>
        {list_radio &&
          list_radio.map((item: any) => (
            <div
              key={item.id}
              className={cn(
                radioVariant({ state: item.value === rest.value }),
                className
              )}
            >
              <Radio
                onChange={rest.onChange}
                idRadioGroup={id}
                label={item.label}
                id={item.id}
                value={item.value}
                checked={item.value === rest.value}
                name={item.id}
              />
            </div>
          ))}
      </div>
      <div
        className={cn(
          "flex flex-col gap-[2px] w-full",
          caption || errorMessage?.length ? " mt-[5px]" : ""
        )}
      >
        {caption && (
          <Message message={caption} className="text-xs text-gray-500" />
        )}

        {errorMessage &&
          errorMessage.map(
            (mes: { id: string; message: string; state: any }) => (
              <Message key={mes.id} state={mes.state} message={mes.message} />
            )
          )}
      </div>
    </div>
  );
};

export default RadioGroup;
