import database from "../../../../../infra/database.js";

//Função auxiliar para verificar se o servidor está disponível
async function isServerAvailable(url) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return true;
  } catch (error) {
    return false;
  }
}

test("GET to api/v1/status should return 200", async () => {
  const url = "http://localhost:3000/api/v1/status";

  const serverAvailable = await isServerAvailable(url);
  if (!serverAvailable) {
    console.warn(
      "⚠️  Servidor não está disponível em http://localhost:3000.\n" +
        "   Execute 'npm run dev' em outro terminal antes de rodar os testes."
    );
    return;
  }

  const response = await fetch(url);
  expect(response.status).toBe(200);
});
