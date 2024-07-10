import { Globe } from "@/components/Globe";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const title = "Real Time Chat App";
  const subtitle = "Engage in conversations with people from various parts of the globe!";

  const {userId} =  auth();

  if(userId){
    redirect('/dashboard')
  }
  return (
    <Globe title={title} subtitle={subtitle} />
  );
}
