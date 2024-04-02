import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../App.Bar/AppBar';
import { Loader } from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <Toaster />
      </Suspense>
    </>
  );
}
