import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../../api/utils";
import { CountryResponse } from "../../types/country";

export const useCountry = () => {
  const {
    data: country,
    isLoading,
    error,
  } = useQuery<CountryResponse>({
    queryKey: ["country"],
    queryFn: getCountry,
  });
  return { country, isLoading, error };
};
