import WooviLogo from '../assets/woovi.svg';
import { GppGoodOutlined } from '@mui/icons-material';
import './style.css';

interface FooterProps {

}

export default function Footer({ }: FooterProps) {
  return (
    <footer>
      <GppGoodOutlined /> Pagamento 100% seguro via&nbsp;<img src={WooviLogo} alt="Woovi" />
    </footer>
  );
}
