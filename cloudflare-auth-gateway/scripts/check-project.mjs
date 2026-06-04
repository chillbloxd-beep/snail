import { readFileSync, existsSync } from "node:fs";
const req=["src/index.js","schema.sql","wrangler.toml","dashboard/index.html","dashboard/config.js","dashboard/js/app.js","dashboard/js/core/diagnostics.js","dashboard/js/core/worker.js","dashboard/js/modules/planning.js"];
let ok=true;for(const f of req){if(!existsSync(f)){console.error("MISSING "+f);ok=false}else console.log("OK "+f)}
const w=readFileSync("src/index.js","utf8");for(const n of ["HttpOnly","SameSite=Lax","Content-Security-Policy","PBKDF2","commandAllowed","proxyWs","verifyCsrf"]){if(!w.includes(n)){console.error("MISSING "+n);ok=false}else console.log("OK "+n)}
if(!ok)process.exit(1);
