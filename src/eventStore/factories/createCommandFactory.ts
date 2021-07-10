import { v4 } from "uuid";
import { parseJsonString } from "eventStore/parsers/parseJsonString";
import { isoDateStringToJsDateFormatter } from "dateUtils/formatters/isoDateStringToJsDateFormatter";

export const createCommandFactory = ({ payload, meta, domain, type }) => {
  const id = `command:${domain}:${v4()}`;
  let parsedPayload = parseJsonString({
    payload,
    formatter: isoDateStringToJsDateFormatter,
  });
  return {
    id,
    type,
    meta,
    domain,
    traceId: id,
    command: true,
    created: new Date(),
    payload: parsedPayload,
  };
};
