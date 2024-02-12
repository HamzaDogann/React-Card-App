import { PiShoppingCartFill } from "react-icons/pi";


function Header({ card }) {
  return (
    <div className="flex justify-between items-center mb-6 mt-3">
      <h1 className='text-2xl font-semibold'>React ve Tailwind CSS Sepet Uygulamasi</h1>

      <div className="relative">
        <PiShoppingCartFill className="text-3xl" />
        {card.length > 0 && <span className="bg-red-500 text-white w-6 h-6 flex justify-center justify-items-center rounded-full absolute -top-2 -right-3">
          {card.length}
        </span>}
      </div>

    </div>


  )
}

export default Header