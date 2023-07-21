import "./appBtn.scss";

export default function AppBtn({
  label,
  onClick,
  href,
  target,
}: {
  label: string;
  onClick?: () => void;
  href: string;
  target?: "_blank";
}) {
  return (
    <a target={target} href={href} className="noBkgBtn" onClick={onClick}>
      {label}
    </a>
  );
}
