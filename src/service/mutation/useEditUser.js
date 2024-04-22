import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";

export const useEditUser = (id) => {
  return useMutation({
    mutationKey: ["edit-user", "users"],
    mutationFn: (data) =>
      instance.patch(`/store/${id}/`, data).then((res) => res.data),
  });
};
