import { FC } from "react";
import style from "./card.module.sass";
import { CardProps } from "./card.interface";

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className={style.main}>
      <div className={style.wrapper}>{children}</div>
    </div>
  );
};


