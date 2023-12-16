import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, parse } from "path";
// import fs from "fs";
// eslint-disable-next-line no-undef
let dirName = __dirname;
// const root = resolve(dirName, "src", "Pages");
// const api = resolve(dirName, "src", "api");
// const langs = resolve(dirName, "src", "lang");

// function getFilenamesWithoutExtensions(dir) {
//   let allFiles = [];
//   fs.readdirSync(dir).forEach((file) => {
//     allFiles.push(parse(file).name);
//   });
//   return allFiles;
// }
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(dirName, "src"),
      "@Comp": resolve(dirName, "src", "Components"),
      "@Common": resolve(dirName, "src", "Common"),
      "@Pages": resolve(dirName, "src", "Pages"),
      // "@Hooks": resolve(dirName, "src", "Hooks"),
      // "@Redux": resolve(dirName, "src", "Redux"),
    },
  },
  plugins: [react()],
  base: "./",
  preview: {
    port: "5000",
  },
  server: {
    port: "5002",
    host: true,
  },
})
