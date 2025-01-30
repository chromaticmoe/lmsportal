import { ThemeToggle } from "./theme-toggle";
import { LayoutGrid, User } from "lucide-react"
import Logo from "../../public/logo.svg";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import UserMenu from "./user-menu";

const Navbar = () => {
    const pathname = usePathname();
    const { theme } = useTheme();
    const lastPathSegment = pathname.split('/').filter(Boolean).pop();
    const routeName = lastPathSegment ? lastPathSegment.charAt(0).toUpperCase() + lastPathSegment.slice(1) : '';

    return (
        <div className="border-b-2 border-neutral-200 dark:border-gray-700 px-8">
            <div className="flex h-16 items-center px-4">
                <div className="flex items-center gap-4">
                    <Logo width={140} height={60} />
                    <div className="cursor-pointer ml-8 rounded-full p-2 transition hover:bg-foreground hover:border-text border-background border-[1px] flex items-center justify-center">
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