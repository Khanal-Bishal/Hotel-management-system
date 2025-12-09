import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Toaster richColors />
      <Outlet />
    </>
  );
}
