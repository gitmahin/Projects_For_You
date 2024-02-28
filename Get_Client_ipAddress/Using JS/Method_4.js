import http from 'http'

const api = {
  host: "api.ipify.org",
  port: 80,
  path: "/",
};

http.get(api, (response) => {
  response.on("data", (ip) => {
    console.log(`\n ip address is: \x1b[33m${ip}\x1b[0m\n`);
  });
});