export default function Avatar({size}) {

    {/* aşağıdaki if koşulu profil page sayfasında avatarın daha büyük
     ana sayfada daha küçük görünmesini sağlamak için */}
    let width = 'w-12 h-12';
    if (size === 'big') {
        width = 'w-36 h-36';

    }

    return(
        <>
            <div className=" rounded-full overflow-hidden">
              <div className="  flex justify-items-center ">
                <img alt="avatar/pic" className={`${width}  flex items-center rounded-full  object-cover`}
                     src="https://images.unsplash.com/photo-1509768368676-f3c3b060679d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
              </div>
            </div>
        </>

    )
}