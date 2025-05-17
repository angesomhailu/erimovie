"use client";
import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";

export default function Mylist() {
  const { data: session } = useSession();

  if (session === null) {
    return <UnauthPage />; // Render UnauthPage if no session
  }

  return (
    <div>
      <h1>Mylist</h1>
    </div>
  );
}
