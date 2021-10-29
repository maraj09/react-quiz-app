import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(`0%`);
  const fetchData = useCallback(async () => {
    setLoading(true);
    setProgress(`25%`);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          setProgress(`100%`);
          return response.json();
        } else {
          throw new Error("Something went wrong in URL");
        }
      })
      .then((responseJson) => {
        setData(responseJson);
        setTimeout(()=>{setLoading(false)}, 1000)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { data, loading, progress };
};

export default useFetch;
