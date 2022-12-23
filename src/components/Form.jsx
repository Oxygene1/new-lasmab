import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

/**
 * It takes in a bunch of props, and returns a form with a bunch of children
 * Use DevTool for debugging the form values and necessary information.
 * @returns A form component that is wrapped in a FormProvider component.
 */
export const Form = ({
  defaultValues,
  onSubmit,
  children,
  className,
  resolver,
}) => {
  const methods = useForm({
    defaultValues,
    resolver,
  });

  return (
    <FormProvider>
      <forn onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </forn>
      {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  );
};
