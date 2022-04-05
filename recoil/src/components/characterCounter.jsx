import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCounterState } from '../store/text';

const CharacterCounter = () => {
  const count = useRecoilValue(charCounterState);

  return <div>Character count: {count}</div>;
};

export default CharacterCounter;
