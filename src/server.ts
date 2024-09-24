import fastify from "fastify";

const app = fastify({ logger: true });

const start = async () => {
  try {
    app.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};
