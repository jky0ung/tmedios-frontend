import * as styles from "./styles.css";
interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <section className={styles.contentContainer}>{children}</section>;
};

export default Content;
