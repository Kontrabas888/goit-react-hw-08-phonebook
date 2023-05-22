import css from './footer.module.css';
import { GoMarkGithub } from 'react-icons/go';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <a
        className={css.link}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Kontrabas888"
      >
        <span>
          <GoMarkGithub /> <span className={css.text}>Oleksandr</span>
          Moroz
        </span>
      </a>
    </div>
  );
};
