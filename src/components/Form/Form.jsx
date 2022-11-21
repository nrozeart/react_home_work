import { useState, useRef } from 'react';
import { Button } from '../Form/Button';

export const Form = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const buttonEl = useRef(null);

  return (
    <div className="lesson-two">
      <p>Parent component</p>
      <p>{count}</p>
      <button ref={buttonEl} onClick={() => setCount(count + 1)}>
        +1
      </button>
      <br />
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>
      <p>Child component</p>
      {visible && <Button value={0} />}
    </div>
  );
};
