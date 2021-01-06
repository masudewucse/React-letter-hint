import React, { useState } from "react";
import WordByLetter from "../WordByLetter";
import { ListGroup} from "react-bootstrap";
import './styles.css';


export interface EachItemProps {
  letterList: Array<string>;
}

// const FindWord = (term) =>{
//     const {letters} = WordByLetter;
//     let results = [];
//     for(let k = 0; k<letters.length; k++){
//         if(letters[k].indexOf(term)==0){
//             results.push(letters[k]);
//         }
//     }
//     console.log('results:',results);

// }

const array = { finally: ["a", "b"] };

export const EachItem: React.FC<EachItemProps> = ({ letterList }) => {
  console.log(letterList);

  const { wordList } = WordByLetter;
  const [list, setList] = useState<Array<string>>([]);
  let results = [];
  let items = [];
  for (let i = 0; i < letterList.length; i++) {
    for (let j = 0; j < wordList.length; j++) {
      let letter = letterList[i].toUpperCase();
      if (wordList[j].indexOf(letter) == 0) {
        items.push(`${letter} : ${wordList[j]}`);
      }
    }
    let selectedItem = items[Math.floor(Math.random() * items.length)];
    results.push(selectedItem);
    items = [];
  }

  const listItems = results.map((item) =>  <ListGroup.Item>{item} </ListGroup.Item>);
  return <ListGroup>{listItems}</ListGroup>;
};
