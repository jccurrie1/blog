"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { Photo } from "@/interfaces/photo";

type Props = {
  photo: Photo | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export function PhotoModal({
  photo,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    if (photo) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [photo, handleKeyDown]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>

      {hasPrev && (
        <button
          className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10 p-2"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous photo"
        >
          &#8249;
        </button>
      )}

      {hasNext && (
        <button
          className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10 p-2"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
        >
          &#8250;
        </button>
      )}

      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={1200}
          height={800}
          className={`max-w-full max-h-[90vh] w-auto h-auto object-contain ${
            photo.filename === "02-wood-coaster.jpeg" ? "rotate-45" : ""
          }`}
          priority
        />
      </div>
    </div>
  );
}
