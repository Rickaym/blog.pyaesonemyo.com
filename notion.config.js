module.exports = {
  app: {
    port: 3000,
    name: "Web-Notion",
    staticDirectory: "./public",
    viewsDirectory: "./views",
    partialsDirectory: "./views/partials",
    buildDirectory: "./build",
  },
  notion: {
    databaseId: "7cff81da25d047c587f9f94b419ecd9d",
    linkOriginalPage: false
  },
};