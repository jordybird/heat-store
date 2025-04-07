import { CreateAccountForm } from "@/components/auth/create-account"
import Header from "@/components/header/home";

export default function SmokeUpPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md">
        <CreateAccountForm />
      </div>
    </div>
    </>
  )
}
