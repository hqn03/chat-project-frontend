import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), "");
  const serverConfig = {
    host: true,
    port: 3000,
    strictPort: true,
  };
  return {
    define: {
      "process.env.CLIENT_ID": JSON.stringify(env.CLIENT_ID),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    preview: serverConfig,
    server: serverConfig,
  };
});
