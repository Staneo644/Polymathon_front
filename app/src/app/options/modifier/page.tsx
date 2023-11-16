'use client';

import React, { use, useEffect } from 'react';
import form from '@/app/components/form';
import { useSearchParams } from 'next/navigation';
import { getWordByName } from '@/app/communication/word';
import { useState } from 'react';
import { word, potential_word_id, word_id } from '@/app/communication/entity';
import { create } from 'domain';
import { createPotentialWord } from '@/app/communication/potential_word';

export default function updateWord() {
  const [searchWord, setSearchWord] = useState<word_id>();
  const [listWord, setListWord] = useState<string[]>([]);
  const searchParam = useSearchParams();

  const wordId = searchParam?.get('mot') ?? '';

  useEffect(() => {
    getWordByName(wordId).then((word) => {
      if (word !== null) {
        setSearchWord(word);
      }}
    )
  }
  , []);

  useEffect(() => {
      if (searchWord)
        setListWord([
        searchWord.name,
        searchWord.definition,
        searchWord.etymology,
        searchWord.example,
        searchWord.gender,
        searchWord.theme,]);
      else setListWord([]);
  }, [searchWord]);

  const changeWord = (word: word) => {
    if (searchWord)
      createPotentialWord(word, searchWord.id);
  }

  return (
    <>
      {
        form(
          
        listWord, changeWord, null)}
      {/* {!searchWord && (
        <div className="text-white">
          Recherche du mot {wordId}, si la recherche est longue, vérifiez votre
          connexion et que le mot existe bien sur le site
        </div>
      )} */}
    </>
  );
}
