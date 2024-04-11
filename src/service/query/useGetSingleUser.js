import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";

export const useGetSingleUser = (id) => {
    return useQuery({
        queryKey: ['user'],
        queryFn: () => instance
            .get(`/store/${id}`)
            .then(res => res.data)
    })
}