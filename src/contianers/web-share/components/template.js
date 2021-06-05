import React from 'react';
import DamageStats from './damageStats';

const COVER_ART = 'https://fsa.zobj.net/crop.php?r=-9ohX5AMakAfm19V4fg7AqDOrmkAol_zmDy0QfNjy2nAAh1Fxky-sFX_K6WB0kHweBwYTB0QzspHZqimhv2lW8_HI7YBCWuP3S7KwQ2Y8BWcNs8FNo1TE7C6VZl2meQamphbUfeX38kGD-cL'

// this is the html what we will create pdf.
const Template = (props) => (

  <div className='p-4 md:p-14 mt-5 shadow-xl rounded-xl border bg-white' id="pdf-doc" >
    <div className="flex justify-center flex-col md:flex-row md:items-center">
      <div>
      <img src={COVER_ART} className="max-w-lg max-h-96 mx-auto md:mx-0" alt="Resident Evil Vilage Coverart" />
        <p className="text-center italic pt-2">Resident Evil Village</p>
      </div>
      <div className="flex-1 md:ml-5">
    <img
      src='https://fontmeme.com/permalink/210605/536a59316be4b439825898e3fab5cf32.png'
      className="max-w-auto max-h-auto mx-auto mb-14"
      alt="Logo"
    />
        <DamageStats />
      </div>
    </div>
    <section className="mt-5">
      <p>
        Resident Evil Village is a survival horror game developed and published by Capcom. The sequel to Resident Evil 7: Biohazard (2017),[1] players control Ethan Winters, who is searching for his kidnapped daughter; after a fateful encounter with Chris Redfield, he finds himself in a village filled with mutant creatures. While Village maintains the Resident Evil series' survival horror elements, the game adopts a more action-oriented gameplay style compared to its predecessor.
        Resident Evil Village also includes an online multiplayer mode. The game was announced at the PlayStation 5 reveal event in June 2020 and was released on May 7, 2021, for Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S and Stadia.[2][3] Resident Evil Village received generally favorable reviews, being praised for its gameplay, setting, and variety, although it received criticism for its puzzles and boss battles. The game's increased focus on action over its predecessor received more mixed opinions.
      </p>
    </section>
  </div>

);


export default Template;
