/*!
 * Streamtape
 * Copyright(c) 2023 Zubin
 */

"use strict";

import fetch from "node-fetch";

async function download(url, user, pass) {
  let match = url.match(/(https?:\/\/[^\s]+)/g);
  let link = match[0];
  let file = link.split("/v/")[1];
  console.log("Contacting API. Starting download.");

  let ticketRes = await fetch(
    `https://api.streamtape.com/file/dlticket?file=${file}&login=${user}&key=${pass}`
  );
  let ticketData = await ticketRes.json();
  let ticket = ticketData.result.ticket;

  let downloadLink;
  setTimeout(async () => {
    let downloadRes = await fetch(
      `https://api.streamtape.com/file/dl?file=${file}&ticket=${ticket}`
    );
    let downloadData = await downloadRes.json();
    downloadLink = downloadData.result.url;
  }, 5000);

  return new Promise((resolve) => {
    const checkDownloadLink = () => {
      if (downloadLink) {
        resolve(downloadLink);
      } else {
        setTimeout(checkDownloadLink, 1000);
      }
    };
    checkDownloadLink();
  });
}

export default { download };
