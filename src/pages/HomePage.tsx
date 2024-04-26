// Libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import MainLayout from '@layouts/MainLayout.tsx';

// Utilities
import * as styled from '@styles/homePageStyle.ts';

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<styled.MainContainer>HomePage</styled.MainContainer>
		</MainLayout>
	);
};

export default HomePage;
