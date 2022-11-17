import { SiPostgresql, SiTypescript } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { FaDocker, FaHtml5, FaCss3Alt, FaNode, FaReact } from 'react-icons/fa'

import { DiGit, DiVisualstudio, DiTrello, DiJsBadge } from 'react-icons/di'

export const stackData = [
	{
		title: 'HTML',
		img: FaHtml5,
	},
	{
		title: 'CSS',
		img: FaCss3Alt,
	},
	{
		title: 'JavaScript',
		img: DiJsBadge,
	},
	{ title: 'TypeScript', img: SiTypescript },
	{
		title: 'Node JS',
		img: FaNode,
	},
	{
		title: 'React',
		img: FaReact,
	},
	{ title: 'Docker', img: FaDocker },
	{ title: 'PostgreSQL', img: SiPostgresql },
	{ title: 'Git', img: DiGit },
	{ title: 'Python', img: FaPython },
	{ title: 'Visual Studio Code', img: DiVisualstudio },
	{ title: 'Trello', img: DiTrello },
]
