import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";

export const useDeleteUser = (id) => {
  return useMutation({
    mutationKey: ["delete-user", "users"],
    mutationFn: () =>
      instance.delete(`/store/${id}/`).then((res) => res.data),
  });
};
