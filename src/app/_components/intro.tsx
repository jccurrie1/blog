import Link from "next/link";
import GitHubIcon from "./_icons/github";
import MailIcon from "./_icons/mail";
import LinkedInIcon from "./_icons/linkedin";
import { RSSIcon } from "./_icons/rss";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        Jared Currie
      </h1>
      <div className="flex text-center justify-center text-lg items-center">
        <Link href="https://github.com/jccurrie1" className="mr-4">
          <GitHubIcon size={32} />
        </Link>
        <Link href="mailto:jccurrie0@gmail.com" className="mr-4">
          <MailIcon size={32} />
        </Link>
        <Link href="https://www.linkedin.com/in/currieja/" className="mr-4">
          <LinkedInIcon size={32} />
        </Link>
        <Link href="/feed.xml">
          <RSSIcon size={32} />
        </Link>
      </div>
    </section>
  );
}
