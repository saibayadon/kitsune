import { useEffect, useState } from 'react';
import styles from '../css/app.module.css';

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

  return <h1 className={styles.module}>{title}</h1>;
};

export default App;
