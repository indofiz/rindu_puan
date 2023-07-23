import { FC } from "react";
import Label from "../../atoms/Form/Label";
import { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/classMerge";
import Message from "../../atoms/Form/Message";
import { inputVariant } from "./utils/variant";
import Textarea, { TextareaProps } from "../../atoms/Form/Textarea";

interface TextAreaInputProps
  extends TextareaProps,
    VariantProps<typeof inputVariant> {
  label: string;
  caption?: string;
  errorMessage?: any;
}

const InputTextarea: FC<TextAreaInputProps> = (props) => {
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
    <div className="flex flex-col w-full">
      <Label id={id} label={label} required={props?.required ? true : false} />

      <Textarea
        id={id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={cn(inputVariant({ state, sizes }), className)}
      />
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

export default InputTextarea;
