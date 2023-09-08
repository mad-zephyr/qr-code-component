import style from "./style.module.sass";
import "./global.sass";
import "normalize.css";
import qrImage from "../images/image-qr-code.png";
import { Htag, Ptag, Qr, Card, Wrapper } from "@/components";

export default function Home() {
  return (
    <main className={style.main}>
      <Card>
        <Qr src={qrImage} />
        <Wrapper>
          <Htag
            tag="h1"
            text="Improve your front-end skills by building projects"
            align="center"
          />
          <Ptag
            text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
            align="center"
          />
        </Wrapper>
      </Card>
    </main>
  );
}
