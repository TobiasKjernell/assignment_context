import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
    const pathUrl = usePathname();

    return (
        <menu className="border-b-amber-700 border-b text-lg md:text-2xl ">
            <ul className="flex justify-evenly">
                <li ><Link className={`${pathUrl === '/' ? 'bg-amber-500' : ''}`} href='/'>Home</Link></li>
                <li ><Link className={`${pathUrl === '/category' ? 'bg-amber-500' : ''}`}  href='/category'>By Category</Link></li>
                <li ><Link className={`${pathUrl === '/countries' ? 'bg-amber-500' : ''}`}  href='/countries'>By Country</Link></li>
                <li ><Link className={`${pathUrl === '/mycorner' ? 'bg-amber-500' : ''}`}  href='/mycorner'>My Corner</Link></li>
            </ul>
        </menu>
    )
}

export default Menu;