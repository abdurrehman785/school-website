import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "sls-g12-cms",
  title: "SLS G‑12 — News CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("News & Announcements")
              .child(S.documentTypeList("news").title("All posts")),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
