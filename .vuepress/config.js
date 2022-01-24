module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Shortkut",
      description: "The easiest way to 10x your command-line productivity!",
    },
  },

  theme: "default-prefers-color-scheme",
  themeConfig: {
    logo: "/logo.png",
    // the GitHub repo path
    repo: "XtremeDevX/shortkut",
    // the label linking to the repo
    repoLabel: "GitHub",
    // // if your docs are not at the root of the repo:
    // docsDir: "docs",
    // defaults to false, set to true to enable
    editLinks: true,
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // Custom sidebar values
        sidebar: ["/", ["/install/", "Install"], ["/usage/", "Usage"]],
      },
    },
  },
};
