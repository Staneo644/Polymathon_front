'use client';
import '../../globals.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPotentialWord } from '@/app/communication/potential_word';

function AddChangeWord(): JSX.Element {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState('');
  const [wordNotFind, setWordNotFind] = useState(false);
  const [etymologie, setEtymologie] = useState('');
  const [definition, setDefinition] = useState('');
  const [example, setExample] = useState('');
  const [type, setType] = useState('');

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

  const addWord = async () => {
    await createPotentialWord({ name: searchWord,
      etymologie: etymologie,
      definition: definition,
      type: type,
      positive_note: 0,
      negative_note: 0,
    });
  }

  return (
    <div className="flex flex-col space-y-4 items-center h-100 w-100 justify-evenly text-black">
      {/* <div className="flex flex-col text-black max-w-[700px] justify-evenly h-full"> */}
      <input
        type="text"
        placeholder="Mot"
        className="w-80 border rounded p-2 max-w-[700px]"
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <select className="w-80 border rounded p-2 max-w-[700px]"
      onChange={(e) => setType(e.target.value)}
      >
        <option value="adjectif">Adjectif</option>
        <option value="nom-masculin">Nom masculin</option>
        <option value="nom-feminin">Nom féminin</option>
        <option value="verbe">Verbe</option>
        <option value="adverbe">Adverbe</option>
        <option value="autre">Autre</option>
      </select>
      <textarea
        placeholder="Définition"
        className="border rounded p-2 max-w-[700px] w-80"
        onChange={(e) => setDefinition(e.target.value)}
      ></textarea>
      <textarea
        placeholder="Étymologie"
        className="border rounded p-2 max-w-[700px] w-80"
        onChange={(e) => setEtymologie(e.target.value)}
      />
      <textarea
        placeholder="Exemples"
        className="border rounded p-2 max-w-[700px] w-80"
        onChange={(e) => setExample(e.target.value)}
      ></textarea>
      <button className="bg-blue-500 text-white py-2 px-4 rounded max-w-[700px]" onClick={addWord}>
        Soumettre
      </button>
      {/* </div> */}
    </div>
  );
}

export default AddChangeWord;
