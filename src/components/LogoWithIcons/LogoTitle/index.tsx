import { Title } from './styles';

interface LogoTitleProps {
  color: string;
}

export const LogoTitle = ({ color }: LogoTitleProps): JSX.Element => (
  <Title color={color}>DREAMTEAM</Title>
);
