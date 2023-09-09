import { Headers } from '../undici-fetch/index.js'
export function headers__new(init) {
	return new Headers(init)
}
export {
	headers__new as headers_,
	headers__new as _headers,
}