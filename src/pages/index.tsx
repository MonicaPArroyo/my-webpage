import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button, Container, Text } from '@nextui-org/react';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
			<Container>
				<Text>{t('comming-soon')}...</Text>
				<Link href="/" locale={lang}>
					Cambiar idioma
				</Link>
			</Container>
		</>
	);
};

export default Home;
