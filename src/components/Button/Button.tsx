import "./index.module.scss";
import { props as AppProps } from "./types";

const Button = ({ text, onClick }: AppProps) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
