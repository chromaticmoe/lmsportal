'use client'

import Navbar from "@/components/navbar/navbar";
import { useTheme } from "next-themes";

export default function CoreAppLayout ({children}: {children: React.ReactNode}) {
    const { theme } = useTheme();
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )

}