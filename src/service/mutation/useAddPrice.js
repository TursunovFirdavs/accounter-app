import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";

export const useAddPrice = () => {
    return useMutation({
        mutationKey: ['add-price'],
        mutationFn: (data) => instance
            .post('transaction-history/create/', data)
            .then(res => res.data)
    })
}