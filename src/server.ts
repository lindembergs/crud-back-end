import fastify from "fastify";

const app = fastify({ logger: true });

const start = async () => {
  try {
    await app.listen({ port: 3333 });
    console.log("servidor está rodando");
  } catch (err) {
    process.exit(1);
  }
};

start();
