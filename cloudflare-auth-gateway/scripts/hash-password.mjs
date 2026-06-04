import { pbkdf2Sync, randomBytes } from "node:crypto";
const [username,password,role="owner"]=process.argv.slice(2);
if(!username||!password){console.error("Usage: npm run hash-password -- <username> <password> [owner|admin|viewer]");process.exit(1)}
const iterations=210000,salt=randomBytes(16).toString("hex"),hash=pbkdf2Sync(password,Buffer.from(salt,"hex"),iterations,32,"sha256").toString("hex"),now=Date.now();
console.log(`INSERT INTO users (username, password_hash, password_salt, password_iterations, role, enabled, created_at) VALUES ('${username.toLowerCase().replaceAll("'","''")}', '${hash}', '${salt}', ${iterations}, '${role}', 1, ${now});`);
