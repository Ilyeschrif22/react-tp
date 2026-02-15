import { useEffect, useState } from "react";
const ArrayPush = () => {

  const [arr,setArr] = useState([]);
  const numbers = [1,2,3,4,5];


  function displayNumbers()
  {
    numbers.map(number => {
        setArr(arr.push(number))
        console.log(arr)
    })
  }

  useEffect(()=> {
  displayNumbers();
  console.log(arr)
  },[])


  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default ArrayPush;