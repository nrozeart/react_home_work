import { useEffect, useState, memo } from 'react';

export const Button = memo(
  ({ value }) => {
    const [count, setCount] = useState(0);
    console.log('value', value);

    useEffect(() => {}, []);
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps !== nextProps.value) {
      return true;
    }
    return false;
  }
);
