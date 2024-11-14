import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";

const ClassAndMaterials = () => {
    return (
        <div>

            {/* incoming class */}
            <div>
                {/* incoming class header */}
                <div className="flex justify-between mb-8">
                    <h3 className="text-xl"> Incoming Lesson</h3>
                    <div className="flex items-center gap-1 ">
                        <button className=" bg-indigo-50 text-violet-600 px-3 py-1 rounded-lg"> Show all</button>
                        <span className=" bg-indigo-50 text-violet-600 px-2 py-2 rounded-lg"> <BsThreeDotsVertical />
                        </span>
                    </div>


                </div>
                {/* incoming class body */}

                <div>
                    <p>Monday</p>
                    <div className=" " >
                        <ul className="my-3">
                            <li className=  "border rounded-lg p-3 hover:shadow-indigo-50 hover:shadow-lg ">
                                <a href="" className="flex items-center gap-5 
                                justify-between w-full
                                ">
                                    <button className="bg-indigo-100 p-3 rounded-lg">
                                        <span className="text-xl  text-indigo-500"> <RiCalendarScheduleFill />
                                        </span>
                                    </button>
                                    <div className="flex flex-col leading-4 text-sm">
                                        <span>2:00 PM - 3:30PM </span>
                                        <span className="text-gray-400">React - 6th Batch</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-indigo-500 w-2 h-2"></span>
                                        <p>Lesson 30</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <p className="text-gray-400">Online Classes</p>
                                        <span>
                                            <a href="" className="text-indigo-500"> Zoom</a>
                                        </span>
                                    </div>
                                    <div>
                                        <MdKeyboardArrowRight className="text-3xl" />

                                    </div>
                                </a>
                            </li>
                            <li className=  "border rounded-lg p-3 hover:shadow-indigo-50 hover:shadow-lg my-5">
                                <a href="" className="flex items-center gap-5 
                                justify-between w-full
                                ">
                                    <button className="bg-indigo-100 p-3 rounded-lg">
                                        <span className="text-xl  text-indigo-500"> <RiCalendarScheduleFill />
                                        </span>
                                    </button>
                                    <div className="flex flex-col leading-4 text-sm">
                                        <span>2:00 PM - 3:30PM </span>
                                        <span className="text-gray-400">React - 6th Batch</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-indigo-100 w-2 h-2"></span>
                                        <p>Lesson 30</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <p className="text-gray-400">Online Classes</p>
                                        <span>
                                            <a href="" className="text-indigo-500"> Zoom</a>
                                        </span>
                                    </div>
                                    <div>
                                        <MdKeyboardArrowRight className="text-3xl" />

                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Tuesday</p>
                    <div className=" " >
                        <ul className="my-3">
                            
                            <li className=  "border rounded-lg p-3 hover:shadow-indigo-50 hover:shadow-lg my-5">
                                <a href="" className="flex items-center gap-5 
                                justify-between w-full
                                ">
                                    <button className="bg-indigo-100 p-3 rounded-lg">
                                        <span className="text-xl  text-indigo-500"> <RiCalendarScheduleFill />
                                        </span>
                                    </button>
                                    <div className="flex flex-col leading-4 text-sm">
                                        <span>2:00 PM - 3:30PM </span>
                                        <span className="text-gray-400">React - 6th Batch</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-indigo-100 w-2 h-2"></span>
                                        <p>Lesson 30</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <p className="text-gray-400">Online Classes</p>
                                        <span>
                                            <a href="" className="text-indigo-500"> Zoom</a>
                                        </span>
                                    </div>
                                    <div>
                                        <MdKeyboardArrowRight className="text-3xl" />

                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>






            {/* Materials */}
            <div>

            </div>
        </div>
    );
};

export default ClassAndMaterials;