import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';
import { exampleStyle } from './Main.css';

function Main() {
  return (
    <div className={exampleStyle}>
      <Anchor component={Link} to="/login">
        로그인
      </Anchor>
      <h1>메인 페이지</h1>
    </div>
  );
}

export default Main;
