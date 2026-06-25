import { useState, useEffect } from "react";
import { fetchNotifications } from "../apis/notifications";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await fetchNotifications();

        setNotifications(data.notifications ?? []);
        setTotal(data.total ?? data.notifications?.length ?? 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const totalPages = 1;

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}