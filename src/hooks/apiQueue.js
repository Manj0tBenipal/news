import PQueue from "p-queue";
import axios from "axios";
const queue = new PQueue({
  concurrency: 1,
  intervalCap: 2,
  interval: 1400,
});

const baseURL = "https://api.jikan.moe/v4/";
export async function queueRequest(endpoint) {
  return queue.add(async () => {
    return await axios.get(`${baseURL + endpoint}`).catch((error) => {});
  });
}
