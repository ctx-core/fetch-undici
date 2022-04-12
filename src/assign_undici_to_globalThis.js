import { fetch, Headers, Request, Response } from './undici-fetch/index.js'
export function assign_undici_to_globalThis() {
	Object.assign(globalThis, {
		fetch,
		Headers,
		Request,
		Response,
	})
}
