import styled from "styled-components";

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
`;

export const NavBar = styled.div`
	display: flex;
	flex: 0 1 75px;
	justify-content: space-between;
	align-items: center;
	padding-left: 12px;
	padding-right: 12px;
	border-bottom: solid 1px var(--accent-green);
	background-color: #303030;
`;

export const StartContainer = styled.div`
	display: flex;
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const SolidImg = styled.img`
	width: 64px;
	height: 64px;
`;

export const SolidTitle = styled.h1`
	font-size: var(--heading-large);
	font-weight: var(--heading-weight);
	color: var(--text);
	text-decoration: underline;
`;

export const EndContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const DropdownButton = styled.div`
	display: flex;
	width: 70px;
	height: 50px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	background-color: var(--background);
	border-radius: 3px;
	transition: 0.3s;

	&:hover {
		filter: brightness(150%);
	}
`;

export const DropdownButtonImg = styled.img`
	width: 32px;
	height: 32px;
	filter: invert(66%) sepia(4%) saturate(2236%) hue-rotate(345deg)
		brightness(78%) contrast(81%);
`;

export const UserDropdown = styled.div`
	display: flex;
	flex: 0 1 auto;
	align-items: center;
	gap: 12px;
	height: 50px;
	padding: 0px 4px;
	background-color: var(--background);
	border-radius: 3px;
`;

export const UserProfileImg = styled.div`
	width: 42px;
	height: 42px;
	border-radius: 3px;
	background-color: var(--background);
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		filter: brightness(150%);
	}
`;

export const UsernameContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	color: var(--text);
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		color: var(--accent-green);
	}
`;

export const Username = styled.p`
	margin: 0;
	font-weight: var(--body-weight);
	font-size: var(--body-medium);
`;

export const DropdownArrow = styled.img`
	width: 20px;
	height: 20px;
	margin-top: 3px;
	padding-left: 3px;
	transform: rotate(270deg);
	filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(58deg)
		brightness(103%) contrast(106%);
`;
