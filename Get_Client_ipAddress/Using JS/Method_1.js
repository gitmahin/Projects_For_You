import http from 'http'
import chalk from 'chalk'

const api = {
        "host": "api.ipify.org",
        "port": 80,
        "path": "/"
    }

        const getIPAddress = () => {
            return new Promise((resolve, reject) => {
                http.get(api, (response) => {
                    response.on("data", (ip) => {
                        const ipaddress = chalk.yellow(ip)
                        const ballul = ipaddress.toString()
                        resolve(ballul );
                    });
                }).on("error", (error) => {
                    reject(error);
                });
            });
        }
        
     
        let finalIPAddress;
        
        getIPAddress()
            .then((ballul ) => {
                finalIPAddress = ballul ; 
            })
            .catch((error) => {
                console('error ip address');
            });
    
    let userIP = await getIPAddress()
    console.log(userIP);