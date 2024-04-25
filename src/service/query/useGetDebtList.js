import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";

export const useGetDebtList = () => {
    return useQuery({
        queryKey: ['debt-list'],
        queryFn: () => instance
            .get('/transaction-history/')
            .then(res => res.data)
    })
}