'use client';
import '../../globals.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { word } from '@/app/communication/entity';
import { getWordByName } from '@/app/communication/word';
import form from '@/app/components/form';

function AddChangeWord(): JSX.Element {
  const searchParam = useSearchParams();
  const wordId = searchParam?.get('mot') ?? '';

  return form([wordId]);
}

export default AddChangeWord;
