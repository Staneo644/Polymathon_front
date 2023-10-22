import React from "react";
import { word } from "../../../entity";
import { Card } from "react-bootstrap";

export class oneCard extends React.Component {
    constructor(props : {word: word, refPosition: string, transition: string, _index: number}) {
        super(props);
      this.word = props.word;
      this.position = 0;
      this.transition = props.transition;
      this.refPosition = props.refPosition;
      this.index = props._index;
    }
    index: number;
    word: word;
    card: any;
    position: number;
    transition: string;
    refPosition: string;
    
    public getIndex(): number {
      return this.index;
    }
    public setPosition(position: number){
      this.position = position;
    }
    public setRefPosition(refPosition: string) {
      this.refPosition = refPosition;
    }
    public setTransition(transition: string) {
      this.transition = transition;
    }
       
    getCard() {
  return (
    <Card
      className={"w-70vw mx-auto top-[calc(58px + 5%)] bg-cover left-[calc(" + this.refPosition + " + " + this.index + "px)] transform[-50%] rounded-2xl shadow-lg overflow-y-scroll overflow-x-hidden fixed transition-all"}
      style={{
        backgroundImage:
          "url(https://s2.qwant.com/thumbr/474x323/7/5/15e7a9bcd784af960fb05e85addd943f5f08a5259bb5803b58a1b3f39473cc/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.jytUH6XTOQ7pXAgURy6LYQHaFD%26pid%3DApi&q=0&b=1&p=0&a=0)",
      }}
    >
      <p className="mt-10 ml-15 text-2xl italic serif">{this.word.etymologie}</p>
      <h2 className="text-4xl">
        <p className="font-bold italic serif">{this.word.name}</p>
      </h2>
      <p className="mb-10 text-2xl italic serif">{this.word.definition}</p>
    </Card>
  );
  }
};

export default oneCard;