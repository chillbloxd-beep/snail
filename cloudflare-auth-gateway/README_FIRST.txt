# Study Secure Dashboard v7 Package

Folders:
- cloudflare-auth-gateway: Cloudflare Worker + D1 + protected dashboard assets
- dashboard-v7-standalone: same dashboard for review only, not secure hosting

Security included:
- Real server-side login
- D1 users/sessions/audit/login_attempts/devices tables
- PBKDF2 password hashes + salts
- HttpOnly Secure SameSite session cookie
- CSRF token for write actions
- Roles: owner/admin/viewer
- Server-side command allowlist
- Audit logs
- Login rate limiting
- Protected dashboard assets
- Protected API proxy
- Protected WebSocket proxy
- Blank unauthenticated root page
- CSP, noindex, frame protection headers

Codespaces setup:
cd cloudflare-auth-gateway
npm install
npx wrangler login
npx wrangler d1 create study_auth_db

Copy the database_id into wrangler.toml.
Edit BACKEND_BASE_URL in wrangler.toml.

Set secrets:
npx wrangler secret put BACKEND_API_KEY
npx wrangler secret put IP_HASH_SECRET

Apply DB:
npm run d1:apply

Create user SQL:
npm run hash-password -- jayvian "yourStrongPassword" owner

Paste SQL:
npx wrangler d1 execute study_auth_db --remote --command="PASTE_SQL_HERE"

Check and deploy:
npm run check
npm run deploy

Open /login on your deployed Worker.
