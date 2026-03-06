"use client";

import { useEffect } from "react";

export default function Toast({
  message,
  onClose
}: {
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 2600);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return <div className="toast">{message}</div>;
}
