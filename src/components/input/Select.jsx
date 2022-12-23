import { Select } from "./Base";
import cn from "classnames";
import { memo } from "react";
import { useFormContext } from "react-hook-form";
import { TextContainer } from "./TextContainer";

const CustomSelect = ({
  selectContainerClassName,
  label,
  labelClassName,
  disableLabel,
  methods,
  name,
  inputClassName,
  options = [],
  ...props
}) => {
  let renderOption = options.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  return (
    <div className={selectContainerClassName}>
      {!disableLabel && <label className={labelClassName}>{label}</label>}
      <Select
        {...props}
        {...methods?.register?.(name)}
        ref={methods?.register?.(name)?.ref}
        children={renderOption}
        className={cn("")}
      />
    </div>
  );
};

const MemorizeCustomSelect = memo(CustomSelect, (prev, next) => {
  if (prev.methods.formState.isDirty !== next.methods.formState.isDirty) {
    return false;
  }

  if (prev.options !== next.options) {
    return false;
  }

  return true;
});

export const TextSelect = (props) => {
  const methods = useFormContext();

  return (
    <TextContainer>
      <MemorizeCustomSelect {...props} methods={methods} />
    </TextContainer>
  );
};
