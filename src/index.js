import template from './index.hbs';
import scss from './index.scss';
import juice from 'juice';

import bgImg from '../images/bg.png';
import danaflexLogo from '../images/danaflex.png';
import li1 from '../images/li/1.png';
import li2 from '../images/li/2.png';
import li3 from '../images/li/3.png';
import li4 from '../images/li/4.png';
import li5 from '../images/li/5.png';

const neededVar = {bgImg, danaflexLogo, li1, li2, li3, li4, li5};

const data = {
    styleString: scss.toString(),
    name: 'World',
    images: {
        danaflexLogo: `https://timur00kh.github.io/danaflex-mail-1/images/danaflex.png`,
        bg: `https://timur00kh.github.io/danaflex-mail-1/images/bg.png`,
        li: {
            li1: `https://timur00kh.github.io/danaflex-mail-1/images/li/1.png`,
            li2: `https://timur00kh.github.io/danaflex-mail-1/images/li/2.png`,
            li3: `https://timur00kh.github.io/danaflex-mail-1/images/li/3.png`,
            li4: `https://timur00kh.github.io/danaflex-mail-1/images/li/4.png`,
            li5: `https://timur00kh.github.io/danaflex-mail-1/images/li/5.png`
        }
    },
    links: {
        signup: 'https://timurkh.ru'
    },
    neededVar
}

const hbsResult = template(data)
const cssInlined = juice(hbsResult)

document.documentElement.innerHTML = cssInlined
