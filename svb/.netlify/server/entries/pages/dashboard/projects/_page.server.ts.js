import { e as error } from "../../../../chunks/index.js";
const load = async () => {
  try {
    const response = await fetch("http://localhost:5173/api/projects");
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const projects = await response.json();
    return { projects };
  } catch (err) {
    console.error(err);
    throw error(500, "Unable to fetch projects");
  }
};
export {
  load
};
