import logo from '../../assets/hero-custom.png'

export default function PetCard() {
    return <div className='border hover:border-green-300 cursor-pointer inline-block rounded-lg' style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)" }}>
        <img className='h-[300px] w-full object-cover rounded-t-lg' src={logo} alt="" />
        <div className='p-3'>
            <div className='font-medium text-lg mb-1'>German Shepherd</div>
            <div className='font-normal text-sm text-green-400 pb-3 mb-3 border-b-2'>Dog</div>
            <div className='flex justify-between'>
                <div className='font-normal'>3000</div>
                <button className='border rounded-3xl py-2 px-3 border-green-400 hover:bg-gray-100'>ADD</button>
            </div>
        </div>
    </div >
}
