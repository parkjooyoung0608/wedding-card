import type React from "react";

export default function Title({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className="font-semibold mt-8 mb-4 flex gap-1 text-gray-800">
      {children}
      <p>{title}</p>
    </h3>
  );
}
