import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button, Container, Navbar, Text, Link } from '@nextui-org/react';
import logo from 'public/logo.png';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';
import ThemeSwitch from '@/components/ThemeSwitch';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['index'])),
	},
});

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	const { t } = useTranslation(['index']);

	const lang = router.locale === 'en' ? 'es' : 'en';
	return (
		<>
			<Head>
				<title>{t('title')}</title>
				<meta name="description" content="TODO" />
				<meta
					name="keywords"
					content="Portfolio, Web Developer, React, PHP, Arduino, Nextjs"
				/>
				<meta name="author" content="Mónica P. Arroyo" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar variant="sticky">
				<Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
				<Navbar.Brand
					css={{
						'@xs': {
							w: '12%',
						},
					}}
				>
					<Image src={logo} alt="logo" width="64" height="64" />
					<Text b color="inherit" hideIn="xs">
						Mónica P. Arroyo
					</Text>
				</Navbar.Brand>
				<Navbar.Content
					enableCursorHighlight
					activeColor="secondary"
					variant="highlight"
					hideIn="xs"
				>
					<Navbar.Link href="#">About</Navbar.Link>
					<Navbar.Link isActive href="#">
						Skills
					</Navbar.Link>
					<Navbar.Link href="#">Contact</Navbar.Link>
				</Navbar.Content>
				<Navbar.Content>
					<Navbar.Item>
						<ThemeSwitch/>
					</Navbar.Item>
				</Navbar.Content>
				<Navbar.Collapse>
					<Navbar.CollapseItem>
						<Link color="inherit" href="#">
							About
						</Link>
					</Navbar.CollapseItem>
					<Navbar.CollapseItem>
						<Link color="inherit" href="#">
							Skills
						</Link>
					</Navbar.CollapseItem>
					<Navbar.CollapseItem>
						<Link color="inherit" href="#">
							Contact
						</Link>
					</Navbar.CollapseItem>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Text>{t('comming-soon')}...</Text>
				<NextLink href="/" locale={lang}>
					Cambiar idioma
				</NextLink>
			</Container>
		</>
	);
};

export default Home;
