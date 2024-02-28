import http from 'http'

const api = {
    "host": "api.ipify.org",
    "port": 80,
    "path": "/"
}  

const getIPAddress = () => {
    return new Promise((resolve, reject) => {
        http.get(api, (response) => {
            let data = ''
            response.on("data", (ip) => {
                data += ip
            })

            response.on("end", () => {
                resolve(data)
            })
        }).on("error", (error) => {
            reject(error)
        })
    })
}

let userIPAddress;

getIPAddress().then((ipaddress) => {
        userIPAddress = ipaddress
    }).catch((error) => {
        console.error("Error retrieving IP address:", error)
    })

console.log(await getIPAddress())