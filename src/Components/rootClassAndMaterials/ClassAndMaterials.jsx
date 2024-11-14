import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import syllabus from '../images/syllabus.png'
import routine from '../images/routine.png'
import shortNote from '../images/short-note.png'

const ClassAndMaterials = () => {
    return (
        <div>

            {/* incoming class */}
            <div>
                {/* incoming class header */}
                <div className="flex justify-between mb-2">
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
                        <ul className="my-1">
                            <li className="border rounded-lg p-1 hover:shadow-indigo-50 hover:shadow-lg 
                            transition-all 
                            duration-500  transform ">
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
                            <li className="border rounded-lg p-1 hover:shadow-indigo-50 hover:shadow-lg my-3
                            transition-all 
                            duration-500  transform ">
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
                        <ul className="my-1">

                            <li className="border rounded-lg p-1 hover:shadow-indigo-50 hover:shadow-lg mb-2
                            transition-all 
                            duration-500  transform ">
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
            <div >
                {/* Materials title */}
                <div>
                    <h3 className="text-xl">Materials</h3>
                </div>
                {/* Materials containers */}

                <div className="pt-4 flex gap-2">
                    {/* Materials container */}
                    <div className="card bg-indigo-100 w-48 shadow-xl  
                    hover:bg-indigo-500 transition-all 
                    duration-700 ease-in-out transform hover:scale-105">
                        <div className=" text-indigo-500 hover:text-white p-3 ">
                            <h2 className="card-title "> Routine</h2>
                            <p> This is our  Routine</p>

                            <figure>
                                <img
                                    className="w-36 hover:text-white p-3"
                                    src={routine}
                                    alt=" routine " />
                            </figure>
                        </div>
                    </div>
                    {/* Materials container */}
                    <div className="card bg-indigo-100 w-48 shadow-xl  
                    hover:bg-indigo-500 transition-all 
                    duration-700 ease-in-out transform hover:scale-105">
                        <div className=" text-indigo-500 hover:text-white p-3 ">
                            <h2 className="card-title ">Syllabus</h2>
                            <p> This is our Syllabus</p>

                            <figure>
                                <img
                                    className="w-36 hover:text-white p-3"
                                    src={syllabus}
                                    alt="syllabus " />
                            </figure>
                        </div>
                    </div>

                    {/* Materials container */}
                    <div className="card bg-indigo-100 w-48 shadow-xl  
                    hover:bg-indigo-500 transition-all 
                    duration-700 ease-in-out transform hover:scale-105">
                        <div className=" text-indigo-500 hover:text-white p-3 ">
                            <h2 className="card-title ">Short Note</h2>
                            <p> This is our short Note</p>

                            <figure>
                                <img
                                    className="w-36 hover:text-white p-3"
                                    src={shortNote}
                                    alt="syllabus " />
                            </figure>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ClassAndMaterials;