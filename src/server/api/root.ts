import { createTRPCRouter } from "~/server/api/trpc";
import { validateRouter } from "./routers/validate";
import { authenticationRouter } from "./routers/authentication";
import { QuestsRouter } from "./routers/quests";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  validate: validateRouter,
  quests: QuestsRouter,
  auth: authenticationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
