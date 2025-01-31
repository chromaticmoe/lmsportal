import { ThemeToggle } from "./theme-toggle";
import { LayoutGrid, User } from "lucide-react"
import Logo from "../../public/logo.svg";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import UserMenu from "./user-menu";
import Link from "next/link";

const Navbar = () => {
    const { theme } = useTheme();
    const pathname = usePathname();
    const routeName = pathname
        .split('/')
        .filter(Boolean)
        .pop()?.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return (
        <div className="border-b-2 border-neutral-200 dark:border-gray-700 px-8 shadow-sm">
            <div className="flex h-16 items-center px-4">
                <div className="flex items-center gap-4">
                    <Link href='/dashboard'>
                        <Logo width={140} height={60} />
                    </Link>
                    <div className="cursor-pointer ml-8 rounded-full p-2 transition hover:bg-foreground flex items-center justify-center">
                        <LayoutGrid strokeWidth={1.5} color={theme === 'dark' ? '#CCCCCC' : '#333333'} />
                    </div>
                    <p className="font-bold text-[20px]">{routeName}</p>
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />
                    <UserMenu />
                    {/* <User className="p-2 rounded-full border-2" size={40} color={theme === 'dark' ? '#CCCCCC' : '#333333'} /> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;