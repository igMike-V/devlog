import { buildConfig } from "payload/config";
import path from "path";

// Import collections
import Users from "./cms/collections/Users";
import Posts from "./cms/collections/Posts";
import Projects from "./cms/collections/Projects";
import Technologies from "./cms/collections/Technologies";
import Media from "./cms/collections/Media";

// Import UI overrides
import { Icon } from "./cms/adminui/Icon";
import { Logo } from "./cms/adminui/Logo";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- igLab',
    },
    components: {
      graphics: {
        Logo, 
        Icon,
      },
    },
  },
  collections: [
    Posts,
    Projects,
    Technologies,
    Users,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "cms/payload-types.ts"),
  }
});
