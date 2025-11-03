import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(url);
            setData(response?.data)
        } catch (error) {
            setError(error.response?.data?.message || error?.message || 'Something went wrong' );
        } finally {
            setLoading(false)
        } 

    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return { data, loading, error }
}

export default UseFetch