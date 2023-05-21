import {FaGithubAlt, FaLocationArrow, FaUser} from "react-icons/fa";
import Avatar from "@/pages/companents/Navbar/Avatar";

export default function PostFormCard() {
    return (
        <>
            <div className=" gap-2  cart-style ">
                <div className="flex items-center">
                    <Avatar/>
                    <textarea placeholder={'Whats on your mind ?'} className="grow p-3 h-12  "/>
                </div>

            {/* Buttons Start */}
            <div className="flex mt-5 gap-5 items-center ">
                <div className="">
                    <button className="flex items-center gap-1">
                        <FaUser />
                        People</button>
                </div>
                <div className="">
                    <button className="flex items-center gap-1  ">
                        <FaLocationArrow />
                        Check in</button>
                </div>
                <div>
                    <button className="flex items-center gap-1">
                    < FaGithubAlt/>
                        Mood</button>
                </div>

                <div className="grow text-right">
                    <button className="bg-blue-500 text-white px-6 py-1 rounded-md ">
                    Share </button></div>

                {/* Buttons End */}

             </div>
            </div>
        </>
    )
}