import PetsCategory from '../card/pets';

export default function HomeCategory() {
    return <div>
        <div className='font-semibold text-2xl mb-5'>Pets Category</div>
        <div>
            <PetsCategory />
            <PetsCategory />
            <PetsCategory />
        </div>
    </div>
}
