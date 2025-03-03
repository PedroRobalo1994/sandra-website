// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "sandra": "Sandra",
      "camilo": "Camilo",
      "home_description": "Travel, Food & Lifestyle",
      "contact_me_button": "Contact me",
      "about": "About",
      "about_me_title": "About me",
      "about_me_description_1": `My name is Sandra and I'm a true enthusiast for travel and nature.
      Another great passion I have is cooking and that's why I also
      share some recipe videos on my page.`,
      "about_me_description_2": "My goal is to inspire people to enjoy the best in life:",
      "about_me_description_3": "Travel and good food!",
      "view_my_work_button": "View my work",
      "portfolio": "Portfolio",
      "portfolio_description_1": `As a visual storyteller, I weave captivating narratives through
      the lens of photography, travelogues, and recipes. Whether I'm
      capturing the majestic mountains of the countryside or the
      sun-kissed beaches around the world, my work celebrates the
      vibrant tapestry of life.`,
      "portfolio_description_2": `Let's collaborate I'd love to infuse your project with
      creativity and wanderlust.`,
      "view_more_button": "View more",
      "shop": "Shop",
      "shop_description_1": "Embark on a global adventure and explore the very destinations that have left me spellbound. 🌎✨",
      "shop_description_2": "Dive into my curated collection of travel guides, brimming with insider tips, hidden gems, and practical tricks to transform your journey into an unforgettable odyssey.",
      "shop_description_3": "My guides will ensure you make the most of every moment.",
      "shop_description_4": "Ready to create memories that last a lifetime?",
      "visit_my_shop_button": "Visit my shop",
      "collaborations": "Collaborations",
      "collaboration_1_title": "Santa Maria Bejuco Home",
      "collaboration_1_description_1": `My name is Sandra and I'm a true enthusiast for travel and
      nature. Another great passion I have is cooking and that's why I
      also share some recipe videos on my page.`,
      "collaboration_2_title": "Chão do Rio",
      "view_collaboration_button": "View Collaboration",
      "contact": "Contact",
      "contact_me_title": "Contact me",
      "name_placeholder": "Your name",
      "email_placeholder": "Your email address",
      "message_placeholder": "Your message",
      "send_button": "Send it",
      "email_sent_success_message": "😁 Email Submitted!",
      "email_error_message": "😮 Email Was Not Submitted!"
    }
  },
  pt: {
    translation: {
      "home": "Início",
      "sandra": "Sandra",
      "camilo": "Camilo",
      "home_description": "Viagens, Comida & Lifestyle",
      "contact_me_button": "Contacta-me",
      "about": "Sobre",
      "about_me_title": "Sobre mim",
      "about_me_description_1": "O meu nome é Sandra e sou uma verdadeira entusiasta por viagens e natureza. Outra grande paixão que tenho é a culinária e é por isso que também partilho alguns vídeos de receitas na minha página.",
      "about_me_description_2": "O meu objetivo é inspirar as pessoas a desfrutar do melhor da vida:",
      "about_me_description_3": "Viagens e boa comida!",
      "view_my_work_button": "Ver o meu trabalho",
      "portfolio": "Portfólio",
      "portfolio_description_1": "Como contadora de histórias visuais, teço narrativas cativantes através da fotografia, relatos de viagens e receitas. Quer esteja a capturar as majestosas montanhas do campo ou as praias banhadas pelo sol em todo o mundo, o meu trabalho celebra o vibrante tecido da vida.",
      "portfolio_description_2": "Vamos colaborar Adoraria infundir o teu projeto com criatividade e desejo de viajar.",
      "view_more_button": "Ver mais",
      "shop": "Loja",
      "shop_description_1": "Embarca numa aventura global e explora os mesmos destinos que me deixaram encantada. 🌎✨",
      "shop_description_2": "Mergulha na minha coleção curada de guias de viagem, repleta de dicas de insiders, joias escondidas e truques práticos para transformar a tua viagem numa odisseia inesquecível.",
      "shop_description_3": "Os meus guias garantirão que aproveites ao máximo cada momento.",
      "shop_description_4": "Pronto para criar memórias que duram uma vida inteira?",
      "visit_my_shop_button": "Visita a minha loja",
      "collaborations": "Colaborações",
      "collaboration_1_title": "Santa Maria Bejuco Home",
      "collaboration_1_description_1": "O meu nome é Sandra e sou uma verdadeira entusiasta por viagens e natureza. Outra grande paixão que tenho é a culinária e é por isso que também partilho alguns vídeos de receitas na minha página.",
      "collaboration_2_title": "Chão do Rio",
      "view_collaboration_button": "Ver Colaboração",
      "contact": "Contacto",
      "contact_me_title": "Contacta-me",
      "name_placeholder": "O teu nome",
      "email_placeholder": "O teu endereço de email",
      "message_placeholder": "A tua mensagem",
      "send_button": "Enviar",
      "email_sent_success_message": "😁 Email Enviado!",
      "email_error_message": "😮 O Email Não Foi Enviado!"
    }
  }
  

};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
