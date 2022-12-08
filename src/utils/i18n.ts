import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	debug: true,
	fallbackLng: 'pt',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: {
				home: 'Home',
				projects: 'Projects',
				contact: 'Contact',
				social: 'Social Media',
				hello: "Hello, my name's ",
				heading1: 'I ',
				heading2: 'love ',
				heading3: 'creating and ',
				heading4: 'developing ',
				heading5: 'projects',
				discover:
					'Discover here in this environment, created especially for you, all my projects and technologies',
				see_projects: 'See Projects',
				source_code: 'See my portfolio source code',
				my_projects: 'My projects',
				side_projects1: 'Some of my ',
				side_projects2: 'side projects',
				primary_lng: 'Primary Language:',
				not_identified: 'Primary language not identified',
				code: 'Github Code',
				demo: 'See demo',
				contacts1: "Let's talk and ",
				contacts2: 'develop solutions for your company',
				contacts3: ', together!',
				whatsapp1:
					"I'm available for a chat, let's talk about working together?",
				whatsapp2: 'Message me now',
				email1: 'Send me an email reporting feedbacks, suggestions and ideas;',
				email2: 'Send me an email',
				linkedin1:
					'We can create more constant interactions as well as a sharing network',
				linkedin2: ' Go to Linkedin now',
				thanks: 'Thank you!',
				follow: "Follow me on my social networks and let's talk",
			},
		},
		pt: {
			translation: {
				home: 'Home',
				projects: 'Projetos',
				contact: 'Contato',
				social: 'Mídia Social',
				hello: 'Olá, meu nome é ',
				heading1: 'Eu ',
				heading2: 'amo ',
				heading3: 'criar e ',
				heading4: 'desenvolver ',
				heading5: 'projetos',
				discover:
					'Conheça aqui neste ambiente, criado especialmente para você, todos meus projetos e tecnologias',
				see_projects: 'Ver Projetos',
				source_code: 'Veja o código fonte do meu portfólio',
				my_projects: 'Meus projetos',
				side_projects1: 'Alguns dos meus ',
				side_projects2: 'projetos paralelos',
				primary_lng: 'Linguagem principal:',
				not_identified: 'Linguagem principal não identificada',
				code: 'Código no Github',
				demo: 'Ver demonstração',
				contacts1: 'Vamos conversar ',
				contacts2: 'e desenvolver soluções para sua empresa',
				contacts3: ', juntos!',
				whatsapp1:
					'Estou à disposição para uma conversa, vamos conversar sobre trabalharmos juntos?',
				whatsapp2: 'Mande uma mensagem agora',
				email1: 'Envie-me um e-mail relatando feedbacks, sugestões e ideias;',
				email2: 'Envie-me um e-mail',
				linkedin1:
					'Podemos criar interações mais constantes também como em uma rede de compartilhamento',
				linkedin2: 'Acesse o Linkedin agora',
				thanks: 'Obrigado!',
				follow: 'Me siga nas minhas redes sociais e vamos conversar',
			},
		},
	},
})

export default i18n
