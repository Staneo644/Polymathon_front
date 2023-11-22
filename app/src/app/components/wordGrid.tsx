import React, { useEffect, useState } from 'react';
import { word } from '../communication/entity';
import gridFunction, { grid } from './grid';

export default function WordGrid(word: word[]) {
  const [grid, setGrid] = useState<grid[]>([]);

  const convertToGrid = (): grid[] => {
    let ret: grid[] = [];
    ret.push({ index: 'Mot', value: [] });
    word.forEach((element) => {
      ret[ret.length - 1].value.push(element.name + ' (' + element.gender + ')');
    });
    ret.push({ index: 'Définition', value: [] });
    word.forEach((element) => {
      ret[ret.length - 1].value.push(element.theme + ' : ' + element.definition);
    });
    ret.push({ index: 'Étymologie', value: [] });
    word.forEach((element) => {
      ret[ret.length - 1].value.push(element.etymology);
    });
    ret.push({ index: 'Exemple', value: [] });
    word.forEach((element) => {
      ret[ret.length - 1].value.push(element.example);
    });
    return ret;
  };
  useEffect(() => {
    setGrid(convertToGrid());
    console.log(word);
  }, [word]);

  return gridFunction(grid);
}
