'use client';
import { useState } from 'react';
import type { ReactElement } from 'react';
import listCard from '@/app/components/listCard';
import type { word_id } from '../../communication/entity';
import { getDayWord } from '../../communication/word';

const Daywords = (): JSX.Element => {
  const [listWord, setListWord] = useState<word_id[]>([]);

  const changeListWord = async () => {
    const ret = await getDayWord();
    if (ret) setListWord(ret);
  };

  changeListWord();

  return <>{listCard(listWord)}</>;
};
export default Daywords;
