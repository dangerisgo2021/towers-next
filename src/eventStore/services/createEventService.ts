import { publishActionService } from "eventStore/services/publishActionService";
import { createEventFactory } from "eventStore/factories/createEventFactory";
import { writeActionRepo } from "eventStore/repos/writeActionRepo";

export const createEventService = async ({
  payload,
  meta,
  domain,
  type,
  traceId,
}) => {
  console.log("createEventService", "RECEIVED_EVENT", {
    payload,
    meta,
    domain,
    type,
    traceId,
  });

  const event = createEventFactory({ payload, meta, domain, type, traceId });

  try {
    console.log("START_WRITING_EVENT");
    await writeActionRepo({ action: event });
    console.log("SUCCESS_WRITING_EVENT", event);
  } catch (err) {
    console.error("ERROR_WRITING_EVENT", err);
  }

  try {
    console.log("START_PUBLISHING_EVENT");
    await publishActionService({ action: event });
    console.log("SUCCESS_PUBLISHING_EVENT", event);
  } catch (err) {
    console.error("ERROR_PUBLISHING_EVENT", JSON.stringify(err));
  }

  return event.id;
};
