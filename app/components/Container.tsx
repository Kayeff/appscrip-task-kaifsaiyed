import { ContainerT } from "@/types/types";

export default function Container({ className, children }: ContainerT) {
  return <div className={`container ${className}`}>{children}</div>;
}
