import React from 'react';
import DayJS from 'react-dayjs';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0;
  padding: 10px 15px 5px;
  display; flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0  0 10px #aaaaaa;
  @media (min-width: 768px){
    width: 680px;
    padding: 15px 20px 10px;
}
`;
const UpperRow = styled.p`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px){
    width: 600px;
}
`;
const Label = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin: 0;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  overflow-wrap: break-word;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (min-width: 768px){
    width: 600px;
    padding-left: 60px;
    font-size: 26px;
}
`;
const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`
const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #eee;
  @media (min-width: 768px){
    width: 40px;
    height: 40px;
}
`;
const CheckmarkChecked = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #2f5d62;
  @media (min-width: 768px){
    width: 40px;
    height: 40px;
}
`;
const SpanDay = styled.span`
  font-size: 11px;
  @media (min-width: 768px){
    font-size: 16px;
}
`;
const CreatedAt = styled.p`
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 11px;
  text-align: right;
  @media (min-width: 768px){
    font-size: 16px;
}
`;
const Wastebin = styled.img`
  width: 20px;
  @media (min-width: 768px){
    width: 30px;
}
`;
const Button = styled.button`
  position: relative;
  width: 33px;
  height: 33px;
  background-color: white;
  border: none;
  border-radius: 50%;
  text-decoration: none;
  &:hover { background-color: #6c9fa3;
  cursor: pointer};
  &:active { background-color: #ffb037;};
  @media (min-width: 768px){
    width: 45px;
    height: 45px;
}
`;
const Tick = styled.img`
  width: 20px;
  position: absolute;
  top: 3px;
  left: 3px;
  @media (min-width: 768px){
    width: 30px;
    top: 5px;
    left: 5px;
}
`;

const TaskCard = (props) => {
  const {id, title,  isComplete, createdAt, onChangeAction, onClickAction} = props;

  return (
    <Container>
      <UpperRow>
        <Label>{title}
          <Input 
          type="checkbox"
          id={id}
          checked={isComplete}
          onChange={onChangeAction}
          />
          {isComplete ? <CheckmarkChecked></CheckmarkChecked> : <Checkmark></Checkmark>}
          {isComplete && 
          <Tick src="./assets/tick-sign.svg" alt="tick"/>}
        </Label>
        <Button onClick={onClickAction}>
          <Wastebin src="./assets/wastebin.svg"/>
        </Button>
      </UpperRow>
    <CreatedAt>
      <SpanDay>Added </SpanDay>
      <DayJS element="span" format="YYYY-MM-DD H:mm">{createdAt}</DayJS>
    </CreatedAt>
    </Container>
  )
};
export default TaskCard;