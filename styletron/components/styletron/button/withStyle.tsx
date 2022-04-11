import React from 'react';
import { styled, withStyle } from 'styletron-react';

const Foo = styled('div');

const WithStyle = () => {
  // Props-driven styles
  const Bar = withStyle(Foo, (props: { $green: boolean }) => ({
    ':hover': { background: props.$green ? 'green' : 'white' },
  }));

  return (
    <div>
      <Bar $green={true} />
    </div>
  );
};

export default WithStyle;
