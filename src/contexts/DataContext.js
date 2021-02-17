import { createContext, useState } from "react";

export const DataContext = createContext();

function DataProvider(props) {
  const [dataInput, setDataInput] = useState("")

  const handleClick = (value) => {
    console.log("pressed", value)
    if(/\d/.test(value)){
      setDataInput(dataInput + value);
    } else if(value === "clear") {
      setDataInput("");
    } else if(value === "=") {
      console.log("calculating..")
      calculate(dataInput);
    } else {
      setDataInput(dataInput + ` ${value} `)
    }
  };

  const calculate = (calculation) => {
    let calcArray = calculation.split(" ");
    let operatorsArray = calcArray.filter((e) => /\D/.test(e));
    let numbersArray = calcArray.filter((e) => !/\D/.test(e))
    let result = parseInt(numbersArray[0]);
    for (let i = 0; i < numbersArray.length; i++) {
      // eslint-disable-next-line default-case
      switch (operatorsArray[i]) { 
        case "+":
          result += parseInt(numbersArray[i + 1]);
          break;
        case "-":
          result -= numbersArray[i + 1];
          break;
        case "x":
          result *= numbersArray[i + 1];
          break;  
        case "/":
          result /= numbersArray[i + 1];
          break;    
      }
      
    }
    setDataInput(result)
  }

  const values = {
    handleClick,
    dataInput
  }
  
  return (
    <DataContext.Provider value={values}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider;