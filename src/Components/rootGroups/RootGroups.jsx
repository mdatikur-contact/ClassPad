import { BsThreeDotsVertical } from "react-icons/bs";
import groupIcon from '../images/group-icon.png'
import { IoIosArrowUp } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

const RootGroups = () => {
    return (
        <div>
            {/* groups title */}
            <div className="flex justify-between mb-10">
                <h3 className="text-xl">Groups</h3>
                <span><BsThreeDotsVertical />
                </span>
            </div>
            {/* group body containers */}
            <div className="px-2 ">
                <ul>

                    <li className="my-2 hover:bg-white 
                        transition-all duration-1000
                        rounded-lg
                        py-2 px-1 group">
                        <a href="#" className="flex items-center text-sm leading-3 gap-5 group">
                            <img src={groupIcon} alt="" className="w-10" />
                            <div>
                                <h4 className="text-xl">22nd Batch</h4>
                                <p className="text-gray-400">No Of students 20</p>
                            </div>
                            <span className="text-xl hidden group-hover:block"><IoIosArrowUp /></span>
                        </a>

                        {/* group details view */}
                        <div className="pt-5 pl-2 text-gray-500 opacity-0 max-h-0 overflow-hidden 
                                group-hover:opacity-100 group-hover:max-h-80
                                transition-all duration-1000 ease-in-out">
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><RiSendPlaneFill /></span>
                                <h4>Send Message</h4>
                            </div>
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><BiSolidEdit /></span>
                                <h4>Reschedule Lesson</h4>
                            </div>
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><FaShareAlt /></span>
                                <h4>Share materials</h4>
                            </div>
                        </div>
                    </li>
                    <li className="my-2 hover:bg-white 
                        transition-all duration-1000
                        rounded-lg
                        py-2 px-1 group">
                        <a href="#" className="flex items-center text-sm leading-3 gap-5 group">
                            <img src={groupIcon} alt="" className="w-10" />
                            <div>
                                <h4 className="text-xl">23rd Batch</h4>
                                <p className="text-gray-400">No Of students 30</p>
                            </div>
                            <span className="text-xl hidden group-hover:block"><IoIosArrowUp /></span>
                        </a>

                        {/* group details view */}
                        <div className="pt-5 pl-2 text-gray-500 opacity-0 max-h-0 overflow-hidden 
                                group-hover:opacity-100 group-hover:max-h-80
                                transition-all duration-1000 ease-in-out">
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><RiSendPlaneFill /></span>
                                <h4>Send Message</h4>
                            </div>
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><BiSolidEdit /></span>
                                <h4>Reschedule Lesson</h4>
                            </div>
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><FaShareAlt /></span>
                                <h4>Share materials</h4>
                            </div>
                        </div>
                    </li>
                    <li className="my-2 hover:bg-white 
                        transition-all duration-1000
                        rounded-lg
                        py-2 px-1 group">
                        <a href="#" className="flex items-center text-sm leading-3 gap-5 group">
                            <img src={groupIcon} alt="" className="w-10" />
                            <div>
                                <h4 className="text-xl">24th Batch</h4>
                                <p className="text-gray-400">No Of students 35</p>
                            </div>
                            <span className="text-xl hidden group-hover:block"><IoIosArrowUp /></span>
                        </a>

                        {/* group details view */}
                        <div className="pt-5 pl-2 text-gray-500 opacity-0 max-h-0 overflow-hidden 
                                group-hover:opacity-100 group-hover:max-h-80
                                transition-all duration-1000 ease-in-out">
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><RiSendPlaneFill /></span>
                                <h4>Send Message</h4>
                            </div>
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><BiSolidEdit /></span>
                                <h4>Reschedule Lesson</h4>
                            </div>
                            <div className="flex items-center gap-2 py-3 px-3 font-bold  
                                transition-all duration-700
                                hover:text-indigo-500 
                                hover:bg-indigo-200 
                                hover:rounded-lg">
                                <span className="text-xl"><FaShareAlt /></span>
                                <h4>Share materials</h4>
                            </div>
                        </div>
                    </li>
                    

                </ul>

            </div>
            <div className="relative  ">
                {/* Button positioned half inside, half outside */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-12">
                    <button className="bg-indigo-200 rounded-lg px-2 py-2  w-56">+ Create New Group</button>
                </div>
            </div>



        </div>
    );
};

export default RootGroups;