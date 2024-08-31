import './App.css';
import { useState } from 'react';
import axios from 'axios';

type pageContentType = {
  title: string,
  disabled: boolean,
  getIncrementData: any;
};


const getComments = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
    return res.data;
  })
    .catch(error => {
      console.log(error);
    });
}

getComments();
const MyButton = (props: pageContentType) => {
  const [increment, setIncrement] = useState<any>(0);
  const [inputVal, setInputVal] = useState<any>();
  const getIncrement = () => {
    setIncrement(increment + 1);
    const childDataVal = {
      increment: increment,
      value: inputVal
    }
    props.getIncrementData(childDataVal);
  }

  const getInputVal = (e: any) => {
    setInputVal(e.target.value);
  }

  const title = props.title;
  const disableFlag = props.disabled;
  return (
    <div>
      <input name='name' onChange={getInputVal}></input>
      <button disabled={disableFlag} onClick={getIncrement}>{title}</button>
    </div>
  )
}


const App = () => {
  const [childComponentData, setChildComponentData] = useState<any>();
  const handleChildComponentData = (incrementData: any) => {
    setChildComponentData(incrementData);
  }
  const inputElement = document.querySelector("#btn");
  console.log(inputElement);
  inputElement?.addEventListener("click", callBtn)
  function callBtn() {
    console.log(
      "button is clicked"
    );
  }
  return (
    <>
      <button id='btn' type='button'>Hello</button>
      <MyButton title="Click Here" disabled={false} getIncrementData={handleChildComponentData}></MyButton>
      {childComponentData?.increment}
      {childComponentData?.value}
      {/* <button onClick={getIncrement}>Click Here {increment}</button> */}
    </>
  );
}

export default App;
