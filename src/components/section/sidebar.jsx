import { Cart, List, XLg } from "react-bootstrap-icons";
import Navbar from '../../components/nav/navbar'
import { useState } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

export default function Sidebar({ head, body }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const screenWidth = useScreenWidth();

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return <>
        <div className={`${openDropdown === 'mobile' && 'absolute w-screen h-screen top-0 left-0 z-50 bg-white'}`}>
            {
                openDropdown === 'mobile' && screenWidth < 1024 ? <div className="flex justify-between  w-[80vw] mx-auto pt-5">
                    <div>Menu</div>
                    <div><XLg className='text-[1.1em] leading-[0]' /></div>
                </div> : <Navbar />
            }

            <div className='mx-auto pt-5 w-[80vw] mb-5' >
                <div className='lg:flex lg:shrink-0 lg:grow-0'>
                    <div className={`mt-5 lg:mt-10 w-full lg:w-[25vw] ${screenWidth < 1024 ? openDropdown !== 'mobile' && 'hidden' : "block"}`}>
                        <div className="pb-5 mb-5 border-b">
                            <div className="flex gap-3 items-center bg-purple-950 text-white rounded-md py-2 px-4">
                                <Cart className='text-[1.1em] leading-[0]' />
                                <span>Cart</span>
                            </div>
                            <div className="flex gap-3 items-center text-black rounded-m py-2 px-4">
                                <Cart className='text-[1.1em] leading-[0]' />
                                <span>Cart</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <div>{head}</div>
                            <List className='text-[1.7em] cursor-pointer leading-[0] inline text-black lg:hidden' onClick={() => toggleDropdown("mobile")} />
                        </div>
                        <div>{body}</div>
                    </div>
                </div>
            </div >
        </div>
    </>
}
