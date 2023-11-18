'use client';
import { useState } from 'react';
import type { ReactElement } from 'react';
import listCardComponent from '@/app/components/listCard';
import type { word_id } from '../../../communication/entity';
import { getDayWord, getRandomWord } from '../../../communication/word';
import { useEffect } from 'react';

const randoWords = (): JSX.Element => {
  const [listWord, setListWord] = useState<word_id[]>([]);

  useEffect(() => {
    getRandomWord().then((res) => {
      if (res) setListWord(res);
    });
  }, []);

  return <>{listCardComponent(listWord)}</>;
};
export default randoWords;
