import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";

export const useGetUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => instance
            .get('/store/')
            .then(res => res.data)
    })
}