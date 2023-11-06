import React from 'react';
import { potential_word_id, word } from '../communication/entity';

const WordGrid = (wordList: word[] | potential_word_id[]): JSX.Element => {

  const element = wordList[0]
  const isWord = (!element.hasOwnProperty('wiki_def'))

  

  return (
    <div className="container mx-auto  overflow-scroll table-fixed w-90vw">
      <table className="min-w-full divide-y divide-x divide-gray-200  overflow-scroll table-fixed">
        <thead>
          <tr>
            <th className="px-2 py-2 w-1/10 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mot</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Définition</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Étymologie</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thème</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-x divide-gray-200">
          {wordList.map((word, index) => (
            <tr key={index}>
              <td className="px-2 py-2 border-r">
                <div className="overflow-scroll">{word.name}</div>
              </td>
              <td className="px-2 py-2 border-r">
                <div className="overflow-scroll">

                {word.gender}
                </div>
                </td>
              <td className="px-2 py-2 border-r">
                <div className="max-h-[100px] overflow-scroll w-72">{word.definition}</div>
              </td>
              <td className="px-2 py-2 overflow-x-auto border-r">
                <div className="w-72">
                    {word.etymologie}
                    </div>
              </td>
              <td className="px-2 py-2 border-r">{word.theme}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordGrid;

