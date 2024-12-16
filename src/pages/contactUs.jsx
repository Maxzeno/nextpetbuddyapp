import React from 'react'
import Navbar from '../components/nav/navbar'
import Button from '../components/button/button'
import Footer from '../components/section/footer.jsx';

export default function ContactUs() {

    return (
        <>
            <Navbar />
            <div className='mx-auto pt-5 w-[80vw] mb-5'>
                <div className='font-medium text-3xl pb-5'>
                    Contact us
                </div>

                <form action="post">
                    <div className="mb-3">
                        Email
                    </div>
                    <input placeholder='Email Address' type="text" className='border w-full rounded-lg h-[40px] px-4 focus:outline-none focus:border-2 mb-5' />

                    <div className="mb-3">
                        Message
                    </div>
                    <textarea className='border w-full rounded-lg h-[80px] px-4 focus:outline-none focus:border-2 mb-5' placeholder="Message"></textarea>
                    <Button text="Send" color="text-white" bgColor="bg-red-500" bgHover="hover:bg-red-600" />

                </form>
            </div>
            <Footer />

        </>

    )
}