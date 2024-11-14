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
                    <li className="my-5">
                        <a href="" className="flex items-center  text-sm leading-3 gap-5">
                            <img src={groupIcon} alt="" className="w-10" />
                            <div>
                                <h4 className="text-xl">22nd Batch</h4>
                                <p className="text-gray-400">No Of students 20</p>
                            </div>
                        </a>

                    </li>
                    <li className="my-5 hover:bg-white rounded-lg py-2 px-1">
                        <a href="" className="flex items-center  text-sm leading-3 gap-5">
                            <img src={groupIcon} alt="" className="w-10" />
                            <div>
                                <h4 className="text-xl">23rd Batch</h4>
                                <p className="text-gray-400">No Of students 20</p>
                            </div>
                            <span className="text-xl "><IoIosArrowUp />
                            </span>

                        </a>
                        {/* group details view */}
                        <div className="pt-10 pl-2 text-gray-500  ">
                            <div className="flex items-center gap-5 py-4  px-3 font-bold  
                            transition-all duration-700
                            hover:text-indigo-500 
                            hover:bg-indigo-200 
                            hover:rounded-lg">
                                <span className="text-xl"><RiSendPlaneFill />
                                </span>
                                <h4>Send Message</h4>
                            </div>
                            <div className="flex items-center gap-5 py-4  px-3 font-bold  
                            transition-all duration-700
                            hover:text-indigo-500 
                            hover:bg-indigo-200 
                            hover:rounded-lg">
                                <span className="text-xl"><BiSolidEdit />
                                </span>
                                <h4>Reschedule Lesson</h4>
                            </div>
                            <div className="flex items-center gap-5 py-4  px-3 font-bold  
                            transition-all duration-700
                            hover:text-indigo-500 
                            hover:bg-indigo-200 
                            hover:rounded-lg">
                                <span className="text-xl"><FaShareAlt />
                                </span>
                                <h4>Share materials</h4>
                            </div>

                        </div>

                    </li>
                    <li className="my-5">
                        <a href="" className="flex items-center  text-sm leading-3 gap-5">
                            <img src={groupIcon} alt="" className="w-10" />
                            <div>
                                <h4 className="text-xl">24th Batch</h4>
                                <p className="text-gray-400">No Of students 20</p>
                            </div>
                        </a>

                    </li>
                </ul>

            </div>
            <div className="mt-auto flex justify-center">
                <button className="bg-indigo-200 rounded-lg px-5 py-2">+ Create New Group</button>
            </div>


        </div>
    );
};

export default RootGroups;