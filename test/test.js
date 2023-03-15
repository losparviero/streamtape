// Add env vars as a preliminary

import dotenv from "dotenv";
dotenv.config();
import st from "../src/index.js";

const url = "https://streamtape.com/v/kP30d22qLZi06D";

async function test() {
  await st
    .download(url, process.env.API_USER, process.env.API_PASS)
    .then(console.log)
    .catch((error) => console.log(error));
}

test();
