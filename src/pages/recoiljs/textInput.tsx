import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from 'src/store/atoms';

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const handleTextChange:(e:React.ChangeEvent<HTMLInputElement>) => void = e => setText(e.target.value);

  return (
    <div>
      <input type='text' value={text} onChange={handleTextChange} />
      <br />
      Echo: {text}
    </div>
  )
}

export default TextInput;
