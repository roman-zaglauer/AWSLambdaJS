/**
 *  Lambda Function Handler
 * @param {Object} event - Invoke Event
 * @returns {Object} - Response
 */
exports.handler = (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    };
    return response;
};