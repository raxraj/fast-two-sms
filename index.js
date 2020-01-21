var unirest = require('unirest')

const sendMessage = (props)=>{
    if(props.method === undefined){
        props.method='POST'
    }
    if(props.sender_id===undefined){
        props.sender_id='FSTSMS'
    }
    if(props.language===undefined){
        props.language = 'english'
    }
    if(props.route===undefined){
        props.route = 'p'
    }
    if(props.flash === undefined){
        props.flash = 0;
    }

    var req = unirest(props.method , "https://www.fast2sms.com/dev/bulk")

    var nums = props.numbers.join(',')  
    console.log(nums);
      
      if(props.method==='GET'){ //NO-CACHE ONLY IF GET
        req.query({
            "authorization": props.authorization,
            "sender_id": props.sender_id,
            "message": props.message,
            "language": props.language,
            "route": props.route,
            "numbers": nums,
            "flash" : props.flash
          });
        req.headers({
            "cache-control": "no-cache"
          });
      }
      else{
        req.headers({
            "authorization": props.authorization
          });
          
          req.form({
            "sender_id": props.sender_id,
            "message": props.message,
            "language": props.language,
            "route": props.route,
            "numbers": nums,
          });
      }
      
    req.end(function (res) {
        if (res.error) console.log(res);
        
        console.log(res.body);
        
    });
}

module.exports = {
    sendMessage : sendMessage
}