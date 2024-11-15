import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendarCheck } from "react-icons/fa6";
import profilePhoto from '../images/profile.jpg';
import { FaTrashAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

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
                <div className="flex justify-between pb-5 text-xl">
                    <h3>Inbox</h3>
                    <span><BsThreeDotsVertical /></span>
                </div>
                <div>
                    {/* Personal inbox */}
                    <div className="relative group mb-2 transition-all duration-300">
                        {/* Message container */}
                        <div className="bg-white rounded-lg py-2 flex items-center 
                            transform group-hover:translate-x-[-120px] 
                            transition-transform duration-300">

                            {/* Left side: Profile and message */}
                            <div className="flex gap-5 items-center ">
                                <div className="avatar online">
                                    <div className="w-16 h-16 rounded-full">
                                        <img src={profilePhoto} alt="Profile" />
                                    </div>
                                </div>
                                <div className="leading-4 ">
                                    <h3>Atikur Rahman</h3>
                                    <p className="text-gray-400 ">online</p>
                                    <p className="pt-2 text-sm leading-4">Hi, This is Ripon from PUB</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side: Buttons shown on hover */}
                        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 
                            transition-opacity 
                            duration-300 flex  items-center   ">
                            <div className="flex justify-center items-center ">
                                <button className="text-gray-500 hover:text-indigo-500 flex items-center bg-white ">
                                    <div className="flex flex-col items-center text-indigo-600  py-6  px-3 border-l-2">
                                        <span><RiSendPlaneFill /></span>
                                        <span>Reply</span>

                                    </div>
                                    <div>

                                    </div>


                                </button>
                                <button className="text-white hover:bg-red-400 flex items-center ">

                                    <div className="flex flex-col items-center  py-6 px-3 ">
                                        <span><FaTrashAlt /></span>
                                        <span>Delete</span>

                                    </div>

                                </button>

                            </div>

                        </div>
                    </div>




                    {/* Another personal inbox */}
                    <div className="relative group mb-2 transition-all duration-300">
                        {/* Message container */}
                        <div className="bg-white rounded-lg py-2 flex items-center 
                            transform group-hover:translate-x-[-120px] 
                            transition-transform duration-300">

                            {/* Left side: Profile and message */}
                            <div className="flex gap-5 items-center">
                                <div className="avatar offline">
                                    <div className="w-16 h-16 rounded-full">
                                        <img src={profilePhoto} alt="Profile" />
                                    </div>
                                </div>
                                <div className="leading-4">
                                    <h3>Atikur Rahman</h3>
                                    <p className="text-gray-400 ">offline</p>
                                    <p className="pt-2 text-sm leading-4">Hi, This is Ripon from PUB</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side: Buttons shown on hover */}
                        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 
                            transition-opacity 
                            duration-300 flex  items-center   ">
                            <div className="flex justify-center items-center ">
                                <button className="text-gray-500 hover:text-indigo-500 flex items-center bg-white ">
                                    <div className="flex flex-col items-center text-indigo-600  py-6  px-3 border-l-2">
                                        <span><RiSendPlaneFill /></span>
                                        <span>Reply</span>

                                    </div>
                                    <div>

                                    </div>


                                </button>
                                <button className="text-white hover:bg-red-400 flex items-center ">

                                    <div className="flex flex-col items-center  py-6 px-3 ">
                                        <span><FaTrashAlt /></span>
                                        <span>Delete</span>

                                    </div>

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
