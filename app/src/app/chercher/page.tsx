'use client';
import '../../../globals.css';
import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { word_id } from '../communication/entity';
import WordGrid from '@/app/components/wordGrid';
import { getSubString } from '@/app/communication/word';

function Search(): JSX.Element {
  const router = useRouter();
  const [wordNotFind, setWordNotFind] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const login = typeof localStorage !== 'undefined'?localStorage.getItem('access_token'):'';
  const [listWord, setListWord] = useState<word_id[]>([])


  useEffect(() => {
    if (listWord && listWord.length > 0) {
      setWordNotFind(false);
    }
    else {
      setWordNotFind(true);
    }
  }, [listWord]);

  const searchToBack = () => {
    let ret = searchWord.toLowerCase();
    if (ret.length === 0) return;
    getSubString(ret).then((word: word_id[] | null) => {
      console.log(word);
      if (word) {
        setListWord(word);
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
