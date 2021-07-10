export const parseJsonString = ({ payload, formatter }) => {
  console.log("parseJsonStringWithDateFormatter", { payload, formatter });
  if (typeof payload !== "string") {
    console.error("parseJsonStringWithDateFormatter", "payload is not string", {
      payload,
    });
    return undefined;
  }

  let parsedPayload;

  try {
    parsedPayload = JSON.parse(payload, formatter);
  } catch (err) {
    console.error("parseJsonStringWithDateFormatter", err);
    return undefined;
  }

  return parsedPayload;
};
