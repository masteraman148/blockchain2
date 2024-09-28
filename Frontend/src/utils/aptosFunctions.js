import { AptosClient } from "@aptos-labs/aptos-sdk";

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

export const createQuiz = async (questions, correctAnswers) => {
  try {
    const account = await window.aptos.account();
    const payload = {
      type: "entry_function_payload",
      function: "0xYourContractAddress::quiz::create_quiz",
      arguments: [questions, correctAnswers],
      type_arguments: [],
    };

    const response = await window.aptos.signAndSubmitTransaction(payload);
    await client.waitForTransaction(response.hash);
    console.log("Quiz created:", response.hash);
  } catch (error) {
    console.error("Error creating quiz:", error);
  }
};

export const submitQuiz = async (quizId, userAnswers) => {
  try {
    const account = await window.aptos.account();
    const payload = {
      type: "entry_function_payload",
      function: "0xYourContractAddress::quiz::submit_quiz",
      arguments: [quizId, userAnswers],
      type_arguments: [],
    };

    const response = await window.aptos.signAndSubmitTransaction(payload);
    await client.waitForTransaction(response.hash);
    console.log("Quiz submitted:", response.hash);
  } catch (error) {
    console.error("Error submitting quiz:", error);
  }
};
