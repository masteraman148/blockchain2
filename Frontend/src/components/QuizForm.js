import React, { useState } from "react";

const QuizForm = ({ onCreateQuiz }) => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([{ text: "" }]);

  const addQuestion = () => {
    setQuestions([...questions, { text: "" }]);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = questions.map((q, i) =>
      i === index ? { ...q, text: value } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateQuiz({ title: quizTitle, questions });
    setQuizTitle("");
    setQuestions([{ text: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Quiz</h2>
      <label>
        Quiz Title:
        <input
          type="text"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
        />
      </label>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              Question {index + 1}:
              <input
                type="text"
                value={question.text}
                onChange={(e) =>
                  handleQuestionChange(index, e.target.value)
                }
              />
            </label>
          </div>
        ))}
      </div>
      <button type="button" onClick={addQuestion}>
        Add Question
      </button>
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default QuizForm;
