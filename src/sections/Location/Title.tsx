import type React from "react";

export default function Title({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className="font-semibold my-8 flex gap-1 text-brand">
      {children}
      <p>{title}</p>
    </h3>
  );
}
