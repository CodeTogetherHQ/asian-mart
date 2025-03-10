import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

const pg = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  searchPath: ["knex", "public"],
});

export default pg;
