import Image from "next/image";
import { QrProps } from "./qr.interface";
import { FC } from "react";

import style from "./qr.module.sass";

export const Qr: FC<QrProps> = ({ src }) => {
  return <Image className={style.main} src={src} alt="image" />;
};
