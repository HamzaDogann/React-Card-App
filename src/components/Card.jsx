function Card({ card, emptyCard }) {

    const Total = card.reduce((acc, item) => acc + item.price, 0)

    if (card.length === 0) return

    return (
        <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
            <ul>
                {card.map((item) => (
                    <li className="mt-2 flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.price} TL</span>
                    </li>
                ))}
            </ul>
            <hr className="my-4" />
            <p className="font-semibold text-2xl">
                Toplam : {Total} TL
            </p>
            <button className="bg-red-500 mt-3 text-white px-4 py-3 rounded w-full hover:bg-red-700 transition-all"
                onClick={emptyCard}
            >
                Sepeti Boşalt
            </button>
        </div>
    )
}

export default Card