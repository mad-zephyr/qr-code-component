import { FC } from "react";
import { PtagProps } from "./ptag.interface";
import style from "./ptag.module.sass";
import cn from "classnames";

export const Ptag: FC<PtagProps> = ({ text = "blank", align }) => {
  return (
    <p className={cn(style.main, { [style.center]: align === "center" })}>
      {text}
    </p>
  );
};
