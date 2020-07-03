import React from 'react';

import TextInput from './textInput';
import CharacterCount from './characterCount';
import AsyncBasic from './asyncBasic';


export default function RecoilExample() {
  return (
    <div>
      <div>Basic Example</div>
      <TextInput />
      <CharacterCount />
      <div>Asynconous </div>
      <AsyncBasic />
    </div>
  )
}
