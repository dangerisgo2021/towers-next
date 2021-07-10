import { createCommandService } from "eventStore/services/createCommandService";

export default async (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    const commandId = await createCommandService({ ...req.body });

    res.status(200).json({ commandId });
  } else if (req.method === "GET") {
    // Process a POST request
    res.status(200).json({ result: "read not supported yet" });
  } else {
    res.status(400).json({ result: "invalid operation" });
  }
};
