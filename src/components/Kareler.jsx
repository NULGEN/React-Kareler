import React, { useState } from 'react';
const KareIdListesi = ['sqA', 'sqB', 'sqC', 'sqD'];
export default function Kareler() {
  const [kareler, setKareler] = useState(KareIdListesi);
  const [aktifKareId, setAktifKareId] = useState('');

  const classAdiAl = (id) => {
    return aktifKareId === id ? 'active' : '';
  };

  const aktifEt = (id) => {
    if (aktifKareId === id) {
      setAktifKareId('');
    } else {
      setAktifKareId(id);
    }
  };

  return (
    <div className="widget-squares container">
      <h2>Kareler</h2>
      <div className="squares">
        {KareIdListesi.map((id) => (
          <div
            id={id}
            key={id}
            data-testid={id}
            className={`square ${classAdiAl(id)}`}
            onClick={() => aktifEt(id)}
          ></div>
        ))}
      </div>
    </div>
  );
}
