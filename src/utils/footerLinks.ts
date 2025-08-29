import {
  LinkFooterEnum,
  LinkFooterEnum2,
  LinkFooterEnum3,
} from './enums/LinkFooterEnum';
import Telegram from '../assets/social/Telegram.png';
import Twitch from '../assets/social/Twitch.png';
import Discord from '../assets/social/discord.png';
import Facebook from '../assets/social/facebook.png';
import Instagram from '../assets/social/instagram.png';
import Linkedin from '../assets/social/linkedin.png';
import Twitter from '../assets/social/twitter.png';
import Youtube from '../assets/social/youtube.png';
import Github from '../assets/social/github.png';

const footerLinks = [
  {
    label: 'Conheça a SouJunior',
    to: LinkFooterEnum.MEET_SOUJUNIOR.toString(),
  },
  {
    label: 'Sobre Nós',
    to: LinkFooterEnum.ABOUT_US.toString(),
  },
  {
    label: 'Missão, Valores e Visão',
    to: LinkFooterEnum.MISSION_VALUES_VISION.toString(),
  },
  {
    label: 'Nossas Iniciativas',
    to: LinkFooterEnum.INITIATIVES.toString(),
  },
];

const footerLinks2 = [
  {
    label: 'Fale Conosco',
    to: LinkFooterEnum2.CONTACT_US.toString(),
  },
  {
    label: 'FAQ',
    to: LinkFooterEnum2.FAQ.toString(),
  },
  {
    label: 'Ouvidoria',
    to: LinkFooterEnum2.OMBUDSMAN.toString(),
  },
];

const footerLinks3 = [
  {
    label: 'Faça Parte',
    to: LinkFooterEnum3.TAKE_PART.toString(),
  },
];

const socialLinks = [
  { icon: Linkedin, to: 'https://linkedin.com' },
  { icon: Github, to: 'https://github.com' },
  { icon: Discord, to: 'https://discord.com' },
  { icon: Youtube, to: 'https://youtube.com' },
  { icon: Twitter, to: 'https://twitter.com' },
  { icon: Instagram, to: 'https://instagram.com' },
  { icon: Facebook, to: 'https://facebook.com' },
  { icon: Telegram, to: 'https://telegram.org' },
  { icon: Twitch, to: 'https://twitch.tv' },
];

const copyright = '© 2025 SouJunior. Todos os direitos reservados.';

export { footerLinks, footerLinks2, footerLinks3, socialLinks, copyright };
