import { useState } from "react";
import { useEffect } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
function App() {
  const [images, setImages] = useState(null);

  function fetchMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const Memed = data.data.memes;
        const randomNum = Math.floor(Math.random() * Memed.length);
        const randomMeme = Memed[randomNum].url;
        setImages(randomMeme);
      });
  }

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="flex  flex-col items-center justify-center gap-4 min-h-screen ">
      <Header />
      <Form handleClick={fetchMeme} image={images} />
    </div>
  );
}

export default App;
