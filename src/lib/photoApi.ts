import { Photo } from "@/interfaces/photo";
import fs from "fs";
import { join } from "path";

const photosDirectory = join(process.cwd(), "public/assets/photos");

const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp|gif)$/i;

export function getAllPhotos(): Photo[] {
  if (!fs.existsSync(photosDirectory)) {
    return [];
  }

  const files = fs.readdirSync(photosDirectory).filter((file) =>
    IMAGE_EXTENSIONS.test(file)
  );

  return files.map((filename) => ({
    src: `/assets/photos/${filename}`,
    alt: filename
      .replace(IMAGE_EXTENSIONS, "")
      .replace(/[-_]/g, " ")
      .replace(/^\d+\s*/, ""),
    filename,
  }));
}
