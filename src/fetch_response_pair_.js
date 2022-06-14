import { response_pair_ } from '@ctx-core/fetch'
import { queue_ } from '@ctx-core/queue'
import { fetch } from './undici-fetch/index.js'
let queue
set_undici_queue_size(128)
/** @type {import('@ctx-core/fetch').fetch_response_pair_} */
export async function fetch_response_pair_(input, init) {
	return queue.add(async ()=>{
		const response = await fetch(input, init)
		return await response_pair_(response)
	})
}
export function set_undici_queue_size(queue_size = 128) {
	queue = queue_(queue_size)
}
