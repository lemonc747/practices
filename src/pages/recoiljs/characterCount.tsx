import React from 'react';
import { useRecoilValue, selector } from 'recoil';
import { textState } from 'src/store/atoms';

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text ? text.length : 0;
  }
});

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return (
    <div>
      count: {count}
    </div>
  )
}