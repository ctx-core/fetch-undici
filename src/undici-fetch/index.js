const { fetch, Headers, Request, Response } = require('undici')
Object.assign(globalThis, {
	fetch,
	Headers,
	Request,
	Response,
})
module.exports = {
	fetch, Headers, Request, Response
}
