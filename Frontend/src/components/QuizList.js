import React, { useState, useEffect } from "react";
import axios from "axios";
import { AptosClient } from "@aptos-labs/aptos-sdk"; // Import Aptos SDK

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize AptosClient (pointing to Aptos Devnet or Testnet)
  const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

  // Fetch list of quizzes from a server or API (you can adapt it to fetch from blockchain)
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("https://api.example.com/quizzes"); // Update this URL to your quiz data source
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes", error);
      }
    };
    fetchQuizzes();
  }, []);

  // Handle when a quiz is selected
  const selectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setUserAnswers({});
  };

  // Handle answer input
  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer,
    });
  };

  // Submit answers to the blockchain via Petra Wallet
  const submitQuiz = async () => {
    setIsSubmitting(true);
    try {
      // Use Petra Wallet to sign and submit transaction
      const account = await window.aptos.account(); // Get the user's Petra wallet account
      const payload = {
        type: "entry_function_payload",
        function: "0xYourContractAddress::quiz::submit_quiz", // Replace with your contract address and function
        arguments: [selectedQuiz.id, JSON.stringify(userAnswers)], // Arguments to the smart contract
        type_arguments: [],
      };

      // Sign and submit transaction using Petra Wallet
      const transaction = await window.aptos.signAndSubmitTransaction(payload);
      await client.waitForTransaction(transaction.hash);

      console.log("Transaction submitted:", transaction.hash);
      alert("Quiz submitted successfully!");
    } catch (error) {
      console.error("Error submitting quiz", error);
      alert("Failed to submit the quiz. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {selectedQuiz ? (
        <div>
          <h2>{selectedQuiz.title}</h2>
          <form>
            {selectedQuiz.questions.map((question) => (
              <div key={question.id}>
                <label>{question.text}</label>
                <input
                  type="text"
                  value={userAnswers[question.id] || ""}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                />
              </div>
            ))}
          </form>
          <button onClick={submitQuiz} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Quiz"}
          </button>
          <button onClick={() => setSelectedQuiz(null)}>Back to Quiz List</button>
        </div>
      ) : (
        <div>
          <h2>Available Quizzes</h2>
          <ul>
            {quizzes.map((quiz) => (
              <li key={quiz.id}>
                <button onClick={() => selectQuiz(quiz)}>{quiz.title}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizList;
