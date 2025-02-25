import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const apiKey = import.meta.env.VITE_CURRENCY_API_KEY; // Load API key

    useEffect(() => {
        if (!apiKey) {
            console.error("API Key is missing! Check your .env file.");
            return;
        }

        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.data) {
                    setData(res.data);  // Store full currency data
                } else {
                    console.error("Currency data not found:", res);
                }
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;  // Return full object instead of a single currency value
}

export default useCurrencyInfo;
