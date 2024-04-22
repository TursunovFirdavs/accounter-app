import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";
export const useDeleteUser = (id) => {
  return useMutation({
    mutationKey: ["delete-user", "users"],
    mutationFn: (data) =>
      instance.delete(`/store/${id}/`, data).then((res) => res.data),
  });
};
