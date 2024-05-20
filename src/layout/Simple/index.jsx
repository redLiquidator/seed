import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project import
import Loader from 'components/Loader';
import { SimpleLayoutType } from 'config';

const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

// ==============================|| LAYOUT - SIMPLE / LANDING ||============================== //

const SimpleLayout = ({ layout = SimpleLayoutType.SIMPLE }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Outlet />
      <FooterBlock isFull={layout === SimpleLayoutType.LANDING} />
    </Suspense>
  );
};

SimpleLayout.propTypes = {
  layout: PropTypes.string
};

export default SimpleLayout;
