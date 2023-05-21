import NavBar from "@/pages/companents/Navbar/NavBar";
import PostFormCard from "@/pages/companents/CreatePost/PostFormCard";
import Post from "@/pages/companents/Timeline/Post";
import Layout from "@/pages/companents/Layout";


export default function Home() {
  return (
    <>
        <Layout>
            <PostFormCard/>
            <Post/>
        </Layout>


    </>
  )
}
