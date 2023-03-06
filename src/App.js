import { useState } from 'react';
import './App.css';
import Damla from './Damla';

function App() {

  let ilkDegerler = [];
  for (let i = 0; i < 5; i++)
    ilkDegerler.push(Math.floor(Math.random() * 9 + 1));

  const [sayilar, setSayilar] = useState(ilkDegerler);

  const degisimVar = function (indeks, yeniBoyut) {
    const yeniSayilar = [...sayilar];
    if (yeniBoyut >= 10)
      yeniSayilar.splice(indeks, 1);
    else
      yeniSayilar[indeks] = yeniBoyut;
    setSayilar(yeniSayilar);
  };

  return (
    <div className="App">
      <h1>Damlaya Damlaya Göl Olur</h1>
      {sayilar.length == 0 && <p className="App-sonuc">Göl kurudu!</p>}
      <div className='gol'>
        {sayilar.map((v, i) =>
          <Damla key={i} indeks={i} boyut={v} degistiginde={degisimVar} />)}
      </div>
      <p className="App-sonuc">TOPLAM: {sayilar.reduce((a, b) => a + b, 0)}</p>
    </div>
  );
}

export default App;
