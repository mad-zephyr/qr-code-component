import { FC } from "react";
import { WrapperProps } from "./wrapper.interface";
import style from "./wrapper.module.sass";

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className={style.main}> {children}</div>;
};
