import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ConfigObject {
	axiosInstance: AxiosInstance;
	requestConfig?: AxiosRequestConfig;
}

const httpRequest = async <T>(
	configObject: ConfigObject
): Promise<AxiosResponse<T>> => {
	const { axiosInstance, requestConfig } = configObject;

	try {
		const response = await axiosInstance({
			...requestConfig,
		});

		if (!(response.status > 199 && response.status < 300)) {
			throw new Error(
				`Could not fetch ${requestConfig?.url}, status: ${response.status}`
			);
		}

		return response;
	} catch (err) {
		throw err;
	}
};

export default httpRequest;
