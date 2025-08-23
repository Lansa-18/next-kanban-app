import { getBoardData } from "@/_lib/api";
import { useQuery } from "@tanstack/react-query";

export function useGetBoardData() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["boardDatas"],
    queryFn: getBoardData,
  });

  return {data, isLoading, isError}
}
