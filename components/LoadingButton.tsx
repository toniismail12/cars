"use client";

import type React from "react";

export default function LoadingButton({
  loading,
  children,
  ...props
}: {
  loading: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="btn primary" disabled={loading || props.disabled} {...props}>
      {loading ? "Memproses..." : children}
    </button>
  );
}
