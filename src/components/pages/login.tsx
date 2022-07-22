import { Dispatch, FC, SetStateAction } from 'react';

export interface LoginProps {
  setView: Dispatch<SetStateAction<any>>;
}

const Login: FC<LoginProps> = ({ setView }) => {
  return <div>Login</div>;
};

export default Login;
