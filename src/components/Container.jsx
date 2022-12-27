import cn from "classnames";

export const Container = ({
  as,
  className = "",
  fullHeight = false,
  fullWidth = false,
  flex = false,
  align = "baseline",
  direction = "row",
  justify = "start",
  noGutter = false,
  ...props
}) => {
  let Component = as ?? "section";
  let alignItems = {
    center: "items-center",
    end: "items-end",
    baseline: "items-baseline",
    stretch: "items-stretch",
  };

  let flexbox = {
    flex: "flex",
    sm: "sm:flex",
    md: "md:flex",
    lg: "lg:flex",
    xl: "xl:flex",
  };

  let justifyContent = {
    center: "justify-center",
    between: "justify-between",
    start: "justify-start",
    end: "justify-end",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  let flexDirection = {
    row: "flex-row",
    col: "flex-col",
    "col-reverse": "flex-col-reverse",
    "row-reverse": "flex-row-reverse",
  };

  return (
    <Component
      {...props}
      className={cn(
        {
          [flexbox[flex]]: flex,
          "w-screen": fullWidth,
          "h-screen": fullHeight,
          "px-4 lg:px-10": !noGutter,
          [alignItems[align]]: align,
          [flexDirection[direction]]: direction,
          [justifyContent[justify]]: justify,
        },
        className
      )}
    />
  );
};
