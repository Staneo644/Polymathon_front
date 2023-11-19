import React from 'react';
import type { word_id } from '../communication/entity';
import EtymologyComponent from './etymology';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class OneCard extends React.Component {
  constructor(props: {
    word: word_id;
    refPosition: string;
    transition: string;
    _index: number;
  }) {
    super(props);
    this.word = props.word;
    console.log(this.word.theme);
    this.position = 0;
    this.transition = props.transition;
    this.refPosition = props.refPosition;
    this.index = props._index;
  }

  index: number;
  word: word_id;
  position: number;
  transition: string;
  refPosition: string;

  getIndex(): number {
    return this.index;
  }

  setPosition(position: number): void {
    this.position = position;
  }

  setRefPosition(refPosition: string): void {
    this.refPosition = refPosition;
  }

  setTransition(transition: string): void {
    this.transition = transition;
  }

  getCard(): any {
    return (
      <div
        className="text-black overflow-y-scroll"
        style={{
          width: '85vw',
          justifyContent: 'center',
          alignItems: 'center',
          top: `calc(58px + 5%)`,
          backgroundImage:
            'url(https://s2.qwant.com/thumbr/474x323/7/5/15e7a9bcd784af960fb05e85addd943f5f08a5259bb5803b58a1b3f39473cc/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.jytUH6XTOQ7pXAgURy6LYQHaFD%26pid%3DApi&q=0&b=1&p=0&a=0)',
          backgroundSize: 'cover',
          left: `calc(${this.refPosition} + ${this.position}px)`,
          transform: 'translate(-50%)',
          borderRadius: '20px',
          boxShadow: '0px 0px 10px 0px black',
          overflowY: 'scroll',
          overflowX: 'hidden',
          position: 'fixed',
          transition: this.transition,
        }}
      >
        <div className='mt-2 ml-2 text-xl italic font-serif'
        >
          {EtymologyComponent(this.word.etymology)}
        </div>
        <div className="flex items-center justify-center whitespace-pre">
          <h3 className="font-bold italic font-serif text-2xl">
            {this.word.name}
          </h3>
          <h4 className="text-lg text-gray-600 italic">
            {'  ('}
            {this.word.gender}
            {')'}
          </h4>
        </div>
        <div className="mb-2 ml-2 text-xl italic font-serif">
          {this.word.theme !== 'Sans thème' && (
           
              <span className='text-gray-600'>

                {this.word.theme + ' : '}
              </span>
          
          
          )}{this.word.definition}
        </div>
      </div>
    );
  }
}

export default OneCard;