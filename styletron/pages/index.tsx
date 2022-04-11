import type { NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import SelectorButton from '../components/styletron/button/selectorButton';
import WithStyle from '../components/styletron/button/withStyle';
import WithTransform from '../components/styletron/button/withTransform';
import WithWrapper from '../components/styletron/button/withWrapper';

const Home: NextPage = () => {
  const [css] = useStyletron();

  return (
    <div className={css({ padding: '10px' })}>
      <SelectorButton />
      withstyle
      <WithStyle />
      <WithTransform />
      <WithWrapper />
    </div>
  );
};

export default Home;
