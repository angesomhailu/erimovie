"use client";
import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import ManageAccounts from "@/components/manage-accounts";
import { useContext } from "react";
import { GlobalContext } from "@/context";
export default function Tv() {
  const { loggedInAccount } = useContext(GlobalContext);
  const { data: session } = useSession();
  console.log("session", session);
  if (session === null) {
    return <UnauthPage />; // Render UnauthPage if no session
  }
  if (loggedInAccount === null) return <ManageAccounts />; // Render UnauthPage if no loggedInAccount
  return (
    <div>
      <h1>Tv</h1>
    </div>
  );
}
