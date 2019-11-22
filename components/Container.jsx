import { cloneElement } from "react";

const styles = style =>
  Object.assign(
    {
      width: 1030,
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto"
    },
    style
  );

export default ({
  children = "",
  comp: Comp = "div",
  style = {},
  renderer = ""
}) =>
  renderer == "" ? (
    <Comp style={styles(style)}>{children}</Comp>
  ) : (
    cloneElement(renderer, {
      style: styles(style),
      children
    })
  );
