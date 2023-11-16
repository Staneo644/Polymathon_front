'use client';
import '../../globals.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { word } from '@/app/communication/entity';
import { getWordByName } from '@/app/communication/word';
import form from '@/app/components/form';
import { createPotentialWord } from '@/app/communication/potential_word';


function AddChangeWord(): JSX.Element {
  const searchParam = useSearchParams();
  const [wordId, setWordId] = useState([searchParam?.get('mot') ?? ''])

  const addWord = async (word:word) => {
    createPotentialWord(
      word,
      -1,
    );
  };


  // return(<></>)
  return form(wordId, addWord, null);
}

export default AddChangeWord;
