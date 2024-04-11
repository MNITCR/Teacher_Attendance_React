// import { useEffect, useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';

// import Loader from './common/Loader';
// import PageTitle from './components/PageTitle';
// import SignIn from './pages/Authentication/SignIn';
// import SignUp from './pages/Authentication/SignUp';
// import Calendar from './pages/Calendar';
// import Chart from './pages/Chart';
// import ECommerce from './pages/Dashboard/ECommerce';
// import FormElements from './pages/Form/FormElements';
// import FormLayout from './pages/Form/FormLayout';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Tables from './pages/Tables';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';

// function App() {
//   const [loading, setLoading] = useState<boolean>(true);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <Routes>
//         <Route
//           index
//           element={
//             <>
//               <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <ECommerce />
//             </>
//           }
//         />
//         <Route
//           path="/calendar"
//           element={
//             <>
//               <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <Calendar />
//             </>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <>
//               <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <Profile />
//             </>
//           }
//         />
//         <Route
//           path="/forms/form-elements"
//           element={
//             <>
//               <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <FormElements />
//             </>
//           }
//         />
//         <Route
//           path="/forms/form-layout"
//           element={
//             <>
//               <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <FormLayout />
//             </>
//           }
//         />
//         <Route
//           path="/tables"
//           element={
//             <>
//               <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <Tables />
//             </>
//           }
//         />
//         <Route
//           path="/settings"
//           element={
//             <>
//               <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <Settings />
//             </>
//           }
//         />
//         <Route
//           path="/chart"
//           element={
//             <>
//               <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <Chart />
//             </>
//           }
//         />
//         <Route
//           path="/ui/alerts"
//           element={
//             <>
//               <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <Alerts />
//             </>
//           }
//         />
//         <Route
//           path="/ui/buttons"
//           element={
//             <>
//               <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <Buttons />
//             </>
//           }
//         />
//         <Route
//           path="/auth/signin"
//           element={
//             <>
//               <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <SignIn />
//             </>
//           }
//         />
//         <Route
//           path="/auth/signup"
//           element={
//             <>
//               <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <SignUp />
//             </>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;



import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation, Link } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/Signin';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Teacher';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Assuming you have some authentication logic, you can set authenticated status
  const isAuthenticated = true; // Change this based on your authentication logic

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={isAuthenticated ? <><ECommerce/><PageTitle title='Dashboard'/></> : <Navigate to="/auth/signin" />} />
        <Route path="/auth/signin" element={<><SignIn /><PageTitle title='Signin'/></>} />
        <Route path="/auth/signup" element={<><SignUp /><PageTitle title='Signup'/></>} />
        <Route path="/calendar" element={isAuthenticated ? <><Calendar /> <PageTitle title='Hello'/></>  : <Navigate to="/auth/signin" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/auth/signin" />} />
        <Route path="/forms/form-elements" element={isAuthenticated ? <FormElements /> : <Navigate to="/auth/signin" />} />
        <Route path="/forms/form-layout" element={isAuthenticated ? <FormLayout /> : <Navigate to="/auth/signin" />} />
        <Route path="/teacher" element={isAuthenticated ? <Tables /> : <Navigate to="/auth/signin" />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/auth/signin" />} />
        <Route path="/ui/alerts" element={isAuthenticated ? <Alerts /> : <Navigate to="/auth/signin" />} />
        <Route path="/ui/buttons" element={isAuthenticated ? <Buttons /> : <Navigate to="/auth/signin" />} />
        <Route path="*" element={<><NotFound /><PageTitle title='404'/></>} />
      </Routes>
    </>
  );
}



function NotFound() {
  return (
    <div className="flex w-[100%] h-[100vh] justify-center items-center bg-slate-950">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/* <h1 className="text-[60px] text-center shadow-xl drop-shadow-sm">
          404
        </h1> */}
        <h1 className="text-[70px] text-center">
          <span className="text-white shadow-xl">4</span>
          <span className="text-blue-500 shadow-xl">0</span>
          <span className="text-white shadow-xl">4</span>
        </h1>

        <div className="py-8">
          <h1 className="text-[40px] font-bold tracking-tight text-white">
            Sorry page not found
          </h1>
        </div>
        <div className="text-center ">
          <Link
            to="/auth/signin"
            className="underline text-blue-600 hover:text-blue-500"
          >
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;


