import "slick-carousel/slick/slick.css";
import MainSlider from "react-slick";
import { BTN, Inner } from "./common";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const MainVisual = ({ DEFAULT_CONTENTS = { DEFAULT_CONTENTS } }) => {
  const option = {
    arrows: false,
    afterChange: (idx) => setNum(idx),
  };

  const s = useRef(null); //document.queryselector()
  const [sNum, setNum] = useState(1);
  return (
    <>
      <MainSlider {...option} className="MainSlider">
        {DEFAULT_CONTENTS.map((slideItm, slideIndx) => {
          return (
            <div className={`itm itm0${slideIndx + 1}`}>
              <Inner className="inner">
                <h2>{slideItm.title}</h2>
                <p>{slideItm.description}</p>
                <BTN color={slideItm.color}>
                  <Link to="/">more</Link>
                </BTN>
              </Inner>
            </div>
          );
        })}
        {console.log(s)}
      </MainSlider>
      <div className="arrows">
        {console.log(s.current)}
        <button onClick={() => s.current.slickPrev()}>뒤로가기</button>
        <button onClick={() => s.current.slickNext()}>앞으로가기</button>
      </div>
      <div className="num">
        현재 슬라이드 번호 : {sNum}
        전체슬라이드 수 : {DEFAULT_CONTENTS.length}
      </div>

      <ul>
        {DEFAULT_CONTENTS.map((slideItm, slideIndx) => {
          return (
            <li>
              <button onClick={s.current.slickGoTo(slideIndx)}>
                {slideIndx + 1}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MainVisual;
