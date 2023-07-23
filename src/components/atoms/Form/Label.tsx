import cx from "classnames";

interface LabelProps {
  id: string | undefined;
  label: string;
  size?: "small" | "medium" | "large" | string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({
  label,
  id,
  size = "medium",
  required = false,
}) => {
  const className = cx(
    { "text-sm": size === "small" },
    { "text-base": size === "medium" },
    { "text-lg": size === "large" },
    "mb-1",
    "font-medium",
    "text-label"
  );
  const opsi = (
    <span className="text-xs text-gray-500 text-primary">(Opsional)</span>
  );

  return (
    <label htmlFor={id} className={className}>
      {label} {required ? <span className="text-red-500">*</span> : null}
    </label>
  );
};

export default Label;
