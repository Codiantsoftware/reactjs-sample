import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { z } from "zod";

export default function useAxios(baseURL = import.meta.env.VITE_API_URL) {
	const [loading, setLoading] = useState(null);
	const ref = useRef(new AbortController());
	let isMounted = useRef(null);
	axios.defaults.baseURL = baseURL;

	useEffect(() => {
		return () => {
			if (isMounted?.current) {
				ref.current.abort();
			}
			isMounted.current = "mounted";
		}
	}, [])

	return {
		get: async (url) => {
			try {
				setLoading('get');
				const response = await axios.get(url, { signal: ref.current.signals });
				setLoading(null);
				return response;
			} catch (err) {
				setLoading(null);
				throw err;
			}
		},
		post: (url, data) => {
			try {
				setLoading('post');
				const response = axios.post(url, data, { signal: ref.current.signal });
				setLoading(null);
				return response;
			} catch (err) {
				setLoading(null);
				throw err;
			}
		},
		put: (url, data) => {
			try {
				setLoading('put');
				const response = axios.put(url, data, { signal: ref.current.signal });
				setLoading(null);
				return response;
			} catch (err) {
				setLoading(null);
				throw err;
			}
		},
		delete: (url) => {
			try {
				setLoading('delete');
				const response = axios.delete(url, { signal: ref.current.signal });
				setLoading(null);
				return response;
			} catch (err) {
				setLoading(null);
				throw err;
			}
		},
		patch: (url, data) => {
			try {
				setLoading('patch');
				const response = axios.patch(url, data, { signal: ref.current.signal });
				setLoading(null);
				return response;
			} catch (err) {
				setLoading(null);
				throw err;
			}
		},
		loading,
		getNewToken() {
			return (new AbortController()).signal;
		}
	};
}