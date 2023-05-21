import Layout from "@/pages/companents/Layout";
import Avatar from "@/pages/companents/Navbar/Avatar";
import Link from "next/link";
import {HiOutlineDocumentDownload, HiOutlineInformationCircle, HiOutlineUsers, HiOutlinePhotograph} from "react-icons/hi";
import Post from "@/pages/companents/Timeline/Post";
import {useRouter} from "next/router";
import Friends from "@/pages/companents/Friends";
import Photos from "@/pages/companents/Photos";

export default function ProfilePage(){
     const router = useRouter();
     const {asPath:pathname} = router;
     const isPosts = pathname.includes("posts");
     const  isAbout = pathname.includes("about");
      const  isFriends = pathname.includes("friends");
      const  isPhotos = pathname.includes("photos");
      const  tabClasses = "profile-links";

    const activeTabClasses = "profile-links border-blue-500 border-b-4  text-blue-500";


    return(
        <>
            <Layout>

                <div className="postcart-style">
                    <div className="relative overflow-hidden rounded-md">
                    <div className="h-36 overflow-hidden  flex justify-center items-center ">
                         <img className="" src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZWNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="img/share"/>
                    </div>
                    <div className="absolute top-24 left-4 ">
                        <Avatar size={'big'} />
                    </div>

                        {/*  Name and location start  */}
                    <div className="p-4 pb-2 ">
                        <div className="ml-40">
                            <h1 className=" text-2xl font-bold">John Doe</h1>
                            <p className="text-sm text-slate-400 leading-4"> Vordingborg, Denmark</p>
                        </div>
                        <div className="mt-10 flex gap-5 ">
                            <Link href={'/profile/posts'} className={isPosts ? activeTabClasses : tabClasses }>
                                <HiOutlineDocumentDownload/> Post
                            </Link>
                            <Link href={'/profile/about' } className={isAbout ? activeTabClasses : tabClasses }>
                               <HiOutlineInformationCircle/> About
                            </Link>
                            <Link href={'/profile/friends'} className={isFriends ? activeTabClasses : tabClasses }>
                               <HiOutlineUsers /> Friends
                            </Link>
                            <Link href={'/profile/photos'} className={isPhotos ? activeTabClasses : tabClasses }>
                               <HiOutlinePhotograph /> Photos
                            </Link>
                        </div>

                    </div>
                        {/* Name and location end */}
                </div>

                </div>
                 {
                     isPosts && (
                         <div>
                             <Post />
                         </div>
                     )
                 }
                {
                    isAbout && (
                        <div className="cart-style">
                            <h2 className="text-2xl my-2"> About Me</h2>
                            <p className="text-slate-900 mb-2 filter font-normal text-sm space-y-3">Lorem Ipsum is simply dummy text of the s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release </p>
                            <p className="text-slate-900 mb-2 filter font-normal text-sm space-y-3">containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    )
                }
                {
                    isFriends && (
                        <div className="cart-style">
                            <div className="grid gap-6 grid-cols-2">
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                                <Friends />
                            </div>

                        </div>
                    )
                }

                {
                    isPhotos && (
                        <div>
                            <Photos />
                        </div>
                    )
                }
            </Layout>

        </>
    )
}