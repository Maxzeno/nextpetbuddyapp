import { Link } from 'react-router-dom';
import logo from '../../assets/logo-removebg-crop.png'
import Button from '../button/button';
import { Search, GridFill, CaretDownFill } from "react-bootstrap-icons";
import { useState } from 'react';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return <nav className='border-b-2'>
        <div className='w-[70vw] mx-auto my-5'>
            <div className="flex justify-between items-center mb-7">
                <div className="pt-2">
                    <img src={logo} alt="" width={150} />
                </div>
                <div className='relative'>
                    <input type="text" className='border w-[25vw] rounded-lg h-[40px] px-4 focus:outline-none focus:border-2' />
                    <Search className='relative right-8 top-[-3px] inline text-gray-500' />

                </div>
                <div>
                    <Button text="login" color="text-black" bgColor="bg-gray-200" extraClass="mr-3" />
                    <Button text="signup" color="text-white" bgColor="bg-red-500" />
                </div>
            </div>
            <div className='flex items-center mb-5'>
                <div className='mr-5 flex items-center  cursor-pointer' onClick={() => toggleDropdown("pets")}>
                    <div className='bg-red-500 px-5 py-3 text-white rounded'>
                        <GridFill className='inline mr-2' />
                        <span>Pets</span>
                    </div>
                    {openDropdown === "pets" && <div className='absolute z-10 bg-white text-black p-2 w-[200px] rounded top-[165px]' style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)" }}>
                        <Link to="#" className='hover:bg-gray-200 rounded p-2 block my-2'>one</Link>
                        <Link to="#" className='hover:bg-gray-200 rounded p-2 block my-2'>one</Link>
                    </div>}
                </div>
                <Link to="#" className='mr-5 hover:text-red-500'>home</Link>
                <Link to="#" className='mr-5 hover:text-red-500'>About</Link>
                <div className='mr-5flex items-center cursor-pointer' onClick={() => toggleDropdown("drop")}>
                    <div className='hover:text-red-500 '>
                        <span className='mr-2'>drop</span>
                        <CaretDownFill className='inline' />
                    </div>
                    {openDropdown === "drop" && <div className='absolute z-10 bg-white p-2 w-[200px] rounded top-[165px]' style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)" }}>
                        <Link to="#" className='hover:bg-gray-200 rounded p-2 block my-2'>one</Link>
                        <Link to="#" className='hover:bg-gray-200 rounded p-2 block my-2'>one</Link>
                    </div>}
                </div>
            </div>

        </div>
    </nav>
}

export default Navbar;
