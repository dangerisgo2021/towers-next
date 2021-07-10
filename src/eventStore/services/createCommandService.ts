import { publishActionService } from "eventStore/services/publishActionService";
import { createCommandFactory } from "eventStore/factories/createCommandFactory";
import { writeActionRepo } from "eventStore/repos/writeActionRepo";

export const createCommandService = async ({ payload, meta, domain, type }) => {
  console.log("createCommandService", "RECEIVED_COMMAND", {
    payload,
    meta,
    domain,
    type,
  });


  const command = createCommandFactory({ payload, meta, domain, type });

  try {
    console.log("createCommandService", "START_WRITING_COMMAND", {
      commandToWrite: command,
    });
    await writeActionRepo({ action: command });
    console.log("createCommandService", "SUCCESS_WRITING_COMMAND", command);
  } catch (err) {
    console.error("createCommandService", "ERROR_WRITING_COMMAND", err);
  }

  try {
    console.log("createCommandService", "START_PUBLISHING_COMMAND");
    await publishActionService({ action: command });
    console.log("createCommandService", "SUCCESS_PUBLISHING_COMMAND", command);
  } catch (err) {
    console.error(
      "createCommandService",
      "ERROR_PUBLISHING_COMMAND",
      JSON.stringify(err)
    );
  }

  return command.id;
};
