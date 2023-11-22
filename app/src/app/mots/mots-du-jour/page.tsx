'use client';
import { useState } from 'react';
import type { ReactElement } from 'react';
import listCardComponent from '@/app/components/listCard';
import type { word_id } from '../../communication/entity';
import { getDayWord } from '../../communication/word';
import '../../globals.css';
import { useEffect } from 'react';

const Daywords = (): JSX.Element => {
  const [listWord, setListWord] = useState<word_id[]>([]);

  useEffect(() => {
    getDayWord().then((res) => {
      if (res) setListWord(res);
    });
  }, []);


  return <>{listCardComponent(listWord, setListWord, null)}</>;
};
export default Daywords;
