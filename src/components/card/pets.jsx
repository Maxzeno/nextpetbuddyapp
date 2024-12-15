import logo from '../../assets/logo-removebg-crop.png'

export default function PetsCategory() {
    return <div className='p-5 border hover:border-red-300 cursor-pointer rounded inline-block mr-5'>
        <div className='mb-5'>
            <img className='h-[150px] w-[150px] object-contain' src={logo} alt="" />
        </div>
        <div className='text-center'>text</div>
    </div>
}
