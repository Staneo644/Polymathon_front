'use client';
import { useRouter } from 'next/navigation';
import { createPotentialWord } from '@/app/communication/potential_word';
import { useEffect, useState } from 'react';
import { clickedTheme } from './theme';

export default function form(content: string[]): JSX.Element {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState(
    content.length > 0 ? content[0] : '',
  );
  const [definition, setDefinition] = useState(
    content.length > 2 ? content[1] : '',
  );
  const [etymology, setetymology] = useState(
    content.length > 1 ? content[2] : '',
  );
  const [example, setExample] = useState(content.length > 3 ? content[3] : '');
  const [gender, setGender] = useState(content.length > 4 ? content[4] : '');
  const [theme, setTheme] = useState(content.length > 5 ? content[5] : '');
  const [onSubmit, setOnSubmit] = useState(false);

  const addWord = async () => {
    createPotentialWord(
      {
        name: searchWord,
        etymology: etymology,
        definition: definition,
        gender: gender,
        example: example,
        theme: theme,
      },
      content.length > 0 ? content[0] : '',
    );
  };

  const selectedTheme = (themes: string[]) => {
    setTheme(themes[0]);
  };

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
      ></textarea>
      <textarea
        placeholder="Étymologie"
        className="border rounded p-2 max-w-[700px] w-80"
        onChange={(e) => setetymology(e.target.value)}
      />
      <textarea
        placeholder="Exemples"
        className="border rounded p-2 max-w-[700px] w-80"
        onChange={(e) => setExample(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded max-w-[700px]"
        onClick={() => {
          setOnSubmit(true);
          addWord();
        }}
      >
        Soumettre
      </button>
    </div>
  );
}
