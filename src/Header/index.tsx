import WooviLogo from '../assets/woovi.svg';
import './style.css';

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {
  return (
    <header>
      <img src={WooviLogo} alt="Woovi" />
    </header>
  );
}
