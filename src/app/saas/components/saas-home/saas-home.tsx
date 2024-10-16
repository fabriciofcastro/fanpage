import { SessionProvider } from "next-auth/react";
import Dashboard from "./dashboad/dashboard";
import SignIn from "./login/signin";


export default function SaasHome() {
  return (
    <div>
      <SignIn />
      <SessionProvider>
        <Dashboard />
      </SessionProvider>
    </div>
  )
}
