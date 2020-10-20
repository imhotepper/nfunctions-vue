exports.handler = async(event, context, callback) => {
    // your server-side functionality
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: `Random number generated: ${Math.floor(Math.random() * 100)}`
        })
    });
};