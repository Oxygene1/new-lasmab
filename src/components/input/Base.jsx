import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export const Select = forwardRef((props, ref) => {
  return <select ref={ref} {...props} />;
});
