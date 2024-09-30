import { defineConfig } from "vitepress";
import footnote from 'markdown-it-footnote';
import tasklist from 'markdown-it-task-lists';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(footnote);
      md.use(tasklist)
    }
  },
  title: "Angel Whipple",
  description: "6.1040 Fall 2024",
  base: "/portfolio-whipple/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About", link: "/about" },
      { text: "Assignments", link: "/assignments" },
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "About Angel",
        link: "/about",
      },
      {
        text: "Assignments",
        link: "/assignments",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
