import { SessionProvider } from "next-auth/react";
import SignIn from "./login/signin";


export default function SaasHome() {
  return (
    <div>
      <SignIn />
      <SessionProvider>
        <h1>Sass</h1>
      </SessionProvider>
    </div>
  )
}
