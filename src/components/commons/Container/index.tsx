import { IContainer } from "@/types";
import "./Container.scss";

export default function Container({ children, className }: IContainer) {
  return <div className={`container ${className}`}>{children}</div>;
}
