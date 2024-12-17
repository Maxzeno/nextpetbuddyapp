import logo from '../../assets/logo-removebg-crop.png'

const NavbarAuth = ({ child }) => {
    return <nav className='border-b-2'>
        <div className='w-[80vw] mx-auto my-5'>
            <div className="flex justify-center lg:justify-between items-center mb-7">
                <div className="pt-2">
                    <img src={logo} alt="" width={150} />
                </div>

                <div className='hidden lg:block'>
                    {child}

                </div>
            </div>
        </div>
    </nav>
}

export default NavbarAuth;
