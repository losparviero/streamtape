/*!
 * Streamtape
 * Copyright(c) 2023 Zubin
 */

"use strict";

import fetch from "node-fetch";

async function download(url, user, pass) {
  // File

  let match = url.match(/(https?:\/\/[^\s]+)/g);
  let link = match[0];
  let file = link.split("/v/")[1];
  console.log("Contacting API. Starting download.");
  let downloadLink;

  // Ticket

  await fetch(
    `https://api.streamtape.com/file/dlticket?file=${file}&login=${user}&key=${pass}`
  )
    .then((res) => res.json())
    .then((body) => {
      const data = body.result;
      let ticket = data.ticket;

      // Download

      setTimeout(async () => {
        await fetch(
          `https://api.streamtape.com/file/dl?file=${file}&ticket=${ticket}`
        )
          .then((res) => res.json())
          .then((body) => {
            downloadLink = body.result.url;
          });
      }, 5000);
    });
  return downloadLink;
}

export default { download };
