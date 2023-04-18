"use client"

import { Session } from "next-auth"
import { signIn } from 'next-auth/react'
import Image from "next/image"

export default function Nav({user}: Session){
    return (
        <nav className="flex justify-between pt-4">
            <h1>nav</h1>
            <ul>
                {!user && (
                    <li>
                        <button onClick={() => signIn()} >Sign In</button>
                    </li>
                )}
                {user && (
                    <li>
                        <Image className="rounded-full" src={user?.image as string} alt={user.name as string} width={50} height={50} />
                    </li>
                )}
            </ul>
        </nav>
    )
}