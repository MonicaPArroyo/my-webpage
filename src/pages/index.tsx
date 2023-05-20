import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container, Text} from '@nextui-org/react';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Nav from '@/components/Nav';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['index', 'navbar'])),
	},
});

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	console.log(router);
	const { t } = useTranslation(['index', 'navbar']);

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
			<Nav/>
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
