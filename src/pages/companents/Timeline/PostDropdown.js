import {MdAddAlert, MdOutlineBookmarks} from "react-icons/md";
import {HiOutlineExclamation, HiOutlineTrash, HiTrash} from "react-icons/hi";


export default function PostDropdown() {

    return (
        <>
            <div className="absolute  top-5 right-1  rounded-md
            bg-slate-50 border  py-6 px-5  transition-opacity duration-1000
            shadow-md shadow-gray-300">
                <div className="flex flex-col gap-3 ">
                    <div className="postDropdownItem" >
                        <MdOutlineBookmarks className="postDropdownItemIcons"/>
                        Kaydet</div>
                    <div className="postDropdownItem">
                        <MdAddAlert className="postDropdownItemIcons" />
                        Bildirimleri aç</div>
                    <div className="postDropdownItem">
                        <HiTrash className="postDropdownItemIcons"/>
                        Postu gizle</div>
                    <div className="postDropdownItem">
                        <HiOutlineTrash className="postDropdownItemIcons"/>
                        Sil</div>
                    <div className="postDropdownItem">
                        <HiOutlineExclamation className="postDropdownItemIcons"/>
                        Raport</div>
                </div>
            </div>
        </>
    )
}