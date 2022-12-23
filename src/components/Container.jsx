import cn from "classnames";

export const Container = ({
  as,
  className,
  fullHeight,
  fullWidth,
  flex,
  align,
  direction,
  noGutter,
  ...props
}) => {
  let Component = as ?? "section";
  let alignItems = {
    center: "items-center",
    end: "items-end",
    baseline: "items-baseline",
    stretch: "items-stretch",
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
      className={cn({
        flex,
        "w-screen": fullWidth,
        "h-screen": fullHeight,
        "px-4 lg:px-10": !noGutter,
        [alignItems[align]]: align,
        [flexDirection[direction]]: direction,
      })}
    />
  );
};
