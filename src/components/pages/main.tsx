import { Dispatch, FC, SetStateAction } from 'react';

export interface MainProps {
  setView: Dispatch<SetStateAction<any>>;
}

const Main: FC<MainProps> = ({ setView }) => {
  return (
    <div>
      Main{' '}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setView('login');
        }}
      >
        Login
      </a>
    </div>
  );
};

export default Main;
