"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function HomeView() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>...Loading</p>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>Signed in as {session.user?.email}</div>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/sign-in");
              },
            },
          })
        }
      >
        Sign out
      </Button>
    </div>
  );
}
