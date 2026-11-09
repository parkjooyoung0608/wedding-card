import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "node:fs";
import path from "node:path";

/**
 * 관리자 페이지(#admin)의 "선택하기" 결과를 프로젝트 루트의
 * admin-selection.json 파일로 저장하는 dev 전용 미들웨어.
 * CLI(Claude)가 이 파일을 읽어 선택된 버전 기반으로 틀을 잡는다.
 */
function adminSelectionWriter(): Plugin {
  return {
    name: "admin-selection-writer",
    configureServer(server) {
      server.middlewares.use("/__admin/save", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end();
          return;
        }
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            const file = path.resolve(process.cwd(), "admin-selection.json");
            fs.writeFileSync(file, body || "{}");
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: true }));
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ ok: false, error: String(e) }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), adminSelectionWriter()],
});
