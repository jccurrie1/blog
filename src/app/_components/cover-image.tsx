import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  showLatestTreatment?: boolean;
};

const CoverImage = ({
  title,
  src,
  slug,
  showLatestTreatment = false,
}: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full rounded-[14px]", {
        "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-[1.02] motion-safe:group-focus-visible:scale-[1.02]":
          showLatestTreatment,
        "hover:shadow-lg transition-shadow duration-200":
          slug && !showLatestTreatment,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          href={`/posts/${slug}`}
          aria-label={title}
          className={cn({
            "group relative block overflow-hidden rounded-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80":
              showLatestTreatment,
          })}
        >
          {image}
          {showLatestTreatment && (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-neutral-950/15 opacity-0 motion-safe:transition-opacity motion-safe:duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-5 left-5 text-sm font-medium text-white opacity-0 drop-shadow-sm motion-safe:transition-opacity motion-safe:duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                Read latest →
              </span>
            </>
          )}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
