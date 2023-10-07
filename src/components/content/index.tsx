import cls from 'classnames';
import styles from './content.module.css';

export const Content = () => {
  return (
    <div className={cls(styles.content)}>
      <div className={cls(styles.content_experiences, styles.work_experiences)}>
        <div className={cls(styles.work_experiences_header)}>
          <i className={'fa-solid fa-suitcase'}></i>
          <span className={cls(styles.work_experiences_header_text)}>
            Work Experience
          </span>
        </div>
        <div className={cls(styles.content_experiences_jobs)}>
          <div className={cls(styles.content_experiences_jobs_info)}>
            <h4 className={cls(styles.content_experiences_jobs_info_header)}>
              Front End developer / SberTech
            </h4>
            <div>
              <i
                className={cls(
                  'fa-solid fa-calendar-days',
                  styles.content_experiences_jobs_info_icon
                )}
              ></i>
              <span
                className={cls(styles.content_experiences_jobs_info_datefrom)}
              >
                &nbsp;Jan 2015&nbsp;&#8212;&nbsp;
              </span>
              <span
                className={cls(styles.content_experiences_jobs_info_current)}
              >
                &nbsp;CURRENT&nbsp;
              </span>
              <p className={cls(styles.content_experiences_jobs_info_text)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                repellendus iste accusantium molestias et ut quibusdam rem
                temporibus quasi exercitationem, nam deserunt officia debitis.
                Obcaecati id alias blanditiis nobis accusamus.
              </p>
            </div>
          </div>
          <div className={cls(styles.content_experiences_jobs_info)}>
            <h4 className={cls(styles.content_experiences_jobs_info_header)}>
              Front End developer / SberTech
            </h4>
            <div>
              <i
                className={cls(
                  'fa-solid fa-calendar-days',
                  styles.content_experiences_jobs_info_icon
                )}
              ></i>
              <span
                className={cls(styles.content_experiences_jobs_info_datefrom)}
              >
                &nbsp;Jan 2015&nbsp;&#8212;&nbsp;
              </span>
              <span
                className={cls(styles.content_experiences_jobs_info_current)}
              >
                &nbsp;CURRENT&nbsp;
              </span>
              <p className={cls(styles.content_experiences_jobs_info_text)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                repellendus iste accusantium molestias et ut quibusdam rem
                temporibus quasi exercitationem, nam deserunt officia debitis.
                Obcaecati id alias blanditiis nobis accusamus.
              </p>
            </div>
          </div>
          {/* <div>job-2</div>
          <div>job-3</div> */}
        </div>
      </div>
      <div
        className={cls(
          styles.content_experiences,
          styles.education_experiences
        )}
      >
        Hello
      </div>
      <div
        className={cls(styles.content_experiences, styles.other_experiences)}
      >
        Hello
      </div>
    </div>
  );
};
