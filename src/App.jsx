import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alan Trizotte"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus nemo neque, perferendis dolores reiciendis adipisci vel maxime exercitationem nihil!"
          />
          <Post author="João Trizotte" content="Que legal!" />
        </main>
      </div>
    </div>
  );
}

export default App;
