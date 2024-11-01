import logo from "../../assets/images/logo.png";
import keyIcon from "../../assets/images/key.png";
import lockIcon from "../../assets/images/lock.png";
import {Container, Icon, IconWrapperBottomRight, IconWrapperTopLeft, Logo} from "@/components/LogoWithIcons/styles.ts";

export const LogoWithIcons: React.FC = () => {
    return (
        <Container>
            <Logo src={logo} alt="logo" />
            <IconWrapperTopLeft>
                <Icon src={keyIcon} alt="key" />
            </IconWrapperTopLeft>
            <IconWrapperBottomRight>
                <Icon src={lockIcon} alt="lock" />
            </IconWrapperBottomRight>
        </Container>
    );
};