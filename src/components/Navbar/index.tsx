import { useState } from 'react'
import useMedia from 'use-media'
import { userData } from '@/utils/userData'

import {
	Navbar as NavbarWrapper,
	LogoTipo,
	LogoTipoText,
	NavbarLinks,
	NavbarMobileArea,
} from './style'

import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Button } from '@/styles/Buttons'
import { Container, Flex } from '@/styles/Global'
import { useTranslation } from 'react-i18next'

export interface MenuButtonOpen {
	open: Boolean
	setOpen: (value: Boolean) => void
}

export const Translation = (): JSX.Element => {
	const { i18n } = useTranslation()
	const lngs = [
		{ code: 'pt', native: 'PT' },
		{ code: 'en', native: 'EN' },
	]

	return (
		<>
			{lngs.map((lng) => {
				return (
					<Button
						type="icon"
						color="grey4"
						onClick={() => i18n.changeLanguage(lng.code)}
					>
						{lng.native}
					</Button>
				)
			})}
		</>
	)
}

export const NavBar = (): JSX.Element => {
	const isWide = useMedia({ maxWidth: '991px' })

	document.title = userData.nameUser

	const [open, setOpen] = useState(false)

	const OpenMenu = () => {
		setOpen(!open)
	}

	return (
		<NavbarWrapper>
			<Container>
				<NavbarMobileArea>
					<LogoTipo>
						<LogoTipoText>{userData.nameUser}</LogoTipoText>
					</LogoTipo>
					{isWide && (
						<Button
							type="icon"
							onClick={OpenMenu}
							aria-label={!open ? 'Abrir Menu' : 'Fechar Menu'}
						>
							{!open ? <FaBars /> : <IoClose />}
						</Button>
					)}
				</NavbarMobileArea>
				<Flex>{isWide ? open && <NavLinks /> : <NavLinks />}</Flex>
			</Container>
		</NavbarWrapper>
	)
}

export const NavLinks = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<NavbarLinks>
			<Button type="btLink" as="a" color="grey4" href={`#home`}>
				{t('home')}
			</Button>
			<Button type="btLink" as="a" color="grey4" href={`#projects`}>
				{t('projects')}
			</Button>
			<Button type="btLink" as="a" color="grey4" href={`#contact`}>
				{t('contact')}
			</Button>
			<Button type="btLink" as="a" color="grey4" href={`#social-media`}>
				{t('social')}
			</Button>

			<Translation />
		</NavbarLinks>
	)
}
