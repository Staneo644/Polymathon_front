'use client'
import React, { useEffect } from "react";
import { word_id } from "../communication/entity";
import { getLikedWords, getPopularWords } from "../communication/word";
import WordGrid from "./wordGrid";

export default function favorisComponent(popular:boolean){
    const [favoris, setFavoris] = React.useState<number>(1);
    const [listWord, setListWord] = React.useState<word_id[]>([]);

    useEffect(() => {
        if (popular) {

            getPopularWords(favoris === 1).then((res) => {
                if (res) setListWord(res);
            }
            );
        }
        else {
            getLikedWords(favoris === 1).then((res) => {
                if (res) setListWord(res);
            })
        }
    }, [listWord, favoris]);


    return (<div className='text-black'>
        <select
        className={`border rounded p-2 custom-width `}
        onChange={(e) => setFavoris(Number(e.target.value))}
        value={favoris}
      >
        <option value={1}>Les plus appréciés</option>
        <option value={0}>Les moins appréciés</option>
      </select>
        <div className="max-h-80 overflow-y-auto w-100">
          {WordGrid(listWord)}
        </div>
    </div>
        )
}