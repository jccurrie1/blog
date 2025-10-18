import Container from "@/app/_components/container";
import GitHubIcon from "./_icons/github";
import MailIcon from "./_icons/mail";
import LinkedInIcon from "./_icons/linkedin";
import { RSSIcon } from "./_icons/rss";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-black dark:border-neutral-800">
      <Container>
        <div className="py-16 flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/jccurrie1"
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={24} />
            </a>
            <a
              href="mailto:jccurrie0@gmail.com"
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            >
              <MailIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/currieja/"
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={24} />
            </a>
            <a
              href="/feed.xml"
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            >
              <RSSIcon size={24} />
            </a>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Jared Currie. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
