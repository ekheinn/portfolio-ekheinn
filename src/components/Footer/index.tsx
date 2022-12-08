import { Container, Flex, Box } from '@/styles/Global'
import { Text } from '@/styles/Text'
import { Footer as FooterWrapper } from './style'
import { UserImage } from '@/pages/home/style'
import { userData } from '@/utils/userData'
import {
	FaLinkedinIn,
	FaInstagram,
	FaFacebookF,
	FaGithub,
} from 'react-icons/fa'
import { Button } from '@/styles/Buttons'
import { useTranslation } from 'react-i18next'

export const Footer = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<FooterWrapper id="social-media">
			<Container>
				<Flex>
					<UserImage
						src={`https://github.com/${userData.githubUser}.png`}
						alt={userData.nameUser}
						title={userData.nameUser}
						width={'70px'}
						height={'70px'}
					/>
					<Box css={{ marginLeft: '$2' }}>
						<Text type="heading4" color="grey5" css={{ marginBottom: '$2' }}>
							{t('thanks')}
						</Text>
						<Text type="body1" color="grey2">
							{t('follow')}
						</Text>
					</Box>
				</Flex>
				<Flex
					css={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						gap: '$2',
					}}
				>
					<Button
						className="github"
						type="circle"
						as="a"
						target="_blank"
						href={`https://github.com/${userData.githubUser}`}
					>
						<FaGithub />
					</Button>
					<Button
						className="linkedin"
						type="circle"
						as="a"
						target="_blank"
						href={`https://linkedin.com/in/${userData.linkedinUser}`}
					>
						<FaLinkedinIn />
					</Button>
				</Flex>
			</Container>
		</FooterWrapper>
	)
}
