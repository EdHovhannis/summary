import cls from 'classnames';
import styles from './content.module.css';
import { experiences } from '../../state/state';

export const Content = () => {
  const getJobStatus = (status: boolean) => {
    if (status) {
      return 'CURRENT';
    }
    return '';
  };
  return (
    <div className={cls(styles.content)}>
      {experiences.map((experience, i) => (
        <div
          key={experience.id}
          className={cls(styles.content_experiences_wrapper)}
        >
          <div
            className={cls(
              styles.content_experiences,
              styles[`${experience.grid}_experiences`]
            )}
          >
            <div className={cls(styles.work_experiences_header)}>
              <i className={experience.icon}></i>
              <span className={cls(styles.work_experiences_header_text)}>
                {experience.title}
              </span>
            </div>
            <div className={cls(styles.content_experiences_jobs)}>
              {(
                experience.work ||
                experience.education ||
                experience.other
              ).map((work) => (
                <div
                  key={work.id}
                  className={cls(styles.content_experiences_jobs_info)}
                >
                  <h4
                    className={cls(styles.content_experiences_jobs_info_header)}
                  >
                    {work.position}
                  </h4>
                  <div>
                    <i
                      className={cls(
                        work.calendarIcon,
                        styles.content_experiences_jobs_info_icon
                      )}
                    ></i>
                    <span
                      className={cls(
                        styles.content_experiences_jobs_info_datefrom
                      )}
                    >
                      {work.startedAt}&nbsp;&#8212;&nbsp;
                    </span>
                    <span
                      className={cls(
                        styles.content_experiences_jobs_info_current
                      )}
                    >
                      {getJobStatus(work.currentJob)}
                    </span>
                    <pre
                      className={cls(styles.content_experiences_jobs_info_text)}
                    >
                      {work.description}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gradient">test</div>
        </div>
      ))}
    </div>
  );
};
