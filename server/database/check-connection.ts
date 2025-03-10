import pg from "./connection";

const checkConnection = async (): Promise<void> => {
  try {
    await pg.raw("SELECT 1+1 AS result");
    console.log(
      "Knex connected successfully to PostgreSQL database container!"
    );
  } catch (error: unknown) {
    // Type guard: check if the error is an instance of Error
    if (error instanceof Error) {
      console.error("Failed to connect to the PostgreSQL database container");
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
};

export default checkConnection;
