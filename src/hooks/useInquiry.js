import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance";
import toast from "react-hot-toast";

export const useSendInquiry = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/inquiry", data);
      return res.data;
    },
    onSuccess: () => toast.success("GreenWorld has received your inquiry! 🌿"),
    onError: (err) => toast.error(err)
  });
};

export const useCreateInquiry = () => {
  return useMutation({
    mutationFn: (data) => axiosInstance.post("/inquiries", data),
    onSuccess: () => toast.success("Inquiry sent successfully!"),
    onError: (err) => toast.error(err),
  });
};