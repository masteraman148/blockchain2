module quiz_blockchain::quiz {

    use std::signer;
    use std::vector;
    use std::string;

    // Struct to represent a quiz
    struct Quiz has key, store {
        id: u64,
        creator: address,
        questions: vector<string::String>, // A list of questions
        correct_answers: vector<string::String>, // A list of correct answers
    }

    // Struct to represent user's quiz answers
    struct QuizSubmission has key, store {
        quiz_id: u64,
        user: address,
        user_answers: vector<string::String>, // User's answers to the quiz
        correct: u64, // Number of correct answers
    }

    // Event to track quiz creation
    struct QuizCreated has store {
        quiz_id: u64,
        creator: address,
    }

    // Event to track quiz submission
    struct QuizSubmitted has store {
        quiz_id: u64,
        user: address,
        correct: u64,
    }

    /// Create a new quiz with questions and correct answers
    public entry fun create_quiz(account: &signer, questions: vector<string::String>, correct_answers: vector<string::String>) {
        let quiz_id = u64::from(hash::keccak256(bcs::to_bytes(&account)));
        let creator = signer::address_of(account);

        assert!(vector::length(&questions) == vector::length(&correct_answers), 1);

        move_to(account, Quiz {
            id: quiz_id,
            creator,
            questions,
            correct_answers,
        });

        event::emit(QuizCreated {
            quiz_id,
            creator,
        });
    }

    /// Submit a quiz and store the user's answers
    public entry fun submit_quiz(account: &signer, quiz_id: u64, user_answers: vector<string::String>) {
        let quiz = borrow_global<Quiz>(quiz_id);
        let user = signer::address_of(account);
        let correct_answers = &quiz.correct_answers;
        let mut correct: u64 = 0;

        // Check how many answers are correct
        let len = vector::length(correct_answers);
        let i = 0;
        while (i < len) {
            if (vector::borrow(correct_answers, i) == vector::borrow(&user_answers, i)) {
                correct = correct + 1;
            };
            i = i + 1;
        }

        // Save the submission data
        move_to(account, QuizSubmission {
            quiz_id,
            user,
            user_answers,
            correct,
        });

        // Emit an event for the quiz submission
        event::emit(QuizSubmitted {
            quiz_id,
            user,
            correct,
        });
    }

    /// View a quiz by its ID
    public fun get_quiz(quiz_id: u64): &Quiz acquires Quiz {
        borrow_global<Quiz>(quiz_id)
    }

    /// Get a user's quiz submission
    public fun get_submission(quiz_id: u64, user: address): &QuizSubmission acquires QuizSubmission {
        borrow_global<QuizSubmission>(user)
    }
}
