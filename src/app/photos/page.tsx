import Container from "@/app/_components/container";
import { PhotoGrid } from "@/app/_components/photo-grid";
import { getAllPhotos } from "@/lib/photoApi";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos | Jared Currie",
  description: "Photo gallery",
};

export default function PhotosPage() {
  const photos = getAllPhotos();

  return (
    <main>
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center justify-between">
          <Link href="/" className="hover:underline">
            Blog
          </Link>
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-12">
          Photos
        </h1>

        {photos.length > 0 ? (
          <PhotoGrid photos={photos} />
        ) : (
          <p className="text-lg text-gray-500">
            No photos yet. Add images to public/assets/photos/ to get started.
          </p>
        )}
      </Container>
    </main>
  );
}
