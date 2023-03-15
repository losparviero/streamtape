// Add env vars as a preliminary

import dotenv from "dotenv";
dotenv.config();
import st from "../src/index.js";
import input from "input";

async function getLink() {
  let url;
  do {
    url = await input.text("Enter Streamtape link:", { default: null });
    if (url == null) {
      console.log("Enter a valid Streamtape link.");
    }
  } while (url == null);
  return url;
}

async function test() {
  const url = await getLink();
  await st
    .download(url, process.env.API_USER, process.env.API_PASS)
    .then(console.log)
    .catch((error) => console.log(error));
}

test();
