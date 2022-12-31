export const config = {
  siteMeta: {
    title: "kii's Blog Hub",
    teamName: "Kiichi Sugihara",
    description: "RSS based blog by kii.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://blog-hub.kiichisugihara.com/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
  ],
};
