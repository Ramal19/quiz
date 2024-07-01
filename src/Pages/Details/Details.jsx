

import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import {
  PiNumberSquareFiveFill,
  PiNumberSquareFourFill,
  PiNumberSquareOneFill,
  PiNumberSquareThreeFill,
  PiNumberSquareTwoFill,
} from "react-icons/pi";

export const Details = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/quizzes/` + id).then((res) => {
      setInfo(res.data);

      console.log(res.data);
    });
  }, [id]);

  const checkAnswer = (condition) => {
    if (condition == "true") {
      return "trueAnswer";
    } else {
      return "falseAnswer";
    }
  };

  return (
    <div className="containerDetails">


        {info?.questions?.map((quest, i) => {
          return (
            <>
              <div key={i} className="questionHead">
                <>
                  <h1 className="numberIcon" >*</h1>
                  {quest.content}
                </>
              </div>
              <div className="questionAnswers">
                {quest?.answers?.map((ans, i) => {
                  return (
                    <div
                      key={i}
                      className={show ? checkAnswer(ans.cond) : ""}
                      onClick={(e) => {
                        if (!show) {
                          [...e.target.parentElement.children].forEach((el) => {
                            el.className = "";
                          });
                          e.target.className = "trueAnswer";
                        }
                      }}
                    >
                      <h1>
                        {ans?.ans}
                      </h1>
                      <input type="radio" name="true" />
                    </div>
                  );
                })}
              </div>
              </>
          );
        })}
      <button className="btnS" onClick={() => setShow(true)}>Bitir</button>

    </div>
  );
};
