'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { clickedTheme } from './theme';
import { word } from '../communication/entity';

export default function form(content: string[], click: (word:word) => void, reject: null | (() => void)): JSX.Element {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState(''
  );
  const [definition, setDefinition] = useState(''
  );
  const [etymology, setetymology] = useState('');
  const [example, setExample] = useState('');
  const [gender, setGender] = useState('');
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setSearchWord(content.length > 0 ? content[0] : '');
    setDefinition(content.length > 2 ? content[1] : '');
    setetymology(content.length > 1 ? content[2] : '');
    setExample(content.length > 3 ? content[3] : '');
    setGender(content.length > 4 ? content[4] : '');
    setTheme(content.length > 5 ? content[5] : '');
  }, [content]);

  return (
    <div className="flex flex-col space-y-4 items-center h-100 w-100 justify-evenly text-black">
      <input
        type="text"
        placeholder="Mot"
        className="w-80 border rounded p-2 max-w-[700px]"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <select
        className="w-80 border rounded p-2 max-w-[700px]"
        onChange={(e) => setGender(e.target.value)}
        value={gender}
      >
        <option value="adj">Adjectif</option>
        <option value="n.m.">Nom masculin</option>
        <option value="n.f.">Nom féminin</option>
        <option value="v">Verbe</option>
        <option value="adv">Adverbe</option>
        <option value="autre">Autre</option>
      </select>
      {clickedTheme(theme, setTheme)}
      <textarea
   
        placeholder="Définition"
        className="border rounded p-2 max-w-[700px] w-80"
        onChange={(e) => setDefinition(e.target.value)}
        value={definition}
      ></textarea>
      <textarea
   
        placeholder="Étymologie"
        className="border rounded p-2 max-w-[700px] w-80"
        onChange={(e) => setetymology(e.target.value)}
        value={etymology}
      />
      <textarea
   
        placeholder="Exemples"
        className="border rounded p-2 max-w-[700px] w-80"
        onChange={(e) => setExample(e.target.value)}
        value={example}
      ></textarea>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded max-w-[700px]"
        onClick={() => {
          click({
            name: searchWord,
            etymology: etymology,
            definition: definition,
            gender: gender,
            example: example,
            theme: theme})
        }}
      >
        Soumettre
      </button>
      {reject && <button
        className="bg-red-500 text-white py-2 px-4 rounded max-w-[700px]"
        onClick={() => {
          reject()
        }}
      >
        Rejeter
      </button>}
    </div>
  );
}
