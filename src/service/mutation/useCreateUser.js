import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";
import { loadState } from "../../storage";

export const useCreateUser = () => {
    return useMutation({
        mutationKey: ['create-user', 'users'],
        mutationFn: (data) => instance
            .post('/store/create/', data)
            .then(res => res.data)
    })
}