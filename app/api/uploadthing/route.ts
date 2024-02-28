import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";

const routeHandlerConfig = {
  // callbackUrl: "utfs.io",
  uploadthingId: process.env.UPLOADTHING_APP_ID,
  uploadthingSecret: process.env.UPLOADTHING_SECRET,
};
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: routeHandlerConfig,
});