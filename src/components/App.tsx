import { useEffect, useState } from 'react';
import logo from '@assets/react.svg';

const App = function () {
  const [title, setTitle] = useState('Hello');

  // Simplification of https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTitle(`React ${Math.random().toFixed(2)}`);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    document.title = `The title is ${title}`;
  }, [title]);

  return (<main className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-8xl font-bold text-pink-300 uppercase font-mono text-center">{title}</h1>
    <img src={logo} alt="React logo" className="w-24 h-24 m-5 rounded-full" />
  </main>);
};

export default App;
