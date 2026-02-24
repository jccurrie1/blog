"use client";

import Giscus from "@giscus/react";
import { useEffect, useState } from "react";

// TODO: Replace these placeholder values with your actual giscus configuration.
// 1. Enable Discussions on your repo: https://github.com/jccurrie1/blog/settings
// 2. Install the giscus app: https://github.com/apps/giscus
// 3. Go to https://giscus.app, enter "jccurrie1/blog", pick the "Announcements"
//    category, and copy the data-category and data-category-id values below.
const GISCUS_REPO = "jccurrie1/blog" as const;
const GISCUS_REPO_ID = "R_kgDOOVFoDA";
const GISCUS_CATEGORY = "Announcements";
const GISCUS_CATEGORY_ID = "REPLACE_ME";

export function Comments() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const updateTheme = () => {
      const isDark =
        document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <Giscus
        repo={GISCUS_REPO}
        repoId={GISCUS_REPO_ID}
        category={GISCUS_CATEGORY}
        categoryId={GISCUS_CATEGORY_ID}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
