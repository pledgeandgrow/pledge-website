"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface FormErrorMessageProps {
  message?: string;
  className?: string;
  id?: string;
}

export function FormErrorMessage({ message, className, id }: FormErrorMessageProps) {
  const fallbackId = useId();
  const errorId = id || fallbackId;
  
  if (!message) return null;
  
  return (
    <div
      id={errorId}
      aria-live="polite"
      className={cn(
        "flex items-center gap-2 text-sm text-destructive mt-1",
        className
      )}
    >
      <AlertCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
}
