// Libraries
import React from "react";
import { useTranslation } from "react-i18next";

// Utilities
import * as style from "@styles/mainLayoutStyle";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const { t } = useTranslation();

	return (
		<style.LayoutContainer>
			{children}
		</style.LayoutContainer>
	);
};

export default MainLayout;
