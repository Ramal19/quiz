import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Details.css'
import { PiNumberSquareFiveFill, PiNumberSquareFourFill, PiNumberSquareOneFill, PiNumberSquareThreeFill, PiNumberSquareTwoFill } from "react-icons/pi";
import { Slide } from "react-slideshow-image";

export const Details = () => {

  const { id } = useParams();
  const [info, setInfo] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/quizzes/` + id)
      .then(res => setInfo(res.data))
  }, [id])


  return (
    <div className="containerDetails">
      <div className="questionHead">
        <h1>
          <PiNumberSquareOneFill className="numberIcon" />
          {info.quiz1}
        </h1>
      </div>
      <div className="questionAnswers">

        <h1>A: {info.answer1_1}</h1>

        <h1>B: {info.answer1_2}</h1>

        <h1>C: {info.answer1_3}</h1>

      </div>



      <div className="questionHead">
        <h1>
          <PiNumberSquareTwoFill className="numberIcon" />
          {info.quiz2}
        </h1>
      </div>
      <div className="questionAnswers">

        <h1>A: {info.answer2_1}</h1>

        <h1>B: {info.answer2_2}</h1>

        <h1>C: {info.answer2_3}</h1>

      </div>



      <div className="questionHead">
        <h1>
          <PiNumberSquareThreeFill className="numberIcon" />
          {info.quiz3}
        </h1>
      </div>
      <div className="questionAnswers">

        <h1>A: {info.answer3_1}</h1>

        <h1>B: {info.answer3_2}</h1>

        <h1>C: {info.answer3_3}</h1>

      </div>



      <div className="questionHead">
        <h1>
          <PiNumberSquareFourFill className="numberIcon" />
          {info.quiz4}
        </h1>
      </div>
      <div className="questionAnswers">

        <h1>A: {info.answer4_1}</h1>

        <h1>B: {info.answer4_2}</h1>

        <h1>C: {info.answer4_3}</h1>

      </div>

      

      <div className="questionHead">
        <h1>
          <PiNumberSquareFiveFill className="numberIcon" />
          {info.quiz5}
        </h1>
      </div>
      <div className="questionAnswers">

        <h1>A: {info.answer5_1}</h1>

        <h1>B: {info.answer5_2}</h1>
        
        <h1>C: {info.answer5_3}</h1>

      </div>
    </div>
  )
}