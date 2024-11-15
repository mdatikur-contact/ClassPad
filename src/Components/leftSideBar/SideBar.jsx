import { MdOutlineCastForEducation, MdOutlineMarkEmailUnread, } from 'react-icons/md';
// import logo
import logo from '../images/classPad.png'
// import profile photo
import profilePhoto from '../images/profile.jpg'
import { BiSolidDashboard } from "react-icons/bi";
import { FaBookOpen, FaUserGroup } from 'react-icons/fa6';
import { LuLogOut } from 'react-icons/lu';
import { PiVideoFill } from 'react-icons/pi';

const SideBar = () => {
    return (
        <div className=''>
            {/* logo section */}
            <div className='flex flex-col items-center my-4'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='w-20' />
                    <h2 className='text-4xl font-bold  text-violet-600'>ClassPad</h2>
                </div>
                <div>
                    <button className=" bg-violet-500 text-white px-5 py-1 rounded-md font-bold">+ Add New</button>

                </div>

            </div>

            {/* side nav bar  */}
            <div className='my-14 '>
                <ul className='my-10 transition-all duration-500'>
                    {/* Dashboard */}
                    <li >
                        <a href=""
                            className=' flex 
                        items-center 
                        gap-5 text-xl 
                        font-bold 
                        text-gray-400 
                        hover:text-violet-500
                        active:text-violet-700'>
                            <BiSolidDashboard />
                            <h3>Dashboard</h3>  </a>
                    </li>

                    {/* Incoming Lesson */}
                    <li >
                        <a href=""
                            className=' flex 
                        items-center 
                        gap-5 text-xl 
                        font-bold 
                        text-gray-400 
                        hover:text-violet-500
                        active:text-violet-700
                        my-3'>
                            <PiVideoFill />
                            <h3>Incoming Lesson</h3>  </a>
                    </li>
                    {/* Groups */}
                    <li >
                        <a href=""
                            className=' flex 
                        items-center 
                        gap-5 text-xl 
                        font-bold 
                        text-gray-400 
                        hover:text-violet-500
                        active:text-violet-700
                        my-3'>
                            <FaUserGroup />
                            <h3>Groups</h3>  </a>
                    </li>
                    {/* Materials */}
                    <li >
                        <a href=""
                            className=' flex 
                        items-center 
                        gap-5 text-xl 
                        font-bold 
                        text-gray-400 
                        hover:text-violet-500
                        active:text-violet-700
                        my-3'>
                            <FaBookOpen />
                            <h3>Materials</h3>  </a>
                    </li>

                    {/* Semester */}
                    <li >
                        <a href=""
                            className=' flex 
                        items-center 
                        gap-5 text-xl 
                        font-bold 
                        text-gray-400 
                        hover:text-violet-500
                        active:text-violet-700
                        my-3'>
                            <MdOutlineCastForEducation />
                            <h3>Semester</h3>  </a>
                    </li>
                    {/* Inbox */}
                    <li className='flex items-center gap-5' >
                        <a href=""
                            className=' flex 
                        items-center 
                        gap-5 text-xl 
                        font-bold 
                        text-gray-400 
                        hover:text-violet-500
                        active:text-violet-700
                        '>
                            <MdOutlineMarkEmailUnread />
                            <h3>Inbox</h3>  </a>
                        <button className="flex items-center 
                        justify-center 
                        w-7 h-7 
                        bg-pink-500 
                        text-white px-6 rounded-xl font-bold">
                            5
                        </button>                            </li>

                </ul>

            </div>


            {/* side bar profile section */}
            <div className='mt-28 ml-10'>
                <div className=' flex gap-3 items-center'>
                    {/* profile photo  */}
                    <div className="avatar">
                        <div className="bg-violet-500 ring-offset-violet-500 w-12 rounded-full ring ring-offset-2">
                            <img src={profilePhoto} />
                        </div>

                    </div>
                    <div className='leading-3'>
                        <h4 className='text-xl font-bold'>Atikur Rahman</h4>
                        <p className=' text-gray-400'>Teacher</p>
                    </div>

                </div>
                <div className='mt-6 pl-3'>
                    <button className='flex items-center gap-5 font-bold text-gray-400 bg-white px-5 py-1.5 rounded-lg '>
                        <span> <LuLogOut></LuLogOut> </span>
                        <span>Logout</span>
                    </button>

                </div>


            </div>


        </div>
    );
};

export default SideBar;