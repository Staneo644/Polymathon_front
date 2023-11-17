'use client';
import { useState } from 'react';
import type { ReactElement } from 'react';
import listCard from '@/app/components/listCard';
import type { word_id } from '../../communication/entity';
import { getDayWord } from '../../communication/word';
import { useEffect } from 'react';


const Daywords = (): JSX.Element => {
  const [listWord, setListWord] = useState<word_id[]>([]);

  useEffect(() => {
    getDayWord().then((res) => {
      if (res) setListWord(res);
    });
  }, []);

  return <>{listCard(listWord)}</>;
};
export default Daywords;
