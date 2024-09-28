# Blockchain Quiz DApp on Aptos

## Project Vision
The **Blockchain Quiz DApp** is a decentralized platform for creating, managing, and participating in quizzes on the **Aptos blockchain**. This application allows users to submit quiz questions and answers as **Non-Fungible Tokens (NFTs)**, ensuring that each quiz is immutable, verifiable, and tamper-proof. The **React** frontend provides an intuitive interface for users to interact with the quizzes, while the **Petra wallet** enables secure authentication and transaction signing.

## Features
- **Decentralized Quiz Management**: Quizzes are minted as NFTs on the blockchain.
- **Immutable Quiz Records**: Each quiz can be verified as authentic and unique.
- **React Frontend**: User-friendly interface for creating and answering quizzes.
- **Aptos Move Smart Contracts**: Secure quiz creation and management using the Aptos Move language.
- **Petra Wallet Integration**: Seamless user authentication and transaction signing.

## Tech Stack
- **Frontend**: React.js
- **Blockchain**: Aptos (Move Language)
- **Wallet**: Petra Wallet

## How It Works
1. **Create a Quiz**: Users can mint quizzes as NFTs on the blockchain.
2. **Store on Blockchain**: The quiz details are stored immutably on the Aptos blockchain.
3. **Verify Quizzes**: Quizzes can be verified for authenticity by checking the NFT on the blockchain.
4. **Petra Wallet**: Use Petra Wallet to sign and confirm blockchain transactions.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Aptos CLI](https://aptos.dev/cli-tools/aptos-cli-tool/)
- [Petra Wallet](https://petra.app/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aptos-blockchain-quiz.git
   cd aptos-blockchain-quiz
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Set up the Aptos environment:
   - Install Aptos CLI:  
     ```bash
     curl -sSf https://aptos.dev/cli-tools/install | sh
     ```
   - Create an Aptos account:
     ```bash
     aptos init
     ```
   - Fund the account using the Aptos faucet (Devnet):
     ```bash
     aptos account fund-with-faucet --account your_account_address
     ```

4. Deploy the Move smart contract:
   - Navigate to the `move` folder in your project.
   - Build and deploy the contract:
     ```bash
     aptos move compile
     aptos move publish --profile devnet
     ```

5. Run the React frontend:
   ```bash
   npm start
   ```

6. Ensure **Petra Wallet** is installed and connected to interact with the DApp.

### Deployment

1. **Deploy on Aptos Devnet/Testnet**:
   - **Build the Move contract**:
     ```bash
     aptos move compile
     ```
   - **Deploy the contract**:
     ```bash
     aptos move publish --profile devnet
     ```
   - The contract will be deployed on Aptos Devnet/Testnet. Make sure to copy the contract address for frontend integration.
   
2. **Frontend Deployment**:
   - Deploy the React app using any preferred service (e.g., Netlify, Vercel).
   - Update the contract address and Aptos network configurations in the frontend code.

### Usage
- Go to the frontend URL (e.g., `http://localhost:3000` or deployed link).
- Connect your **Petra Wallet**.
- Users can create quizzes as NFTs and participate in them, ensuring that quiz results are verifiable on the blockchain.

## Aptos CLI Commands
- **Check account balance**:
  ```bash
  aptos account balance --profile devnet
  ```
- **Deploy Move contract**:
  ```bash
  aptos move publish --profile devnet
  ```
- **Fund account with Devnet faucet**:
  ```bash
  aptos account fund-with-faucet --account your_account_address
  ```

## Deployment Information
- **Smart Contract Address**: `https://explorer.aptoslabs.com/txn/24431169?network=devnet`
- **Transaction**: `0x56c3f350fd70eac86cb0d943f889bdf0a33d7e3b8880bafbc079aff51d2e7714`
- **Aptos Devnet URL**: `https://fullnode.devnet.aptoslabs.com`

- ![image](https://github.com/user-attachments/assets/b0a38605-70b8-494a-9ef9-92f3ef8a80c4)


## Contact Information
For inquiries or support, feel free to reach out:

- **Name**: Harsh Shukla
- **Email**: masteraman148@gmail.com
- **LinkedIn**: `https://www.linkedin.com/in/aman-shukla-16b8501b9/`
- **GitHub**: `https://github.com/masteraman148`

## Future Scope
The Blockchain Quiz DApp can be expanded and enhanced in the following ways:
1. **User Profiles**: Implement user profiles to track quiz participation and achievements.
2. **Leaderboard**: Introduce a leaderboard system for users based on quiz performance.
3. **Multilingual Support**: Expand the platform to support quizzes in multiple languages.
4. **Quiz Categories**: Organize quizzes into categories for better user navigation.
5. **Analytics Dashboard**: Provide analytics for quiz creators to analyze participation and performance.
6. **Mobile App Integration**: Develop a mobile version of the DApp for easier access to quizzes.
7. **Gamification**: Introduce badges and rewards for users who complete quizzes successfully.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
