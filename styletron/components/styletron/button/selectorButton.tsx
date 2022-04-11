import React from 'react';
import { styled } from 'styletron-react';

const SelectorButton = () => {
  const ButtonGroup = ({
    children,
  }: {
    children: JSX.Element[] | JSX.Element;
  }) => {
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, { groupIndex: index }),
    );
  };

  const Button = ({
    groupIndex,
    children,
  }: {
    groupIndex?: number;
    children: JSX.Element[] | JSX.Element | string;
  }) => {
    const Btn = styled('button', (props: { $isGrouped: boolean }) => ({
      margin: props.$isGrouped ? '0px' : '0 2em 0 0',
    }));
    return (
      <Btn $isGrouped={typeof groupIndex !== 'undefined'}>
        {children} {groupIndex}
      </Btn>
    );
  };

  return (
    <>
      <p>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </p>
      <p>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </p>
    </>
  );
};

export default SelectorButton;
