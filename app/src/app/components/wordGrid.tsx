import React, { useEffect, useState } from 'react';
import { grid, word } from '../communication/entity';
import gridFunction from './grid';


export default function WordGrid(word: word[]){
    const sizeScreenLimit = 640;
    const [grid, setGrid] = useState<grid[]>([]);

    const convertToGrid = (): grid[] => {
        let ret:grid[] = [];
        ret.push({index:"Mot", value:[]});
        word.forEach(element => {
            ret[ret.length - 1].value.push(element.name);
        });

        if ( window.innerWidth > sizeScreenLimit) {
            ret.push({index:"Genre", value:[]});
            word.forEach(element => {
                ret[ret.length - 1].value.push(element.gender);
            });
            ret.push({index:"Thème", value:[]});
            word.forEach(element => {
                ret[ret.length - 1].value.push(element.theme);
            });
        }

        ret.push({index:"Définition", value:[]});
        word.forEach(element => {
            ret[ret.length - 1].value.push(element.definition);
        });
        ret.push({index:"Étymologie", value:[]});
        word.forEach(element => {
            ret[ret.length - 1].value.push(element.etymologie);
        });
        return ret;
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setGrid(convertToGrid());

        }}, [window.innerWidth])


    return (gridFunction(grid))
    
}