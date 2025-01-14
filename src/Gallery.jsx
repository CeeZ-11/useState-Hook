import { useState } from "react";
import { sculptureList } from "./data.jsx";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setshowMore] = useState(false);

  function handleClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleDetailClick() {
    setshowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <div className="Pages">
        <div className="Buttons">
          <button onClick={handlePrevClick}>Previous</button>
          <button onClick={handleClick}>Next</button>
        </div>
        <h2>
          <i>{sculpture.name}</i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleDetailClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    </>
  );
}
