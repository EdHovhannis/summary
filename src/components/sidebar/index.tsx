import cls from "classnames";
import styles from "./sidebar.module.css";
import MainImg from "../../assets/images/MainImg.jpg";

export const SideBar = () => {
  return (
    <div className={cls(styles.sidebar)}>
      <div className={cls(styles.sidebar_mainimg)}>
        <img
          src={MainImg}
          alt="Main"
          className={cls(styles.sidebar_mainimg_img)}
        />
        <div className={cls(styles.sidebar_mainimg_credentials)}>
          <span className={cls(styles.sidebar_mainimg_credentials_name)}>
            Edgar Hovhannisyan
          </span>
          <span className={cls(styles.sidebar_mainimg_credentials_position)}>
            Full stack developer
          </span>
        </div>
      </div>
    </div>
  );
};
