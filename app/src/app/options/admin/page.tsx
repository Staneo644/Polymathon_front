'use client';
import '../../globals.css';
import listCard from '@/app/components/listCard';
import type { potential_word_id, word } from '../../communication/entity';
import { useEffect, useState } from 'react';
import {
  acceptPotentialWord,
  getPotentialWords,
} from '@/app/communication/potential_word';
import { rejectPotentialWord } from '@/app/communication/potential_word';
import form from '@/app/components/form';
import { getWordById } from '@/app/communication/word';

export default function App() {
  const [listWord, setListWord] = useState<potential_word_id[]>([]);
  const [showList, setShowList] = useState<string[]>([]);
  const [oldWord, setOldWord] = useState<word | null>();
  const [state, setState] = useState<number>(0)

  useEffect(() => {
    getPotentialWords().then((list) => {
      setListWord(list);
    });
  }, []);
  
  useEffect(() => {
    setState(listWord.length > 0 ? 2: 1)
    if (listWord.length > 0) {
      setShowList([
        listWord[0].name,
        listWord[0].definition,
        listWord[0].etymology,
        listWord[0].example,
        listWord[0].gender,
        listWord[0].theme,
      ]);
      if (listWord[0].true_word >= 0) {
        getWordById(listWord[0].true_word).then((word) => {
          setOldWord(word);
        });
      }
    } else {
      setShowList([]);
    }
    console.log(showList);
  }, [listWord]);




  const click = (word: word) => {
    if (listWord.length > 0) {
      acceptPotentialWord(listWord[0].id, word);
      setListWord(listWord.slice(1));
      setOldWord(null);
    }
  };

  const reject = () => {
    rejectPotentialWord(listWord[0].id);
    setListWord(listWord.slice(1));
    setOldWord(null);
  };

  const showOldWord = (): string => {
    let ret = '';
    if (oldWord && listWord.length > 0) {
      if (oldWord.name != listWord[0].name)
        ret += 'Nom : ' + oldWord.name + '\n';
      if (oldWord.definition != listWord[0].definition)
        ret += 'Définition : ' + oldWord.definition + '\n';
      if (oldWord.etymology != listWord[0].etymology)
        ret += 'Étymologie : ' + oldWord.etymology + '\n';
      if (oldWord.example != listWord[0].example)
        ret += 'Exemple : ' + oldWord.example + '\n';
      if (oldWord.theme != listWord[0].theme)
        ret += 'Thème : ' + oldWord.theme + '\n';
    }
    return ret;
  };

  return (
    <>
      {form(showList, click, reject)}
      <div className="absolute z-index-2 left-10 overflow-scroll max-h-100 top-12 text-white">
        {state == 2 &&
          listWord[0].wiki_def.map((def) => {
            return (
              <div className="border rounded w-80">
                <div className="text-xl">{def.nature}</div>
                {def.definition.map((def) => {
                  return <div className="text-l">{def}</div>;
                })}
              </div>
            );
          })}
          { <></>}
      {state == 1 && <>Plus de mots à valider</>}
      {state == 0 && <>En recherche de mots</>}
      </div>

      <div className="absolute z-index-2 right-10 overflow-scroll max-h-100 top-12 text-white">
        {oldWord && <div className="border rounded w-80">{showOldWord()}</div>}
      </div>
    </>
  );

  // return <div>{WordGrid(listWord)}</div>
}
