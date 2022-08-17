import useSWR from "swr";
import request from "src/utils/request";

export default function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, request);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
