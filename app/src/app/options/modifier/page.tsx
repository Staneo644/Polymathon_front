'use client';

import React, { use, useEffect } from 'react';
import form from '@/app/components/form';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { getWordByName } from '@/app/communication/word';
import { useState } from 'react';
import { word } from '@/app/communication/entity';

export default function updateWord () {

    const router = useRouter();
    const [searchWord, setSearchWord] = useState<word>();
    const searchParam = useSearchParams();


    const wordId = searchParam?.get('mot')??"";
    getWordByName(wordId).then((word) => {
        if (word)
            setSearchWord(word);
    })

    return (
        <>
        {searchWord && form([searchWord.name, searchWord.definition, searchWord.etymology, searchWord.example, searchWord.gender, searchWord.theme])}
        {!searchWord && <div className='text-white'>Recherche du mot {wordId}, si la recherche est longue, vérifiez votre connexion et que le mot existe bien sur le site</div>}
        </>
        )
}