/// <reference lib="dom" />
import type { RequestInit } from '../RequestInit'
export declare function fetch_response_pair__new<Body>(
	input:RequestInfo,
	init?:RequestInit
):Promise<[Body, Response]>