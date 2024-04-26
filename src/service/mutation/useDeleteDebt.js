import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";

export const useDeleteDebt = () => {
  return useMutation({
    mutationKey: ["delete-debt"],
    mutationFn: (id) =>
      instance.delete(`/transaction-history/${id}/`).then((res) => res.data),
  });
};
