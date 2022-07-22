import { Dispatch, FC, SetStateAction } from 'react';
import NavHeader from '../layouts/header';

export interface MainProps {
  setView: Dispatch<SetStateAction<any>>;
}

const Main: FC<MainProps> = ({ setView }) => {
  return (
    <div className="w-full main-content flex justify-center items-center flex-col p-6">
      <NavHeader
        onBack={() => {
          setView('login');
        }}
      />
      <main>Main</main>
    </div>
  );
};

export default Main;
