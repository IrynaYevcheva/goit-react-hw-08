import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../App.Bar/AppBar';
import Loader from '../Loader/Loader';

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
