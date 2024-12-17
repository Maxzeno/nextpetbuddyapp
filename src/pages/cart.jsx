import React from 'react'
import Footer from '../components/section/footer.jsx';
import Sidebar from '../components/section/sidebar.jsx';

export default function Cart() {

    return (
        <>
            <Sidebar head={<div>
                Shop Cart head
            </div>} body={<div>
                Shop Cart body
            </div>} />
            <Footer />

        </>

    )
}