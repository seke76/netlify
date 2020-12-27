exports.handler = async function(event, context) {
    console.log("HOOK RECEIVED");
    //const body = JSON.parse(event.body);
    console.log(event.body);
    
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}

