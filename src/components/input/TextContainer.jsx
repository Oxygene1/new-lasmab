import { Children, createElement } from "react";
import { useFormContext } from "react-hook-form";

export const TextContainer = ({ children }) => {
  const methods = useFormContext();

  return Children.map(children, (child) =>
    createElement(child.type, {
      ...{
        ...child.props,
        methods,
        key: child.props.name,
      },
    })
  );
};
