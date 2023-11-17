'use client';
import '../../../globals.css';
import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { word_id } from '../../../communication/entity';
import WordGrid from '@/app/components/wordGrid';
import { getWordByName } from '@/app/communication/word';

function Search(): JSX.Element {
  const router = useRouter();
  const [wordNotFind, setWordNotFind] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const login = localStorage.getItem('access_token');
  const [listWord, setListWord] = useState<word_id[]>([
    {
      name: 'Tophet',
      etymology:
        "vient de l'hébreu <tōfet> qui désigne un lieu prés de Jérusalem, où, selon la bible, les cananéens sacrifiaient leurs enfants",
      definition:
        'désigne la partie centrale des sanctuaire dans les religions phéniciennes, dans lequel il y a des urnes contenant les cendres des enfants et animaux sacrifiés, et où se trouvent de nombreuses stèles votives',
      gender: 'feminin',
      theme: 'famille',
      example: 'Le tophet de Carthage',
      id: 1,
      positive_note: 0,
      negative_note: 0,
    },
    {
      name: 'Échanson',
      etymology:
        'vient du vieux allemand <skenkan> qui veut dire "verser à boire"',
      definition:
        "officier chargé de servir à boire à une personne de haut rang, personne de confiance, en raison de la crainte de complot, Hébé était la déesse de la jeunesse, et l'échanson des dieux dans la mythologie grecque, Béhémoth est l'échanson des enfers, l'échanson avait aussi un blason au Moyen-Âge",
      gender: 'feminin',
      theme: 'famille',
      example: "L'échanson du roi",
      id: 2,
      positive_note: 0,
      negative_note: 0,
    },
    {
      name: 'Me revoilà',
      etymology: 'comment ça va',
      definition: 'ça va et toi',
      gender: 'feminin',
      theme: 'famille',
      example: 'Me revoilà',
      id: 3,
      positive_note: 0,
      negative_note: 0,
    },
    {
      name: 'Me revoilo',
      etymology: 'comment ça va',
      definition: 'ça va et toi',
      gender: 'feminin',
      theme: 'famille',
      example: 'Me revoilà',
      id: 4,
      positive_note: 0,
      negative_note: 0,
    },
    {
      name: 'Paraleiloidation',
      etymology: 'comment ça va',
      definition: 'ça va et toi',
      gender: 'nom feminin',
      theme: 'géographie',
      example: 'Me revoilà',
      id: 5,
      positive_note: 0,
      negative_note: 0,
    },
  ]);
  const searchToBack = () => {
    let ret = searchWord.toLowerCase();
    getWordByName(ret).then((word: word_id | null) => {
      console.log(word);
      if (word == null) setWordNotFind(true);
      else {
        setWordNotFind(false);
        const list = [word];
        setListWord([]);
        setListWord(list);
      }
    });
  };

  const handleKeyPress = (e: any): void => {
    if (e.key === 'Enter') {
      searchToBack();
    }
  };

  const addWord = () => {
    if (login) router.push('/options/ajouter?mot=' + searchWord);
    else router.push('/options/connexion');
  };

  return (
    <div className="flex flex-col space-y-4 items-center justify-evenly h-100 w-100 text-black">
      <div className="relative min-w-[200px] max-w-[600px] w-50">
        <button className="absolute left-3 top-2 text-black">
          <FontAwesomeIcon icon={faSearch} onClick={searchToBack} />
        </button>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-2xl focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Mot à rechercher"
          type="text"
          name="search"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>

      <div>
        {wordNotFind && (
          <button
            className="text-white mb-4 text-xl bg-orange-800"
            onClick={addWord}
          >
            {login && (
              <>Aucun mot n'a été trouvé, cliquez ici pour l'apporter</>
            )}
            {!login && (
              <>
                Aucun mot n'a été trouvé, veuillez vous connecter pour
                l'apporter
              </>
            )}
          </button>
        )}

        <div className="max-h-80 overflow-y-auto w-100">
          {WordGrid(listWord)}
        </div>
      </div>
    </div>
  );
}

export default Search;
