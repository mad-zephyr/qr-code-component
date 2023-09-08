import { FC } from "react";
import { HtagProps } from "./htag.interface";
import style from "./htag.module.sass";
import cn from "classnames";

export const Htag: FC<HtagProps> = ({ text = "blank", align, tag }) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(style.main, { [style.center]: align === "center" })}>
          {text}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(style.main, { [style.center]: align === "center" })}>
          {text}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(style.main, { [style.center]: align === "center" })}>
          {text}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn(style.main, { [style.center]: align === "center" })}>
          {text}
        </h4>
      );
    default:
      return (
        <h5 className={cn(style.main, { [style.center]: align === "center" })}>
          {text}
        </h5>
      );
  }
};
