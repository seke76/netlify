exports.handler = async function(event, context) {
    console.log("Fjast");
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}

console.log("bottom!");