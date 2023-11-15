import React, { useState } from 'react';
import ConfirmationDialog from './confirmation';
import {useRouter} from 'next/navigation';

export interface grid {
  index: string;
  value: string[];
}

const gridFunction = (wordList: grid[]): JSX.Element => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState("");
  const router = useRouter();
  const [wordClicked, setWordClicked] = useState("");

  console.log(wordList);

  const completeGrid = ():string[][] => {
    let ret: string[][] = [];
    for (let i = 0; wordList && wordList.length > 0 && wordList[0].value && i < wordList[0].value.length; i++) {
      ret.push([]);
      for (let j = 0; j < wordList.length; j++) {
        ret[i].push(wordList[j].value[i]);
      }
    }
    return ret; 
  }

  const value = completeGrid();


  return (
    <div className="container mx-auto overflow-scroll w-90vw">
      <table className="min-w-full divide-y divide-x divide-gray-200 overflow-scroll">
        <thead>
          <tr className={`grid grid-cols-${wordList.length}`}>
            {wordList.map((word, index) => (
              <th key={index} className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {word.index}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-x divide-gray-200">
          {value.map((word, index) => (
            <tr key={index} className={`grid grid-cols-${wordList.length}`} onClick={() => {setWordClicked(word[0]);setDialogText("Êtes vous sûr de vouloir modifier le mot " + word[0]) ; setShowDialog(true)}}>
              {word.map((word, index) => (
                <td key={index} className="max-h-40 overflow-scroll px-2 py-2 border-r">
                  <div className="overflow-scroll">{word}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showDialog && (ConfirmationDialog(() => {router.push('/options/modifier?mot=' + wordClicked)}, dialogText, () => {setShowDialog(false)}))}
    </div>
  );
};

export default gridFunction;

