"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {

  const { 
        data: session, 
        
    } = authClient.useSession() 
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");

  const onSubmit = ()=> {
    authClient.signUp.email({
      email,
      password,
      name},
      {
        onError: ()=>
          window.alert("Error creating user"),
        onSuccess: ()=>
          window.alert("User created successfully")
      }
    )

  }

  if (session) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <div>Signed in as {session.user?.email}</div>
        <Button onClick={()=>
          authClient.signOut()
        }>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <Input placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} />
      <Input placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      <Input placeholder="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <Button onClick={onSubmit}>Create user</Button>
    </div>
  );
}
