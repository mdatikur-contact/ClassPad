import { IoNotifications } from "react-icons/io5";
import SideBar from "../leftSideBar/SideBar";
import { IoMdSearch } from "react-icons/io";

const Root = () => {
    return (
        <div data-theme="cmyk" className="lg:flex gap-5 font-roboto" >
            {/* left side manu bar*/}
            <div className="lg:w-1/5 h-screen bg-indigo-100 p-5">

                {/* logo and nav bar part */}
                <div>
                    <SideBar></SideBar>
                </div>

            </div>

            {/* right side */}

            <div className="  lg:w-4/5 h-screen">

                {/* header part */}
                <div className=" h-1/6 mt-5 flex justify-between">
                    <h1 className="text-4xl font-bold	" >Dashboard</h1>


                    {/* right side search and notification button  */}
                    <div className="flex mr-10 gap-5">


                        {/* search button */}
                        <div className="flex justify-center items-center gap-5 h-10 bg-indigo-100 rounded-lg px-2">
                            <span className="text-violet-700 text-2xl"><IoMdSearch /></span>
                            <input
                                type="search"
                                className="outline-none flex-grow bg-indigo-100"
                                placeholder="search here"
                            />
                        </div>





                        {/* notification button */}
                        <div className="relative inline-block ">
                            <button className="rounded-lg bg-indigo-100 p-2 h-10">
                                <IoNotifications className="text-violet-700 text-2xl" />
                            </button>
                            {/* uses for notification red dot */}
                            <span className="absolute left-7  rounded-full bg-red-500 w-2 h-2 "></span>
                        </div>


                    </div>

                </div>

                {/* right side body part */}
                <div className="flex gap-5 h-5/6">

                    <div className="w-2/3">
                        incoming class
                    </div>
                    <div className="w-1/3 bg-indigo-100 rounded-lg	p-5">Groups

                    </div>
                    <div className="w-1/3 bg-indigo-100 rounded-lg p-5 ">
                        Semester progress

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Root;