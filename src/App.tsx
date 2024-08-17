import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './components/main-page/main-page';
import Header from './components/header/header';
import { PATH } from './const';
import UncontrolledForm from './components/uncontrolled-form/uncontrolled-form';
import ReactHookForm from './components/react-hook-form/react-hook-form';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route
          path={PATH.uncontrolledForm}
          element={
            <main>
              <UncontrolledForm />
            </main>
          }
        />
        <Route
          path={PATH.reactHookForm}
          element={
            <main>
              <ReactHookForm />
            </main>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
