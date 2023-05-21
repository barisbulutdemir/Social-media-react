import Avatar from "@/pages/companents/Navbar/Avatar";

export default function Friends(){

    return (
        <>
            <div className="flex gap-2 border-b p-2 ">
             <Avatar />
                <div className="grid ">
                    <h3 className="font-bold "> Esmeralda Fomsuki </h3>
                    <p className="text-sm leading-3"> 5 mutual friends</p>
                </div>
            </div>


        </>
    )
}