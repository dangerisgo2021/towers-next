import { getDatabaseConnection } from "database/services/getDatabaseConnection";
import { collections } from "database/consts/database";

export const writeActionRepo = async ({ action }) => {
  const { db } = await getDatabaseConnection();

  try {
    console.log("writeActionRepo", "START_INSERTING_ACTION", {
      actionToWrite: action,
    });
    const result = await db.collection(collections.actions).insertOne(action);
    console.log("writeActionRepo", "SUCCESS_INSERTING_ACTION", action, {
      result: result.ok,
    });
  } catch (err) {
    console.error("writeActionRepo", "ERROR_INSERTING_ACTION", err);
    return undefined;
  }
};
