import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetValyut = () => {
    return useQuery(({
        queryKey: ['valyut'],
        queryFn: () => axios('https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
            .then(res => res.data)
    }))
}