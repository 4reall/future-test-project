export {};
// import { useState, useCallback } from 'react';
//
// export const useHttp = () => {
// 	const [error, setError] = useState(false);
// 	const [loading, setLoading] = useState(false);
//
// 	const request = useCallback(
// 		async (
// 			url,
// 			method: Method = 'GET',
// 			body = null,
// 			headers = { 'Content-Type': 'application/json' }
// 		) => {
// 			try {
// 				setLoading(true);
// 				const response = await fetch(url, { method, body, headers });
//
// 				if (!response.ok) {
// 					throw new Error(
// 						`Could not fetch ${url}, status ${response.status}`
// 					);
// 				}
//
// 				const data = await response.json();
//
// 				setLoading(false);
//
// 				return data;
// 			} catch (e) {
// 				setLoading(false);
// 				setError(e.message);
// 				throw e;
// 			}
// 		},
// 		[]
// 	);
// 	const clearError = useCallback(() => setError(null), []);
//
// 	return { loading, error, request, clearError };
// };
