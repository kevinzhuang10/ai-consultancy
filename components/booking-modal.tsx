"use client";

import { Button } from "@/components/ui/button";

interface BookingModalProps {
  triggerText: string;
  triggerSize?: "default" | "sm" | "lg" | "icon";
  triggerVariant?: "default" | "outline" | "ghost" | "link";
  triggerClassName?: string;
}

const CAL_LINK = "https://cal.com/supermake/ai-consultation";

export function BookingModal({
  triggerText,
  triggerSize = "default",
  triggerVariant = "default",
  triggerClassName,
}: BookingModalProps) {
  const handleClick = () => {
    window.open(CAL_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      size={triggerSize}
      variant={triggerVariant}
      className={triggerClassName}
      onClick={handleClick}
    >
      {triggerText}
    </Button>
  );
}
