import { useState, useEffect } from 'react'
import { API_KEY } from "../utils/keys";

const CONTEXT_KEY = "7f81bf38fcf845031";

const useGoogleSearch = (searchTerm) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const url = "https://www.googleapis.com/customsearch/v1";

                const params = new URLSearchParams({
                    key: API_KEY,
                    cx: CONTEXT_KEY,
                    q: searchTerm
                });

                const response = await fetch(`${url}?${params.toString()}`)

                const _data = await response.json();

                setData(_data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [searchTerm]);

    return { data };
}

export default useGoogleSearch;
