import React, { useState } from "react";
import QuizList from "./components/QuizList";
import QuizForm from "./components/QuizForm";
import "./App.css";
import { createQuiz, submitQuiz } from "./utils/aptosFunctions"; // Import blockchain functions

function App() {
  const [quizzes, setQuizzes] = useState([]);

  // Function to add a new quiz to the list
  const handleCreateQuiz = (newQuiz) => {
    setQuizzes([...quizzes, { ...newQuiz, id: quizzes.length + 1 }]);

    // Blockchain interaction for quiz creation
    const questions = newQuiz.questions.map((q) => q.text); // Extract questions
    const correctAnswers = newQuiz.questions.map((q) => q.correctAnswer); // Extract correct answers
    createQuiz(questions, correctAnswers); // Call createQuiz function
  };

  const handleSubmitQuiz = (quizId, userAnswers) => {
    submitQuiz(quizId, userAnswers); // Call submitQuiz function
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blockchain Quiz DApp</h1>
      </header>
      <main>
        <QuizForm onCreateQuiz={handleCreateQuiz} />
        <QuizList quizzes={quizzes} onSubmitQuiz={handleSubmitQuiz} />
      </main>
    </div>
  );
}

export default App;
