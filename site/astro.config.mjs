// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "hardware!",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/qcoral/hardware-docs",
                },
            ],
            sidebar: [
                {
                    label: "Preface",
                    autogenerate: { directory: "overview" },
                },
                {
                    label: "Design tips",
                    autogenerate: { directory: "design" },
                },
                {
                    label: "Assembly/Building",
                    autogenerate: { directory: "building" },
                },
                {
                    label: "Shipping",
                    autogenerate: { directory: "shipping" },
                },
                {
                    label: "User Guides",
                    badge: { text: "Untested", variant: "caution" },
                    collapsed: true,
                    // Each item here is one entry in the navigation menu.
                    autogenerate: { directory: "user-contrib-guides" },
                },
            ],
            customCss: ["./src/styles/global.css"],
            favicon: "/icon-blue-purple.png",
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
