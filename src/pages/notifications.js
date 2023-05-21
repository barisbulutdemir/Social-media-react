import Layout from "@/pages/companents/Layout";
import Avatar from "@/pages/companents/Navbar/Avatar";

export default function NotificationsPage(){
    return  (
        <>
            <div className="relative" >
                <div>
                    <Layout/>
                </div>
                <div className="absolute top-1  left-[30%] lg:left-[40%] sm:left-[30%] min-w-[55%]">
                 <h1 className="text-6xl text-slate-300">Notifications </h1>
                    <div className="cart-style grid items-center gap-6 grow">
                        <div className="flex items-center gap-3">
                            <Avatar />
                         <div><span className="hover:underline cursor-pointer font-bold ">John Doe </span>  liked <span className="text-blue-500 cursor-pointer hover:underline">your photo</span> </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Avatar />
                            <div><span className="hover:underline cursor-pointer font-bold ">John Doe </span> liked  <span className="text-blue-500 cursor-pointer hover:underline">your photo</span> </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Avatar />
                            <div><span className="hover:underline cursor-pointer font-bold ">John Doe </span> liked <span className="text-blue-500 cursor-pointer hover:underline">your photo</span> </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Avatar />
                            <div><span className="hover:underline cursor-pointer font-bold ">John Doe </span>  liked <span className="text-blue-500 cursor-pointer hover:underline">your photo</span> </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Avatar />
                            <div><span className="hover:underline cursor-pointer font-bold ">John Doe </span>  liked <span className="text-blue-500 cursor-pointer hover:underline">your photo</span> </div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
