import React, {useState} from 'react'
import { useDencrypt } from "use-dencrypt-effect";
import feed from './store/feed'
import Thing from './components/Thing'
import './App.css'

const values = ["shop", "commerce", "futures", "culture"];

const Tag = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);

  return <div>{result}</div>;
};


function App() {

  const [count, setCount] = useState(0);
  const thingList = ['xx', 'yy', 'zz']

  const things = thingList.map((symbol) => <Thing key={symbol} symbol={symbol}/>)

  return (
    <div className="App">
      <div className="title">
        <Tag />
        <br />
        <Tag />
        <br />
        <Tag />
        <br />
        <Tag />
      </div>
      <br/>
        {things}
    </div>
  );
}

export default App;
