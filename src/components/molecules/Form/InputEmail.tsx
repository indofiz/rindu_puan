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

const InputEmail: FC<EmailInputProps> = (props) => {
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
    // CHECK PATTERN EMAIL
    const patternComponent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let msg = errorMessage?.length ? [...errorMessage] : [];

    let arg = {
      target: { name: id, value: "" },
    };

    if (!patternComponent.test(param.target.value)) {
      setTempData(param.target.value);
      if (param.target.value.length > 0) {
        msg = [{ id: "1", message: "Format email salah" }];
      } else {
        msg = [];
      }
      arg = {
        target: { name: id, value: "" },
      };
    } else {
      msg = [];
      arg = { ...param };
    }

    props.handleError?.({ target: { name: id, value: msg } });
    props.onChange(arg);
  };

  return (
    <div className="flex flex-col">
      <Label id={id} label={label} required={props?.required ? true : false} />

      <Input
        {...props}
        pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
        value={errorMessage?.length !== 0 ? tempData : props.value}
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

        {errorMessage?.length > 0 &&
          errorMessage.map(
            (mes: { id: string; message: string; state: any }) => (
              <Message key={mes.id} state={"danger"} message={mes.message} />
            )
          )}
      </div>
    </div>
  );
};

export default InputEmail;
