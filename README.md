# React Card App

# Sepet Uygulaması

Bu README dosyası, bir Sepet uygulamasının yapısal ve işlevsel açıklamalarını içerir. Uygulamada kullanılan kavramlar ve yöntemler hakkında bilgi sağlar.

## Props Nedir?

Props (Properties), React bileşenleri arasında veri iletmek için kullanılan JavaScript nesneleridir. Bir bileşen, props adı verilen bir nesne alabilir ve bu props nesnesi, bileşenin işlevselliğini ve görünümünü belirlemesine yardımcı olur.

## useState Hook'u

useState hook'u, React bileşenlerinde durum (state) tutmamızı sağlar. Bu hook sayesinde, bileşenin durumu değiştiğinde yeniden render edilmesi ve güncel duruma uyum sağlaması mümkün olur.
Bu örnek üzerinde Kullanıcının seçtiği kart bilgilerini tutma görevini üstlenmiştir.

## Components Yapısı

React uygulamalarında bileşenler, uygulamanın yapı taşlarını oluşturur. Bu yapı, bileşen tabanlı bir mimari sunar ve her bir bileşen, kendi içinde bağımsız birer modül gibi çalışır.

<Header/ >
<Products/ >
<Footer/ >

gibi yapılar birer componentdir ve projede bu şekilde kullanılmıştır.

## Map Metodu

Map metodu, bir dizi elemanı dönüp her bir eleman üzerinde belirli bir işlem yapmamızı sağlar. Özellikle React uygulamalarında, listeleri veya dizileri render etmek için sıkça kullanılır.
Bu projede her bir kart için bilgileri görüntülemek için map metodu kullanılmıştır.

## Find Metodu

Find metodu, bir dizi içerisinde belirli bir koşulu sağlayan ilk elemanı bulmamızı sağlar. Genellikle bir dizi içinde belirli bir öğeyi bulmak için kullanılır.
Bu projede kullanıcının seçmiş olduğu kartların tekrar kullanılmaması yani seçilmemesi için kullanılmış güzel bir javascript metodudur.

## Reduce Metodu

Reduce metodu, bir dizi elemanı tek bir değere indirgeyerek işlem yapmamızı sağlar. Örneğin, bir dizi sayıyı toplamak veya bir dizi elemanı birleştirmek için kullanılabilir.
Bu projede toplam fiyat bilgisini tutmak için kullanılmış değerli bir javascript metodudur.

Bu belgede bahsedilen kavramlar ve yöntemler, React uygulamalarında sıkça kullanılan temel yapı taşlarıdır. Bu kavramların anlaşılması, daha karmaşık uygulamaların geliştirilmesinde önemli bir rol oynar.


![image](https://github.com/HamzaDogann/React-Card-App/assets/93007915/bf65dfa0-058d-4de8-8e47-104b9dcdaad5)

## App.jsx
```javascript
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
```
App.jsx genel görünümü bu şekildedir, diğer komponentler ve önemli bileşenlere proje dosyasından ulaşabilirsin.
