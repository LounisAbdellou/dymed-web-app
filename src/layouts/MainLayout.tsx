// Libraries
import React from "react";
import { useTranslation } from "react-i18next";

// Utilities
import * as styled from "@styles/mainLayoutStyle";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const { t } = useTranslation();

	return (
		<styled.LayoutContainer>
			<styled.NavBar>
				<styled.StartContainer>
					<styled.LogoContainer
						className="logo-hover-shadow"
						onClick={() => {
							if (location.pathname !== "/") {
								navigate("/");
							}
						}}
					>
						<styled.SolidImg src={null} />
						<styled.SolidTitle>D.Y.MED</styled.SolidTitle>
					</styled.LogoContainer>
				</styled.StartContainer>
				<styled.EndContainer>
					<styled.UserDropdown>
						<styled.UserProfileImg src={null} />
						<styled.UsernameContainer>
							<styled.Username>Lounis</styled.Username>
							<styled.DropdownArrow src={null} />
						</styled.UsernameContainer>
					</styled.UserDropdown>
				</styled.EndContainer>
			</styled.NavBar>
			{children}
		</styled.LayoutContainer>
	);
};

export default MainLayout;
