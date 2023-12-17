import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // fetch data function
  const fetchData = async (Url) => {
    try {
      let res = await fetch(Url);
      let data = await res.json();
      setAllData(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error);
      setAllData(null);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return {
    allData,
    isError,
    isLoading,
  };
}
