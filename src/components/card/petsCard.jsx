import logo from '../../assets/hero-custom.png'

export default function PetCard() {
    return <div className='border hover:border-green-300 cursor-pointer inline-block rounded-lg'>
        <img className='h-[300px] w-full object-cover rounded-t-lg' src={logo} alt="" />
        <div className='p-3'>
            <div className='font-medium text-lg mb-1'>German Shepherd</div>
            <div className='font-normal text-sm text-green-400 pb-3 mb-3 border-b-2'>Dog</div>
            <div className='flex justify-between'>
                <div className='font-normal'>3000</div>
                <button>ADD</button>
            </div>
        </div>
    </div >
}
