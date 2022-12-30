import cn from "classnames";
import { BarLoader } from "react-spinners";

export const Button = ({
  className,
  variant,
  as,
  fullWidth,
  isLoading,
  children,
  ...props
}) => {
  let Component = as ? as : "button";
  return (
    <Component
      {...props}
      className={cn(
        "rounded-md text-base font-[700]",
        {
          "bg-primary": variant === "primary",
          "w-full": fullWidth,
          "bg-white text-primary": variant === "secondary",
        },
        className
      )}
    >
      {isLoading ? (
        <BarLoader
          className="fixed z-50 bottom-[10vh]"
          color={variant === "secondary" ? "#671E78" : "white"}
        />
      ) : (
        children
      )}
    </Component>
  );
};
