/**
 *  Lambda Function Handler
 * @param {JSON} event - Invoke Event
 * @returns {JSON} - Response
 */
exports.handler = (event) => {
							const response = {
        statusCode: 200   ,
        body: JSON.stringify('Hello from Lambda!')
    };
    return response;
};