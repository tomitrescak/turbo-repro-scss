/** Add your relevant code here for the issue to reproduce */
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={`${styles.blue} green`}>
      Hello
      <div className="red">World</div>
    </div>
  );
}
