import React from "react";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  seed: string;
  variant: "bottsNeutral" | "initials";
  className?: string;
}

export const GeneratedAvatar = ({
  seed,
  variant,
  className,
}: GeneratedAvatarProps) => {
  let avatar;

  if (variant === "bottsNeutral") {
    avatar = createAvatar(botttsNeutral, {
      seed: seed,
    });
  } else {
    avatar = createAvatar(initials, {
      seed: seed,
      fontWeight: 500,
      fontSize: 42,
    });
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
