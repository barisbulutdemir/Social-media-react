import NavBar from "@/pages/companents/Navbar/NavBar";
import PostFormCard from "@/pages/companents/CreatePost/PostFormCard";
import Post from "@/pages/companents/Timeline/Post";

export default function Layout({children}){
    let rightColumnClasses = ""


    return(
        <div className="md:flex mt-4 max-w-4xl mx-auto  pl-2 gap-4 ">
            <div className=" lg:ml-10  ml-2 text-sm md:w-3/12 fixed md:static  w-full  bottom-0 md:block ">
                <NavBar />
            </div>
            <div className="grow md:w-9/12 ">
                {children}

            </div>
        </div>
    )
}