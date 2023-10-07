import cls from 'classnames';
import styles from './sidebar.module.css';
import mainimg from '../../assets/images/mainimg.jpg';
import location from '../../assets/icons/location.svg';
import home from '../../assets/icons/home.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';
import message from '../../assets/icons/message.svg';
import { credentials } from '../../state/state';
import { v4 as uuidv4 } from 'uuid';

export const SideBar = () => {
  return (
    <div className={cls(styles.sidebar)}>
      <div className={cls(styles.sidebar_main)}>
        <img
          src={mainimg}
          alt="Main"
          className={cls(styles.sidebar_main_img)}
        />
        <div className={cls(styles.sidebar_main_credentials)}>
          <span className={cls(styles.sidebar_main_credentials_name)}>
            {credentials.name}
          </span>
          <span className={cls(styles.sidebar_main_credentials_position)}>
            {credentials.position}
          </span>
        </div>
      </div>
      <div className={cls(styles.sidebar_contacts)}>
        <div className={cls(styles.sidebar_contacts_properties)}>
          <div className={cls(styles.sidebar_contacts_properties_item)}>
            <img src={location} alt="location" />
            <span>{credentials.location}</span>
          </div>
          <div className={cls(styles.sidebar_contacts_properties_item)}>
            <img src={home} alt="home" />
            <span>{credentials.home}</span>
          </div>
          <div className={cls(styles.sidebar_contacts_properties_item)}>
            <img src={phone} alt="phone" />
            <span>{credentials.phone}</span>
          </div>
          <div className={cls(styles.sidebar_contacts_properties_item)}>
            <img src={email} alt="email" />
            <span>{credentials.email}</span>
          </div>
          <div className={cls(styles.sidebar_contacts_properties_item)}>
            <img src={message} alt="message" />
            <span>{credentials.message}</span>
          </div>
        </div>
      </div>
      <div className={cls(styles.sidebar_skills)}>
        <div className={cls(styles.sidebar_skills_header)}>Skills</div>
        <div className={cls(styles.sidebar_skills_tags)}>
          {credentials.skills.map((tag) => (
            <div className={cls(styles.sidebar_skills_tag)} key={uuidv4()}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
