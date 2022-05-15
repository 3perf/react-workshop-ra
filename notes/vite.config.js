import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@welldone-software/why-did-you-render",
    }),
  ],
  resolve: {
    alias: {
      // Needed for `useSelector` tracking in wdyr.js: https://github.com/welldone-software/why-did-you-render/issues/85
      "react-redux": "react-redux/dist/react-redux.js",
    },
  },
});
