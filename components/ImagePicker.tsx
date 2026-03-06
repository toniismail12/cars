"use client";

import { useRef } from "react";

export default function ImagePicker({
  images,
  onChange
}: {
  images: string[];
  onChange: (images: string[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const dataUrls = await Promise.all(
      Array.from(files).map(
        (file) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.readAsDataURL(file);
          })
      )
    );
    onChange([...images, ...dataUrls]);
  };

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={(event) => handleFiles(event.target.files)}
      />
      <div className="grid three">
        {images.map((img) => (
          <img key={img} src={img} alt="preview" className="thumb" />
        ))}
      </div>
    </div>
  );
}
