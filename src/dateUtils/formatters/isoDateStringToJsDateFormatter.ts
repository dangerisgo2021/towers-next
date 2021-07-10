import { isoDateRegex } from "dateUtils/consts/isoDateRegex";

export const isoDateStringToJsDateFormatter = (key, value) => {
  if (typeof value === "string" && isoDateRegex.test(value)) {
    return new Date(value);
  }

  return value;
};
