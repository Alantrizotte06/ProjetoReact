import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Alan Trizotte"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus nemo neque, perferendis dolores reiciendis adipisci vel maxime exercitationem nihil!"
      />
      <Post author="João Trizotte" content="Que legal!" />
    </div>
  );
}

export default App;
