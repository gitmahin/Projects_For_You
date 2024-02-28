const getip = async ()=>{

    try{
        const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
        const data = await response.text()
        
        const ipMatched = data.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/)
        if(ipMatched){
            console.log(ipMatched[0]);
            
        }

    }catch(err){
        console.log('err ip');
        
    }

}

getip()