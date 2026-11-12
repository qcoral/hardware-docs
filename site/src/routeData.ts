import { getCollection } from "astro:content";
import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import type { StarlightRouteData } from "@astrojs/starlight/route-data";

type SidebarEntry = StarlightRouteData["sidebar"][number];

const normalize = (path: string) => "/" + path.replace(/^\/+|\/+$/g, "");

// Flags draft pages in the sidebar. Drafts only exist in dev
// (Starlight strips them from production builds), so this is dev-only in practice.
export const onRequest = defineRouteMiddleware(async (context) => {
    const drafts = await getCollection("docs", ({ data }) => data.draft);
    if (drafts.length === 0) return;

    const draftHrefs = new Set(
        drafts.map(({ id }) => normalize(id === "index" ? "" : id)),
    );

    const markDrafts = (entries: SidebarEntry[]) => {
        for (const entry of entries) {
            if (entry.type === "group") {
                markDrafts(entry.entries);
            } else if (draftHrefs.has(normalize(entry.href))) {
                entry.badge = { text: "Draft", variant: "caution" };
            }
        }
    };

    markDrafts(context.locals.starlightRoute.sidebar);
});
