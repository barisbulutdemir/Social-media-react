import {
    FaArrowRight,
    FaBeer, FaBell,
    FaBookmark,
    FaHome,
    FaLayerGroup,
    FaPeopleArrows,
    FaPeopleCarry,
    FaPersonBooth,
    FaUser
} from 'react-icons/fa';
import {useRouter} from "next/router";
import Link from "next/link";

export default function NavBar() {
    const router = useRouter();
    const {asPath:pathname} = router;
    const activeElement =" flex items-center gap-2  cursor-pointer navbarButton bg-blue-400 text-white -mx-5 px-5 rounded-md shadow-md shadow-gray-300"
    const nonActiveElement = "flex items-center cursor-pointer navbarButton"

    return(
        <>
            <div className="">
           <div className=" cart-style  ">
               <div className="flex items-center cursor-pointer text-gray-500 text-sm mb-3 ">
               <h2>Navigation</h2>
               </div>
                <div className="flex md:block justify-between px-10 md:px-1 ">
               <Link href='/' className={pathname === '/' ? activeElement : nonActiveElement}>
                   <FaHome/> <a className="hidden md:block"> Home</a>
               </Link>

               <Link href='/profile/friends' className={pathname === '/profile/friends' ? activeElement : nonActiveElement}>
                   <FaUser className="scale-120"/> <a className="hidden md:block" > Friends</a>
               </Link>

               <Link href='/profile/photos' className={pathname === '/profile/photos' ? activeElement : nonActiveElement}>
                   <FaBookmark/> <a className="hidden md:block"> Saved posts</a>
               </Link>

               <Link href='/notifications' className={pathname === '/notifications' ? activeElement : nonActiveElement}>
                   <FaBell/> <a className="hidden md:block"> Notifications</a>
               </Link>

               <Link href='/' className={nonActiveElement}>
                   <FaArrowRight/> <a className="hidden md:block"> Logout</a>
               </Link>
                </div>

           </div>
            </div>
        </>
    )
}