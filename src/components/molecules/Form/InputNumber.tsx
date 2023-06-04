import { FC, useState } from "react";
import Input, { InputProps } from "../../atoms/Form/Input";
import Label from "../../atoms/Form/Label";
import { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/classMerge";
import Message from "../../atoms/Form/Message";
import { inputVariant } from "./utils/variant";
import { dataChange } from "../../organism/Form/utils/param";

interface EmailInputProps
  extends InputProps,
    VariantProps<typeof inputVariant> {
  label: string;
  caption?: string;
  errorMessage?: any;
}

const InputNumber: FC<EmailInputProps> = (props) => {
  const {
    id = "",
    label,
    className,
    state = "normal",
    sizes,
    caption,
    errorMessage,
  } = props;

  const [tempData, setTempData] = useState("");
  const handleChange = (param: dataChange) => {
    // CHECK PATTERN NUMBER
    const regex = /^[0-9\b]+$/;

    if (param.target.value === "" || regex.test(param.target.value)) {
      setTempData(param.target.value);
      props.onChange(param);
    }
  };

  return (
    <div className="flex flex-col">
      <Label id={id} label={label} required={props.required} />

      <Input
        {...props}
        type="tel"
        pattern="[0-9]*"
        value={props.value}
        onChange={handleChange}
        className={cn(inputVariant({ state, sizes }), className)}
      />
      <div
        className={cn(
          "flex flex-col gap-[2px] w-full",
          caption || errorMessage?.length > 0 ? " mt-[5px]" : ""
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

export default InputNumber;
