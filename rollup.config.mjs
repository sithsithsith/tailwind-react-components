import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: {
    ".": "src/index.ts",
    common: "src/common/index.ts",
    web: "src/web/index.ts",
  },
  output: [
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name]/index.js",
    },
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name]/index.esm.js",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({ extract: true }),
  ],
  external: ["react", "react-dom"],
};
