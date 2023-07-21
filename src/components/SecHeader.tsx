import "../scss/secHeader.scss";
import Reveal from "./Reveal Animations/Reveal";

export default function SecHeader({ secTitle }: { secTitle: string }) {
  return (
    <Reveal className="secHead">
      <p>{secTitle}</p>
    </Reveal>
  );
}
