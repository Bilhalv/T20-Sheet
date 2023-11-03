import React from "react";
import { useToast, Button } from "@chakra-ui/react";

interface ToastProps {
  title: string;
  desc: string;
  status?: "info" | "warning" | "success" | "error" | "loading";
  onCloseComplete?: () => void;
  duration?: number;
}

const useCustomToast = () => {
  const toast = useToast();

  const showCustomToast = ({
    title,
    desc,
    status,
    onCloseComplete,
    duration,
  }: ToastProps) => {
    return toast({
      title: title,
      description: desc,
      status: status || "success",
      duration: duration || 2000,
      isClosable: true,
      onCloseComplete: onCloseComplete,
    });
  };

  return { showCustomToast };
};

export default useCustomToast;
