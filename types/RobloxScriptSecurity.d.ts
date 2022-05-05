interface DataModel {
	/**
	 * Sends a HTTP GET request to the given URL and returns the response body.
	 */
	HttpGetAsync(
		this: DataModel,
		url: string,
		httpRequestType?: Enum.HttpRequestType,
	): LuaTuple<[body: string, code: number]>;

	/**
	 * Sends a POST request to the specified url, using the specified data and contentType.
	 */
	HttpPostAsync(
		this: DataModel,
		url: string,
		data: string,
		contentType?: string,
		httpRequestType?: Enum.HttpRequestType,
	): string;
}
