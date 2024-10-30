import { useState, useEffect } from "react";

export const useClock = (interval) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDate(new Date()), interval);

    return () => clearInterval(id);
  }, []);

  return date;
};
