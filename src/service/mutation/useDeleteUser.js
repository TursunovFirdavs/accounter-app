import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: ["delete-user", "users"],
    mutationFn: (id) =>
      instance.delete(`/store/${id}/`).then((res) => res.data),
  });
};
