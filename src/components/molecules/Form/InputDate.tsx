import { FC } from "react";
import Label from "../../atoms/Form/Label";
import { cn } from "../../../utils/classMerge";
import Message from "../../atoms/Form/Message";
import { inputVariant } from "./utils/variant";
import DatePick from "../../atoms/Form/Date";
import { VariantProps } from "class-variance-authority";
import { dataChange, dataError } from "../../organism/Form/utils/param";

export interface DateInputProps extends VariantProps<typeof inputVariant> {
  id: string;
  label: string;
  value: string | number;
  caption?: string;
  className?: string;
  withPortal?: boolean;
  format?: string;
  placeholder?: string;
  errorMessage?: any;
  required?: boolean;
  onChange: (param: dataChange) => void;
  handleError?: (param: dataError) => void;
}

const InputText: FC<DateInputProps> = (props) => {
  const {
    id = "",
    label,
    className,
    state = "normal",
    sizes,
    caption,
    errorMessage,
  } = props;

  return (
    <div className="flex flex-col">
      <Label id={id} label={label} required={props.required} />

      <DatePick
        {...props}
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

export default InputText;
