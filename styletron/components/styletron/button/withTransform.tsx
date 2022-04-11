import React from 'react';
import { styled, useStyletron, withTransform } from 'styletron-react';

// const Foo = styled('div');
const Foo = styled('div', { color: 'red' });
const Bar = withTransform(
  Foo,
  (
    style,
    props: {
      $inline: boolean;
    },
  ) => {
    console.log(style);
    console.log(style);
    console.log(style.display);

    let display =
      style.display === 'none'
        ? 'none'
        : props.$inline === true
        ? 'inline-flex'
        : 'flex';

    return { ...style, display };
  },
);

const WithTransform = () => {
  const [css] = useStyletron();

  return (
    <div>
      <Bar
        className={css({ width: '300px', height: '400px' })}
        style={{ margin: '2px' }}
      >
        aa
      </Bar>
      WithTransform WithTransform WithTransform WithTransform
      {() => 'alala'}
    </div>
  );
};

export default WithTransform;
