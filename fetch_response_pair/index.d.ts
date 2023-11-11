/// <reference lib="dom" />
export declare function fetch_response_pair__new<Body>(
	input:RequestInfo,
	init?:RequestInit
):Promise<[Body, Response]>