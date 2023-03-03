import { useState } from "react";
import { BsList, BsSearch } from "react-icons/bs";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #333;
`;

const Button = styled.button`
  font-size: 30px;
  background: transparent;
  border: none;
  outline: none;
`;

const Search = () => {
  const [txt, setTxt] = useState(`a`);
  const inputHandler = (e) => {
    const { value } = e.target;
    if (value.length < 5) {
      alert("더 입력해라");
    }
    setTxt(value);
  };
  return (
    <>
      <Input type="text" onChange={inputHandler} />
      <Button>
        <BsSearch />
      </Button>
    </>
  );
};

export default Search;
