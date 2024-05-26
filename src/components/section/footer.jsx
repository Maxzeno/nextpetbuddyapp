import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-100 px-10 lg:px-24">
      <div className="py-5 text-center">Pets Category</div>
      <div className="border-b-2 pb-5 flex justify-center">
        <div className="flex gap-5">
          <Link to="#" className="hover:text-amber-600">
            Dog
          </Link>
          <Link to="#" className="hover:text-amber-600">
            Cat
          </Link>
          <Link to="#" className="hover:text-amber-600">
            Bird
          </Link>
        </div>
      </div>

      <div className="text-center text-sm py-5">
        Copyright 2024 © NextPetBuddy. All rights reserved.
      </div>
    </div>
  );
}
