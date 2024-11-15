import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendarCheck, FaReply, FaTrashAlt } from "react-icons/fa6";
import profilePhoto from '../images/profile.jpg';

const RootSemesterInbox = () => {
    return (
        <div>
            {/* Semester progress */}
            <div className="bg-indigo-50 rounded-lg py-5 px-5">
                {/* Semester progress title */}
                <div className="flex justify-between mb-5 text-xl">
                    <h3>Semester progress</h3>
                    <span><BsThreeDotsVertical /></span>
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
                <div className="bg-white rounded-xl mt-10 p-2 flex gap-5">
                    <div className="text-3xl text-indigo-500">
                        <FaCalendarCheck />
                    </div>
                    <div className="text-gray-300 leading-3">
                        <p>Lesson Progress</p>
                        <p className="text-2xl">7 days</p>
                    </div>
                </div>
            </div>

            {/* Inbox section */}
            <div className="bg-indigo-50 rounded-lg py-5 px-5 mt-5">
                {/* Inbox title */}
                <div className="flex justify-between mb-5 text-xl">
                    <h3>Inbox</h3>
                    <span><BsThreeDotsVertical /></span>
                </div>
                <div>
                    {/* Personal inbox */}
                    <div className="relative group mb-2 transition-all duration-300">
                        <div className="flex items-center">
                            {/* Message container */}
                            <div className="bg-white rounded-lg p-2 flex-grow 
            transform group-hover:-translate-x-10 group-hover:shadow-lg 
            transition-all duration-300">

                                {/* Left side: Profile and message */}
                                <div className="flex gap-5">
                                    <div className="avatar online">
                                        <div className="w-14 rounded-full">
                                            <img src={profilePhoto} alt="Profile" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Atikur Rahman</h3>
                                        <p className="text-gray-400">Online</p>
                                        <p className="pt-3 text-sm">Hi, This is Ripon from PUB</p>
                                    </div>
                                    {/* Right side: Buttons shown on hover */}
                                    <div className="opacity-0 hover:opacity-100 
            transition-opacity duration-300 flex gap-3 ml-3">
                                        <button className="text-gray-500 hover:text-indigo-500 flex items-center gap-1">
                                            <FaReply /> Reply
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500 flex items-center gap-1">
                                            <FaTrashAlt /> Delete
                                        </button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>



                    {/* Another personal inbox */}
                    <div className="relative group mb-2 transition-all duration-300">
                        <div className="bg-white rounded-lg p-2 flex justify-between items-center group-hover:translate-x-2 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                            <div className="flex gap-5">
                                <div className="avatar offline">
                                    <div className="w-14 rounded-full">
                                        <img src={profilePhoto} alt="Profile" />
                                    </div>
                                </div>
                                <div className="">
                                    <h3>Atikur Rahman</h3>
                                    <p className="text-gray-400">Offline</p>
                                    <p className="pt-3 pl-2 text-sm">Hi, This is ripon video from PUB</p>
                                </div>
                            </div>

                            {/* Buttons shown on hover */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                                <button className="text-gray-500 hover:text-indigo-500 flex items-center gap-1">
                                    <FaReply /> Reply
                                </button>
                                <button className="text-gray-500 hover:text-red-500 flex items-center gap-1">
                                    <FaTrashAlt /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RootSemesterInbox;
