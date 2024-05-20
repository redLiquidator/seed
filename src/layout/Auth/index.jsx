import { Outlet } from 'react-router-dom';

// project import
import GuestGuard from 'utils/route-guard/GuestGuard';

// ==============================|| LAYOUT - AUTH ||============================== //

const AuthLayout = () => (
  <GuestGuard>
    <Outlet />
  </GuestGuard>
);

export default AuthLayout;
