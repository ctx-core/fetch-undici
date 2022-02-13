import { fetch } from 'undici'
import { response_pair_ } from '@ctx-core/fetch'
/**
 * @template Body
 * @param {RequestInfo}input
 * @param {RequestInit}[init]
 * @return {Promise<[Body, Response]>}
 * @private
 */
export async function fetch_response_pair_(input, init) {
  const response = await fetch(input, init)
	return await response_pair_(response)
}
