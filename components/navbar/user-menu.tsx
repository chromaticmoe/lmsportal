import { ChevronRight, Moon, Sun, User } from "lucide-react";
import { Button } from "../ui/button";
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import Link from "next/link";

const UserMenu = () => {
    const { theme, setTheme } = useTheme()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <User className="cursor-pointer p-2 rounded-full border-2 bg-foreground transition hover:bg-background" size={45} color={theme === 'dark' ? '#CCCCCC' : '#333333'} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <div className="flex flex-col items-center gap-1 p-4 w-[300px]">
                    <User className="p-2 rounded-full border-2" size={60} color={theme === 'dark' ? '#CCCCCC' : '#333333'} />
                    <p className="font-[550] text-[20px]" >John Doe</p>
                    <p>johndoe@mail.com</p>
                    <div className="my-2 border-b-4 w-full" />
                    <div className="flex flex-col w-full gap-1">
                        <Link href='/account-settings'>
                            <DropdownMenuItem className="cursor-pointer h-12 flex flex-row items-center justify-between focus:bg-foreground">
                                <p className="text-[16px]">Account Settings</p>
                                <ChevronRight />
                            </DropdownMenuItem>
                        </Link>
                        <Link href='/notifications'>
                            <DropdownMenuItem className="cursor-pointer h-12 flex flex-row items-center justify-between focus:bg-foreground" onClick={() => console.log('Account Settings')}>
                                <p className="text-[16px]">Notifications</p>
                                <ChevronRight />
                            </DropdownMenuItem>
                        </Link>
                    </div>
                    <div className="my-2 border-b-4 w-full" />
                    <Button className="w-full h-12 bg-primary" >Logout</Button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserMenu;