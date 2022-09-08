import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";


const { resolve } = require("path");

function pathResolve(dir) {
    return resolve(__dirname, ".", dir);
}

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            api: pathResolve("src/request/"),
            "@": pathResolve("src"),
            components: pathResolve("src/components"),
        },
    },
});

