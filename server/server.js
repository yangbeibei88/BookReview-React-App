import jsonServer from "json-server";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(__dirname + "/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(cors());
server.use(middlewares);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
