import { useState } from 'react'
import Header from "./components/Header"
import Product from "./components/Products"
import Card from "./components/Card"


export default function App() {

  const [card, setCard] = useState([]);

  function emptyCard(){
    setCard([])
  }

  return (
    <div className='container mx-auto'>
      <Header card={card} />
      <Product card={card} setCard={setCard} />
      <Card card={card} emptyCard={emptyCard} />
    </div>
  )
}