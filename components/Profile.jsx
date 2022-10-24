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
            <p className="font-inter font-bold mt-3 text-[20px]" id="twitter">
                @obasiharold
            </p>
            <p className="font-inter font-bold mt-3 hidden" id="slack">
                @obasiharold
            </p>
        </div>
    );
};

export default Profile;
