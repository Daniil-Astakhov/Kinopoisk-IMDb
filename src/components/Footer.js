import styles from "../styles/Home.module.scss";

const Footer = () => {
  const { footer } = styles;
  return (
    <footer className={footer}>
      <div>
        <span>Create by </span>{" "}
        <a
          href="https://github.com/Daniil-Astakhov"
          target="_blanck"
          rel="noopener noreferrer"
        >
          Daniil Astakhov
        </a>
      </div>
    </footer>
  );
};

export default Footer;
