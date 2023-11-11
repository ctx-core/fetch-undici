import type { Dispatcher } from 'undici'
import type { _RequestInit } from './_RequestInit.js'
export type RequestInit = _RequestInit&{
	dispatcher?:Dispatcher
}
