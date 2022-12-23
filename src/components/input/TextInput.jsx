import { Input } from "./Base";
import cn from "classnames";
import { TextContainer } from "./TextContainer";
import { useFormContext } from "react-hook-form";
import { memo } from "react";

const CustomInput = ({
  inputContainerClass,
  label,
  labelClassName,
  disableLabel,
  methods,
  name,
  inputClassName,
  ...props
}) => {
  return (
    <div className={inputContainerClass}>
      {!disableLabel && <label className={labelClassName}>{label}</label>}

      <Input
        {...props}
        {...methods?.register?.(name)}
        ref={methods?.register?.(name)?.ref}
        className={cn("", inputClassName)}
      />
    </div>
  );
};

/* A memoized input component. */
const MemorizeCustomInput = memo(
  (props) => <CustomInput {...props} />,
  (prev, next) =>
    prev.methods?.formState.isDirty === next.methods?.formState.isDirty
);

/**
 * It's a function that returns a component that returns a component
 * @returns A custom input component that is being passed props and methods from the useFormContext
 * hook.
 */
export const TextInput = (props) => {
  const methods = useFormContext();

  return (
    <TextContainer>
      <MemorizeCustomInput {...props} methods={methods} />
    </TextContainer>
  );
};
