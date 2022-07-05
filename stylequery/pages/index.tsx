import type {NextPage} from 'next';
import {useStyletron} from 'styletron-react';
import SelectorButton from '../components/styletron/button/selectorButton';
import WithStyle from '../components/styletron/button/withStyle';
import WithTransform from '../components/styletron/button/withTransform';
import WithWrapper from '../components/styletron/button/withWrapper';

const Home: NextPage = () => {
    const [css] = useStyletron();

    foo();

    return (
        <div className={css({padding: '10px'})}>
            <SelectorButton/>
            withstyle
            <WithStyle/>
            <WithTransform/>
            <WithWrapper/>
        </div>
    );
};

export default Home;

function foo() {
    const b1 = {
        name: 'hello',
        age: 10,
        address: {
            city: 'Seoul',
            region: 'Asia',
        },
    };

    const b2 = {
        name: 'hi',
        age: 13,
        address: {
            city: 'Japan',
            region: 'Asia',
            'post-code': 12232,
        },
    };

}
