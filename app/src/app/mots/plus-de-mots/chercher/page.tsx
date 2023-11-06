'use client';
import '../../../globals.css';
import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Button } from 'bootstrap';
import { useRouter } from 'next/navigation';
import { word_id } from '../../../communication/entity';
import WordGrid from '@/app/components/wordGrid';

function Search(): JSX.Element {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState('');
  const [wordNotFind, setWordNotFind] = useState(false);
  const [listWord, setListWord] = useState<word_id[]>([
    {
      name: 'Tophet',
      etymologie:
        "vient de l'hébreu <tōfet> qui désigne un lieu prés de Jérusalem, où, selon la bible, les cananéens sacrifiaient leurs enfants",
      definition:
        'désigne la partie centrale des sanctuaire dans les religions phéniciennes, dans lequel il y a des urnes contenant les cendres des enfants et animaux sacrifiés, et où se trouvent de nombreuses stèles votives',
      gender: 'feminin',
      theme: 'famille',
      id: 1,
      positive_note: 0,
      negative_note: 0,
    },
    {
      name: 'Échanson',
      etymologie:
        'vient du vieux allemand <skenkan> qui veut dire "verser à boire"',
      definition:
        "officier chargé de servir à boire à une personne de haut rang, personne de confiance, en raison de la crainte de complot, Hébé était la déesse de la jeunesse, et l'échanson des dieux dans la mythologie grecque, Béhémoth est l'échanson des enfers, l'échanson avait aussi un blason au Moyen-Âge",
      gender: 'feminin',
      theme: 'famille',
      id: 2,
      positive_note: 0,
      negative_note: 0,
    },
    {
      name: 'Me revoilà',
      etymologie: 'comment ça va',
      definition: 'ça va et toi',
      gender: 'feminin',
      theme: 'famille',
      id: 3,
      positive_note: 0,
      negative_note: 0,
    },
    {
      name: 'Me revoilo',
      etymologie: 'comment ça va',
      definition: 'ça va et toi',
      gender: 'feminin',
      theme: 'famille',
      id: 4,
      positive_note: 0,
      negative_note: 0,
    },
    {
      name: 'Paraleiloidation',
      etymologie: 'comment ça va',
      definition: 'ça va et toi',
      gender: 'nom feminin',
      theme: 'géographie',
      id: 5,
      positive_note: 0,
      negative_note: 0,
    },
  ]);
  const searchToBack = () => {
    let ret = searchWord.toLowerCase();
    console.log(ret);
    setWordNotFind(true);
  };

  const handleKeyPress = (e: any): void => {
    if (e.key === 'Enter') {
      searchToBack();
    }
  };

  const addWord = () => {
    router.push('/options/ajouter-modifier?word=' + searchWord + '&action=add');
  };

  const changeWord = () => {
    router.push(
      '/options/ajouter-modifier?word=' + searchWord + '&action=change',
    );
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
                                    Aucun mot n'a été trouvé, cliquez ici pour l'apporter
                                </button>
                            )}
                            
                            <div
                                className='max-h-80 overflow-y-auto w-100'
                            >{WordGrid([...listWord, ...listWord, ...listWord, ...listWord])}</div>
                        </div>
                    </div>
                );
            }

            export default Search;
