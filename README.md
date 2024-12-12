# NFT Minting Frontend

This project is a frontend implementation for minting NFTs using Web3Modal, fetching NFTs from a subgraph, and interacting with a backend API for minting. It was developed using Next.js and Typescript

## Features

- **Wallet Connect Button**: Connects to a wallet using Wallet Connect.
- **Mint Button**: Triggers the minting process.
- **NFT Display**: Fetches and displays NFTs from a subgraph.
- **Loading Skeleton**: Displays a loading skeleton while fetching data.
- **Confirm Modal**: Shows a modal to confirm the minting process.
- **Mint Status Message**: Displays a status message after minting is complete.
- **Backend Interaction**: Sends a POST request to the backend to mint the NFT.

## Installation

To get started with this project, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/trust0212-fantohm/frontend
cd nft-minting-frontend
```

### 2. Install dependencies

Install the required dependencies using npm or yarn

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables

You may need to set up environment variables for your project. Create a .env.local file in the root of your project and add the necessary keys (See .env.example)

### 4. Run the development server

Start the Next.js development server

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to see the application running locally

## Usage

- **Wallet Connect**: Click the "Connect Wallet" button to connect your wallet using Wallet Connect.
- **Fetching NFTs**: The NFTs will be automatically fetched from the subgraph and displayed.
- **Mint NFT**: Click the "Mint" button to mint an NFT. A modal will appear for confirmation. After minting, the status will be shown.

## Backend Integration

The frontend makes a POST request to the backend to mint the NFT. Make sure the backend is properly set up to handle the minting request.

### API endpoint for minting

- POST `/mint`
- Body: `{ address: "your-wallet-address" }`
- Response: `{ success: boolean, message: string }`

## Technologies Used

- **Next.js**: React framework for building the frontend.
- **TypeScript**: Strongly-typed JavaScript for better development experience.
- **Web Modal**: For connecting wallets.
- **GraphQL**: Fetch NFTs from a subgraph.
# frontend
