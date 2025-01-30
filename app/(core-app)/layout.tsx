'use client'

import Navbar from "@/components/navbar/navbar";

export default function CoreAppLayout ({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )

}