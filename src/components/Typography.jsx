import cn from "classnames";
export const Typography = ({
  as,
  align,
  gutterBottom,
  paragraph,
  className,
  ...props
}) => {
  const Component = as ?? "p";

  let alignText = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
    justify: "text-justify",
    start: "text-start",
    end: "text-end",
    font: "Khula",
  };

  return (
    <Component
      {...props}
      className={cn(
        "",
        {
          [alignText[align]]: align,
          "mb-2": gutterBottom,
          "mb-5": paragraph,
        },
        className
      )}
    />
  );
};
