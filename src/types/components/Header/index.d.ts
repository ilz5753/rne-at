import { IButton } from "../Button";

export interface HeaderProps {
  paddingFromStatusbar?: boolean;
  title: string;
  subtitle?: string;
  leftIcon?: IButton;
  rightIcons?: IButton[];
}
export interface IHeader extends HeaderProps {}
