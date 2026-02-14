import database from "infra/database.js";

let requestCount = 0;

export default async function status(request, response) {
  requestCount += 1;
  const result = await database.query("SELECT 1 + 1 as sum");
  console.log(`[api/v1/status] Requisição #${requestCount}:`, result.rows);
  response.status(200).json({ chave: "são acima da média" });
}
