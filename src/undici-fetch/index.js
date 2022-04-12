const { fetch, Headers, Request, Response } = require('undici')
Object.assign(globalThis, {
	fetch,
	Headers,
	Request,
	Response,
})
module.exports = {
	default: {
		fetch, Headers, Request, Response
	}
}
