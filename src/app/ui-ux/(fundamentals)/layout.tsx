"use client";

import { ReactNode, useState } from "react";

import { ButtonComponent } from "@/components/button/button.component";

import "./layout.css";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  return (
    <div className="fundamental">
      <div data-fixed={isFixed}>{children}</div>
      <ButtonComponent
        className="toggle"
        type="button"
        variant="primary"
        shape="outlined"
        onClick={() => setIsFixed((old) => !old)}
      >
        {isFixed ? "Revert" : "Fix the Design"}
      </ButtonComponent>
    </div>
  );
}
