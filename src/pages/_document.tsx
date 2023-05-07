import React from 'react';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { CssBaseline } from '@nextui-org/react';

import i18nextConfig from '../../next-i18next.config.js';

class myDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}
	render(): JSX.Element {
		const currentLocale =
			this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
		return (
			<Html lang="en">
				<Head>{CssBaseline.flush()}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default myDocument;
