import template from './index.hbs'
import scss from './index.scss'
import juice from 'juice'
import bgImg from '../images/bg.png'

const data = {
  styleString: scss.toString(),
  name: 'World',
  images: {
    bg: bgImg
  },
  links: {
    signup: 'https://timurkh.ru'
  }
}

const hbsResult = template(data)
const cssInlined = juice(hbsResult)

document.documentElement.innerHTML = cssInlined
