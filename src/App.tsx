// Libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from '@pages/HomePage.tsx';

const App = () => {
	const { t } = useTranslation();
	const [count, setCount] = useState(0);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
}

export default App;
