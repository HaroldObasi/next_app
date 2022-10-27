const Profile = () => {
    return (
        <div className="flex flex-col items-center my-10">
            <div className="flex justify-center items-center relative">
                <img
                    src="/chad.jpg"
                    id="profile__img"
                    alt=""
                    className="rounded-full w-[88px] h-[88px]"
                />
                <div className="group rounded-full absolute hover:bg-pro_black w-[88px] h-[88px]">
                    <img
                        src="/camera.svg"
                        className="mt-14 ml-8 z-10 hidden group-hover:inline"
                        alt=""
                    />
                </div>
            </div>

            <div className="group peer hidden rounded-full sm:flex mr-[100px] absolute right-0 top-5 lg:mr-[300px] justify-center items-center hover:bg-gray-50 cursor-pointer w-[40px] h-[40px] border-dashed border">
                <img src="/icon.svg" alt="" />
                <div className="hidden absolute h-0 right-[-10px] bottom-5 group-hover:inline">
                    <img src="/cursor.svg" alt="" />
                </div>
            </div>
            <div className="hidden peer-hover:inline  absolute right-0 top-6 mr-[135px] lg:mr-[335px]">
                <img src="/bubble.svg" alt="" />
            </div>
            <div className="sm:hidden rounded-full flex mr-[20px] absolute right-0 top-5 justify-center items-center hover:bg-gray-50 cursor-pointer w-[40px] h-[40px] border-dashed border">
                <img src="/dots.svg" alt="" />
            </div>
            <p className="font-inter font-bold mt-3 text-[20px]" id="twitter">
                @obasiharold
            </p>
            <p className="font-inter font-bold mt-3 hidden" id="slack">
                haroldobasi
            </p>
        </div>
    );
};

export default Profile;
