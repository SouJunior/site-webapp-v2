import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import { useNavigate } from 'react-router-dom';
import { createHeaderLinks } from '../utils/headerLinks';
import { footerLinks, footerLinks2, footerLinks3 } from '../utils/footerLinks';

function DefaultLayout() {
  const navigate = useNavigate();
  const headerLinks = createHeaderLinks(navigate);

  return (
    <>
      <Header links={headerLinks} />
      <Outlet />
      <Footer links={footerLinks} links2={footerLinks2} links3={footerLinks3} />
    </>
  );
}

export default DefaultLayout;
