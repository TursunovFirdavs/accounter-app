import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";

export const useLogin = () => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: (data) => instance
            .post('/account/token/', data)
            .then(res => res.data)
    })
}