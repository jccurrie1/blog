import Link from "next/link";
import GitHubIcon from "./_icons/github";
import MailIcon from "./_icons/mail";
import LinkedInIcon from "./_icons/linkedin";
import CameraIcon from "./_icons/camera";
import { RSSIcon } from "./_icons/rss";
import { SiSubstack } from "react-icons/si";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        Jared Currie
      </h1>
      <div className="flex text-center justify-center text-lg items-center">
        <a
          href="https://github.com/jccurrie1"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon size={32} />
        </a>
        <a
          href="mailto:jccurrie0@gmail.com"
          className="mr-4"
          aria-label="Email"
        >
          <MailIcon size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/currieja/"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon size={32} />
        </a>
        <a
          href="https://substack.com/@jaredcurrie"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Substack"
        >
          <SiSubstack size={32} />
        </a>
        <Link href="/photos" className="mr-4" aria-label="Photos">
          <CameraIcon size={32} />
        </Link>
        <Link href="/feed.xml" aria-label="RSS Feed">
          <RSSIcon size={32} />
        </Link>
      </div>
    </section>
  );
}
