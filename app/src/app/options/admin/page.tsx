'use client'

import listCard from "@/app/components/listCard"
import type { potential_word_id, word_id } from "../../communication/entity"
import { useEffect, useState } from "react";
import { getPotentialWords } from "@/app/communication/potential_word";
import WordGrid from "@/app/components/grid";

export default function App() {
    const [listWord, setListWord] = useState<potential_word_id[]>([]);


    const getList = async () => {
        setListWord(await getPotentialWords());
    }

    useEffect(() => {
       getList();
    }, [])
  return (
    <div>
     {WordGrid(listWord)}
    </div>
  )
}