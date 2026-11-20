import { defineConfig } from "vite";
import { dreamlandPlugin } from "vite-plugin-dreamland";
import { ChemicalVitePlugin } from "chemicaljs";
import { fileURLToPath } from "node:url";

export default defineConfig({
    resolve: {
        alias: {
            "dreamland-router": fileURLToPath(
                new URL("./node_modules/dreamland-router/src/index.tsx", import.meta.url),
            ),
        },
    },
    plugins: [
        ChemicalVitePlugin({
            scramjet: false,
            rammerhead: false,
        }),
        dreamlandPlugin(),
    ],
});
