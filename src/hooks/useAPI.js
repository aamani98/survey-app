import { useState } from "react";

export default useAPI = (apiFunction) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    try {
      setLoading(true);
      const { data: resData } = await apiFunction(...args);
      setData(resData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { loading, data, error, request };
};
