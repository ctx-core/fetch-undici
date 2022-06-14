import { Dispatcher } from 'undici'
import { _RequestInit } from './_types'
export type RequestInit = _RequestInit&{
	dispatcher?:Dispatcher
}
