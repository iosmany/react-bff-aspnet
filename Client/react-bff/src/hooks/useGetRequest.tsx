
import loadingStatus from "@/helpers/loadingStatus";
import { useCallback, useState } from "react";


/**
 * Custom hook to perform a GET request.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {[() => Promise<any>, string]} - Returns an array containing the `get` function to initiate the request and the `loading` status.
 *
 * @example
 * const [get, loading] = useGetRequest('https://api.example.com/data');
 *
 * useEffect(() => {
 *   const fetchData = async () => {
 *     const data = await get();
 *     console.log(data);
 *   };
 *   fetchData();
 * }, [get]);
 *
 * @remarks
 * The `loading` status can be one of the following:
 * - `loadingStatus.loading`: Indicates that the request is in progress.
 * - `loadingStatus.loaded`: Indicates that the request has completed successfully.
 * - `loadingStatus.error`: Indicates that there was an error during the request.
 */
const useGetRequest = <T,>(url: string) => {
    const [loading, setLoading] = useState<string>(loadingStatus.loading);
    const get= useCallback(async () : Promise<T[]> => {
        setLoading(loadingStatus.loading);
        try {
            const response = await fetch(url);
            const data: T[] = await response.json();
            setLoading(loadingStatus.loaded);
            return data;
        } catch (error) {
            console.error(error);
            setLoading(loadingStatus.error);
        }
        return [];
    }, [url])
    return [get, loading]
}

export default useGetRequest;