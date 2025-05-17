"use client";
import UnauthPage from "@/components/unauth-page";
import ManageAccounts from "@/components/manage-accounts";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { GlobalContext } from "@/context";
export default function Browse() {
  const { loggedInAccount } = useContext(GlobalContext);
  const { data: session } = useSession();

  if (session === null) {
    return <UnauthPage />; // Render UnauthPage if no session
  }
  if (loggedInAccount === null) return <ManageAccounts />;
  return (
    <div>
      <h1>Browse</h1>
    </div>
  );
}
