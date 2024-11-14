import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendarCheck } from "react-icons/fa6";
import profilePhoto from '../images/profile.jpg';

const RootSemesterInbox = () => {
    return (
        <div>
            {/* Semester progress */}
            <div className="bg-indigo-50 rounded-lg py-5 px-5">
                {/* Semester progress title */}
                <div className="flex justify-between mb-5 text-xl">
                    <h3 className="">Semester progress</h3>
                    <span><BsThreeDotsVertical />
                    </span>
                </div>
                <div className="bg-indigo-500 rounded-lg p-3 flex gap-5">
                    <div
                        className="radial-progress text-white"
                        style={{
                            "--value": 90,
                            "--size": "0px", // Set size explicitly
                        }}
                    >
                    </div>
                    <div className="text-gray-300 leading-3">
                        <p>Lesson Progress</p>
                        <p className="text-2xl"><span className="text-white">29</span> / 30</p>
                    </div>

                </div>
                <div className="bg-white rounded-xl mt-10 p-2  flex gap-5">
                    <div className="text-3xl text-indigo-500">
                        <FaCalendarCheck />

                    </div>
                    <div className="text-gray-300 leading-3">
                        <p>Lesson Progress</p>
                        <p className="text-2xl">7 days</p>
                    </div>

                </div>


            </div>
            <div className="bg-indigo-50 rounded-lg py-5 px-5 mt-5">
                {/* Semester progress title */}
                <div className="flex justify-between mb-5 text-xl">
                    <h3 className="">Inbox</h3>
                    <span><BsThreeDotsVertical />
                    </span>
                </div>
                <div >
                    {/* personal inbox */}
                    <div className=" bg-white rounded-lg p-2 mb-2">
                        <div className="flex gap-5">
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src={profilePhoto} />
                                </div>

                            </div>
                            <div className="  ">
                                <h3>Atikur Rahman</h3>
                                <p className="text-gray-400">Online</p>
                            </div>

                        </div>
                        <p className="pt-3 pl-2 text-sm">Hi, This is ripon video from PUB</p>

                    </div>
                    {/* personal inbox */}
                    <div className=" bg-white rounded-lg p-2 ">
                        <div className="flex gap-5">
                            <div className="avatar offline">
                                <div className="w-14 rounded-full">
                                    <img src={profilePhoto} />
                                </div>

                            </div>
                            <div className="  ">
                                <h3>Atikur Rahman</h3>
                                <p className="text-gray-400">Offline</p>
                            </div>

                        </div>
                        <p className="pt-3 pl-2 text-sm">Hi, This is ripon video from PUB</p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default RootSemesterInbox;