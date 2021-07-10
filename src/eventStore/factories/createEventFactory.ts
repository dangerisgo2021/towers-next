import { v4 } from "uuid";
import { parseJsonString } from "eventStore/parsers/parseJsonString";
import { isoDateStringToJsDateFormatter } from "dateUtils/formatters/isoDateStringToJsDateFormatter";

export const createEventFactory = ({ payload, meta, domain, type, traceId }) => {
  const id = `event:${domain}:${v4()}`;
  let parsedPayload = parseJsonString({
    payload,
    formatter: isoDateStringToJsDateFormatter,
  });
  return {
    id,
    type,
    meta,
    domain,
    traceId,
    command: false,
    created: new Date(),
    payload: parsedPayload,
  };
};
