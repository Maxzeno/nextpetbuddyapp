import Button from '../button/button'
import jumImage from '../../assets/store-graphics.svg'

export default function MidJumbotron() {
    return <div className="bg-gray-200 rounded-lg my-5 flex p-8"
    >
        <div className='flex-1'>
            <div className='font-bold text-4xl mb-3'>
                Get the best pets
            </div>
            <div className='font-normal text-xl mb-3'>
                Everything you want at your finger tips. find your buddy.
            </div>
            <Button text="Start Shopping" color="text-white" bgColor="bg-green-500" bgHover="hover:bg-green-600" />

        </div>
        <div className='flex-1 hidden lg:block'>
            <img className='' src={jumImage} alt="" />

        </div>
    </div>
}
