import './Add.css'
import axios from "axios"
import { useForm } from "react-hook-form"
import { PiNumberSquareOneFill, PiNumberSquareTwoFill } from "react-icons/pi"
import { Link, useNavigate } from 'react-router-dom'


export default function Add() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    axios.post("http://localhost:8000/quizzes/", data)
  }




  return (
    <div className='addContainer'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="quizName">
          <PiNumberSquareOneFill className='oneIcon' />
          <h1>Quiz Name:</h1>
          <input {...register("name", { required: true })} placeholder='Enter the Name of The Quiz..' />
          {errors.name && <span>doldur</span>}
        </div>

        <div className="quizQuestion">
          <div className="questionTittle">
            <PiNumberSquareTwoFill className='twoIcon' />
            <h1>Quiz Questions:</h1>
          </div>

          <div className="question">
            <h3>Question 1</h3>
            <div className="question__item">
              <p>Question:</p>
              <input {...register("quiz1", { required: true })} placeholder='Your Question Here..' />
              {errors.quiz1 && <span>This field is required</span>}
            </div>
            <div className="question__choosies">
              <p>Choosies</p>
              <div className="answer">
                <h4>A:</h4>
                <input {...register("answer1_1", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>B:</h4>
                <input {...register("answer1_2", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>C:</h4>
                <input {...register("answer1_3", { required: true })} placeholder='Your Answer Here..' />
              </div>
              {errors.answer1_1 && errors.answer1_2 && errors.answer1_3 && <span>This field is required</span>}
            </div>
          </div>

          <div className="question">
            <h3>Question 2</h3>
            <div className="question__item">
              <p>Question:</p>
              <input {...register("quiz2", { required: true })} placeholder='Your Question Here..' />
              {errors.quiz2 && <span>This field is required</span>}
            </div>
            <div className="question__choosies">
              <p>Choosies</p>
              <div className="answer">
                <h4>A:</h4>
                <input {...register("answer2_1", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>B:</h4>
                <input {...register("answer2_2", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>C:</h4>
                <input {...register("answer2_3", { required: true })} placeholder='Your Answer Here..' />
              </div>
              {errors.answer2_1 && errors.answer2_2 && errors.answer2_3 && <span>This field is required</span>}
            </div>
          </div>

          <div className="question">
            <h3>Question 3</h3>
            <div className="question__item">
              <p>Question:</p>
              <input {...register("quiz3", { required: true })} placeholder='Your Question Here..' />
              {errors.quiz3 && <span>This field is required</span>}
            </div>
            <div className="question__choosies">
              <p>Choosies</p>
              <div className="answer">
                <h4>A:</h4>
                <input {...register("answer3_1", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>B:</h4>
                <input {...register("answer3_2", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>C:</h4>
                <input {...register("answer3_3", { required: true })} placeholder='Your Answer Here..' />
              </div>
              {errors.answer3_1 && errors.answer3_2 && errors.answer3_3 && <span>This field is required</span>}
            </div>
          </div>

          <div className="question">
            <h3>Question 4</h3>
            <div className="question__item">
              <p>Question:</p>
              <input {...register("quiz4", { required: true })} placeholder='Your Question Here..' />
              {errors.quiz4 && <span>This field is required</span>}
            </div>
            <div className="question__choosies">
              <p>Choosies</p>
              <div className="answer">
                <h4>A:</h4>
                <input {...register("answer4_1", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>B:</h4>
                <input {...register("answer4_2", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>C:</h4>
                <input {...register("answer4_3", { required: true })} placeholder='Your Answer Here..' />
              </div>
              {errors.answer4_1 && errors.answer4_2 && errors.answer4_3 && <span>This field is required</span>}
            </div>
          </div>

          <div className="question">
            <h3>Question 5</h3>

            <div className="question__item">
              <p>Question:</p>
              <input {...register("quiz5", { required: true })} placeholder='Your Question Here..' />
              {errors.quiz5 && <span>This field is required</span>}
            </div>
            <div className="question__choosies">
              <p>Choosies</p>
              <div className="answer">
                <h4>A:</h4>
                <input {...register("answer5_1", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>B:</h4>
                <input {...register("answer5_2", { required: true })} placeholder='Your Answer Here..' />
              </div>
              <div className="answer">
                <h4>C:</h4>
                <input {...register("answer5_3", { required: true })} placeholder='Your Answer Here..' />
              </div>
              {errors.answer5_1 && errors.answer5_2 && errors.answer5_3 && <span>This field is required</span>}

            </div>
          </div>
        </div>

        <div className="btn">
          <input type="submit" value={"Save"} onSubmit={()=>reset()} />
          <button onClick={()=>navigate(-1)} className='backBtn'>Back</button>
        </div>

      </form>
    </div>
  )
}