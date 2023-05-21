import {FaFacebook, FaGoogle, FaTwitter} from "react-icons/fa";

export default function LoginPage(){
    return(
        <>
            <div className=" h-screen flex items-center justify-center">
                <div className="max-w-md mx-auto grow mt-4">
                    <h1 className="text-center text-4xl text-slate-300">Login</h1>

                    <div className="cart-style grid items-center justify-center gap-4 ">
                        <div>
                            <a className="login-button" href="">
                                <FaGoogle />
                                Login with Google </a>
                        </div>
                        <a className=" login-button " href="">
                            <FaTwitter />
                            Login with Twitter </a>
                        <a className="login-button " href="">
                            <FaFacebook />
                            Login with Facebook </a>
                    </div>


                </div>
            </div>



        </>
    )
}