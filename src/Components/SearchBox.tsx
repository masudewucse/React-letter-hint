import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { EachItem } from "./EachItem";

export const SearchBox = () => {

    const [word, setWord] = useState<string>('');
    const [letterList, setLetterList] = useState<Array<string>>([])


    const spreadTheWord = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setWord(event.target.value);
    }

    useEffect(() => {
       const split = word.split('');
       if(split.length){
          const list = split.map(item => item)
          setLetterList(list);
       }
       
    }, [word])

  return (
    <>
    <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-8">
            <InputGroup className="mb-3">
              <FormControl
              onChange={spreadTheWord}
                placeholder="Type the word"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Find</Button>
              </InputGroup.Append>
            </InputGroup>
                <EachItem letterList = {letterList}/>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
