import React, { useState, useRef, useEffect } from 'react';
import oneCard from './oneCard';
import type { word } from '../communication/entity';

let wordIndex = 0;
let cardIndex = 0;
const listCard: React.FC<word[]> = (liste: word[]) => {
  const containerRefMiddle = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [yMouseDown, setYMouseDown] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [listCard, setListCard] = useState<oneCard[]>([]);

  const checked = ():boolean => {
    return  liste && liste.length > 0;
  }
  
  const moveToRight = (): void => {
    if (checked() && wordIndex < liste.length - 1) {
      
      if (wordIndex === 0) {
        cardIndex = cardIndex + 1;
      } else {
        console.log('aaa');
        removeElementAtStart();
      }
      wordIndex = wordIndex + 1;
      if (wordIndex !== liste.length - 1) {
        addElementAtEnd(
          new oneCard({
            word: liste[wordIndex + 1],
            refPosition: '150%',
            transition: '0.5s',
            _index: wordIndex + 1,
          }),
          );
        }
        console.log('mouse up down ' + wordIndex + ' ' + cardIndex);
        setRefPosition();
      }
  }
  
  const moveToLeft = (): void => {
    console.log('JE SUIS LAAAAAA ' + wordIndex + ' ' + liste);
    if (checked() && wordIndex > 0) {
      console.log('ET ICIIII')
      
      console.log('mouse up up');
      if (wordIndex !== liste.length - 1) {
        removeElementAtEnd();
      }
      wordIndex = wordIndex - 1;
      if (wordIndex === 0) {
        cardIndex = cardIndex - 1;
      } else {
        addElementAtStart(
          new oneCard({
            word: liste[wordIndex - 1],
            refPosition: '-50%',
            transition: '0.5s',
            _index: wordIndex - 1,
          }),
          );
        }
        setRefPosition();
      }
  }
  useEffect(() => {
    if (liste && liste.length > 0)
      setListCard([
        new oneCard({
          word: liste[0],
          refPosition: '50%',
          transition: '0',
          _index: 0,
        }),
        new oneCard({
          word: liste[1],
          refPosition: '150%',
          transition: '0',
          _index: 1,
        }),
      ]);
  }, [liste]);

  useEffect(() => {
    const handleKeyPress = (e:any) => {
      if (e.key === 'ArrowLeft') {
        console.log('left')
        moveToLeft();
      } else if (e.key === 'ArrowRight') {
        moveToRight();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  
  const addElementAtEnd = (element: oneCard): void => {
    listCard.push(element);
  };

  const addElementAtStart = (element: oneCard): void => {
    listCard.unshift(element);
  };

  const removeElementAtEnd = (): void => {
    listCard.pop();
  };

  const removeElementAtStart = (): void => {
    console.log(listCard);
    listCard.shift();
    console.log(listCard);
  };
  
  const handleMouseDown = (event: any): void => {
    listCard.forEach((oneCard: any) => {
      oneCard.setTransition('0s');
    });
    setYMouseDown(event.clientX);
    console.log('mouse down');
    setIsMouseDown(true);
  };
  
  const setRefPosition = (): void => {
    listCard[cardIndex].setRefPosition('50%');
    if (cardIndex < listCard.length - 1) {
      listCard[cardIndex + 1].setRefPosition('150%');
    }
    if (cardIndex > 0) {
      listCard[cardIndex - 1].setRefPosition('-50%');
    }
  }
  
  const handleMouseUp = (event: any): void => {
    console.log('mouse up');
    listCard.forEach((oneCard: oneCard) => {
      oneCard.setTransition('0.5s');
      oneCard.setPosition(0);
    });
    const px = event.clientX - yMouseDown;
    if (px > 150) {
      moveToLeft();
    } else if (px < -150) {
      moveToRight();
    }
    
    
    setIsMouseDown(false);
  };
  
  const handleMouseMove = (event: any): void => {
    if (isMouseDown && containerRefMiddle.current) {
      console.log('mouse move');
      const px = event.clientX - yMouseDown;
      listCard.forEach((oneCard: any) => {
        oneCard.setPosition(px);
      });
      setYCoord(yMouseDown + event.clientX);
    }
  };

  return (
    <> {!checked() && 
      <div className="text-white">
        Liste de mots vide, vérifiez votre connexion
      </div>
    }{ checked() &&

      <div
      ref={containerRefMiddle}
      className="w-full h-full"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleMouseMove}
      >
      {listCard &&
        listCard.length > 0 &&
        listCard.map((element) => (
          <div key={element.getIndex()}>{element.getCard()}</div>
          ))}
    </div>
        }
          </>
  );
};

export default listCard;
