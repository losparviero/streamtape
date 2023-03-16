/*!
 * Streamtape.js
 * Copyright(c) 2023 Zubin
 */

"use strict";

const request = require("request");

async function download(url, user, pass) {
  // File
  let match = url.match(/(https?:\/\/[^\s]+)/g);
  let link = match[0];
  let file = link.split("/v/")[1];

  // Ticket

  try {
    let ticketResponse = await new Promise((resolve, reject) => {
      request(
        `https://api.streamtape.com/file/dlticket?file=${file}&login=${user}&key=${pass}`,
        (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        }
      );
    });

    let ticketData = JSON.parse(ticketResponse.body);
    let ticket = ticketData.result.ticket;

    // Download

    let downloadLink;
    const downloadPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        request(
          `https://api.streamtape.com/file/dl?file=${file}&ticket=${ticket}`,
          (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              let downloadData = JSON.parse(body);
              downloadLink = downloadData.result.url;
              resolve(downloadLink);
            }
          }
        );
      }, 5000);
    });

    const result = await downloadPromise;
    return { url: result };
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = { download };
