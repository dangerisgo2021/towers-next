import { createEventService } from "eventStore/services/createEventService";

export default async (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    const eventId = await createEventService({ ...req.body });

    res.status(200).json({ eventId });
  } else if (req.method === "GET") {
    // Process a POST request
    res.status(200).json({ result: "read not supported yet" });
  } else {
    res.status(400).json({ result: "invalid operation" });
  }
};
