import { fetch } from 'undici'
export { fetch }
/**
 * @param {import('undici').RequestInfo} input
 * @param {import('undici').RequestInit} [init]
 * @private
 */
export async function safe_fetch(input, init) {
	const res = await fetch(input, init)
	for await (const chunk of res) {}
	return res
}
