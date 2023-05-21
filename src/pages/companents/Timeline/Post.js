import Avatar from "@/pages/companents/Navbar/Avatar";
import React, {useState} from "react";
import {HiDotsHorizontal, HiOutlineChat, HiOutlineHeart, HiShare,} from "react-icons/hi";
import {CameraIcon} from "@heroicons/react/24/solid";
import PostDropdown from "@/pages/companents/Timeline/PostDropdown";
import Link from "next/link";


export default function Post(){

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdownMenu = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return(

        <>
         <div className="cart-style">
            <div className=" relative flex gap-3">

                <Link href={'/profile'}>
                    <span className="cursor-pointer">
                        <Avatar />
                    </span>
                </Link>

                <div className="grow">

                    <p>
                        <Link href={'/profile/posts'}>
                            <span className="font-semibold hover:underline mr-1">John Doe</span>
                        </Link>
                        shared a post</p>
                    <p className="text-slate-400 text-sm">2 hours ago</p>
                 </div>
                <div className="">
                    <button className={`text-${dropdownOpen ? 'slate' : 'blue'}-500`} onClick={toggleDropdownMenu}>
                        <HiDotsHorizontal/>
                    </button>



                </div>
                <div>
                    {dropdownOpen && <PostDropdown />}
                </div>
            </div>
             <div>
                 <p className="my-3 text-sm ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                     ok like readable English. Many desktop publishing
                     e(injected humour and the like).
                 </p>
                 <div className="rounded-md overflow-hidden flex ">
                     <img alt="img/post" className="w-full h-auto w-max-full" src="https://media.istockphoto.com/id/108222418/photo/brightly-colored-water-lily-floating-on-a-stil-pond.jpg?b=1&s=170667a&w=0&k=20&c=l6r_xPDX8Py5tjemaQgYeIY5XO82qUNDXD_baOzfzE8="/>

                 </div>
             </div>

             {/* Like and comment buttons */}
            <div className="flex  items-center mt-4 gap-4">
             <div className="flex gap-2 items-center ">
                 <button>
                     <HiOutlineHeart/>
                 </button>
                 <p>72</p>
             </div>
                <div className="flex gap-2 items-center ">
                    <button>
                        <HiOutlineChat/>
                    </button>
                    <p>25</p>
                </div>
             <div className="flex gap-2 items-center ">
                 <button>
                     <HiShare/>
                 </button>
                 <p>12</p>
             </div>
            </div>
             {/* Like and commet buttons finish */}

             <div className="flex mt-4 gap-3">
                 <div className="">
                 <Avatar/>
                 </div>
                 <div className="border grow rounded-full relative">
                    <textarea className="block w-full  border grow p-3 overflow-hidden px-4 h-12  " placeholder="Leave a comment"/>
                    <button onClick={() => setDropdownOpen(!dropdownOpen)}
                        className=" absolute top-3 right-3 text-gray-400">
                        <CameraIcon className="w-5 h-auto" />
                    </button>

                 </div>
             </div>
         </div>

        </>
    )
}