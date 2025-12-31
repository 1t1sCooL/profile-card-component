import styles from "./App.module.css";
import { Footer } from "./Footer.tsx";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.hidden}>Victor Crest</h1>
          <img src={"/images/bg-pattern-card.svg"} alt="" />
          <div className={styles.content}>
            <img src={"/images/image-victor.jpg"} alt="Victor Crest" />
            <h2>
              Victor Crest <span>26</span>
            </h2>
            <p>London</p>
            <div className={styles.cardFooter}>
              <div>
                <p className={styles.num}>80K</p>
                <p>Followers</p>
              </div>
              <div>
                <p className={styles.num}>803K</p>
                <p>Likes</p>
              </div>
              <div>
                <p className={styles.num}>1.4K</p>
                <p>Photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
