import React from 'react';
import { useStyletron } from 'baseui';

const StyleTronUi = () => {
  const [css, theme] = useStyletron();

  return (
    <a
      href="/my-link"
      className={css({ fontSize: '20px', color: theme.colors.primary })}
    >
      a tag
    </a>
  );
};

export default StyleTronUi;
