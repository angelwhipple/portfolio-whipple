import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Angel Whipple",
  description: "6.1040 Fall 2024",
  base: "/portfolio-whipple/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About", link: "/about" },
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
