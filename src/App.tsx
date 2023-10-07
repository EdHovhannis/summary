import cls from 'classnames';
import { Content, SideBar } from './components';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={cls(styles.container)}>
      <SideBar />
      <Content />
    </div>
  );
};
