import { useState } from "react";
import { useEffect } from "react";
export default function Form(props) {
  const [meme, setMeme] = useState({
    TopText: "One Doesn't Simply",
    bottomText: "Walk into the Mordor",
    imgUrl: "props.image",
  });

  useEffect(() => {
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: props.image,
    }));
  }, [props.image]);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col gap-2 w-70  ">
      <div className="flex items-center justify-center gap-2 w-70">
        <section>
          <label className="block" htmlFor="">
            Top Text :
          </label>
          <input
            type="text"
            name="TopText"
            className="border border-white w-34"
            value={meme.TopText}
            onChange={handleChange}
          />
        </section>
        <section>
          {" "}
          <label className="block" htmlFor="">
            Bottom Text :
          </label>
          <input
            type="text"
            name="bottomText"
            className="border border-white  w-34"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </section>
      </div>
      <section className="w-full  ">
        <button
          onClick={props.handleClick}
          className="border w-full cursor-pointer "
        >
          Generate New Image
        </button>
        <section className="w-full flex flex-col items-center relative">
          <span className="absolute top-2 p-1 bg-black rounded">
            {meme.TopText}
          </span>
          <span className="absolute bottom-2 p-1 bg-black rounded">
            {meme.bottomText}
          </span>
          <img src={meme.imgUrl} className="mt-1 " alt="Meme Image" />
        </section>
      </section>
    </div>
  );
}
