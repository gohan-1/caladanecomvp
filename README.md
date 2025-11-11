# Caladanecomvp - Project

A full-stack Web3 application demonstrating modern React/TypeScript frontend architecture, Node.js/Express backend, and blockchain integration. This project showcases production-ready patterns for building decentralized applications with real-time features.

## 🚀 Project Overview

Caladanecomvp is a comprehensive Web3 platform featuring:
- **Frontend**: React 18 with TypeScript, modern state management, and Web3 wallet integration
- **Backend**: Node.js/Express REST API with in-memory mock data
- **Web3**: Ethereum blockchain integration with MetaMask, WalletConnect, and Coinbase Wallet support
- **Real-time**: Socket.IO for live updates and notifications
- **Features**: User authentication, wallet management, staking, transactions, and more

## 🛠️ Tech Stack

### Frontend
- **React** 18.3.1 with TypeScript
- **React Router** for navigation
- **Web3 React** for blockchain wallet connections
- **Ethers.js** for Ethereum interactions
- **Axios** for API communication
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **React Spring** for animations

### Backend
- **Node.js** with Express.js
- **In-memory mock data** (no database required)
- **Socket.IO** for real-time communication
- **JWT** for authentication
- **Express Validator** for request validation
- **Node Cron** for scheduled tasks

### Blockchain
- **Ethereum** (BSC-compatible)
- **Ethers.js** for contract interactions
- Support for multiple wallet providers

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)


## 🔧 Installation

### 1. Clone the Repository

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

**Or use the convenience script:**

```bash
npm run start-all
```

This will install dependencies for both frontend and backend, then start both servers.

## 🚀 Running the Project

### Option 1: Run Both Servers Together (Recommended)

From the root directory:

```bash
npm start
```

This will:
- Start the backend server on `http://localhost:1357` (with mock data)
- Start the frontend development server on `http://localhost:2468`

**Note**: The backend uses in-memory mock data. All data will reset when you restart the server.

### Option 2: Run Servers Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run client
```

### Access the Application

Once both servers are running:
- **Frontend**: Open [http://localhost:2468](http://localhost:2468) in your browser
- **Backend API**: Available at [http://localhost:1357/api](http://localhost:1357/api)
- **Health Check**: [http://localhost:1357](http://localhost:1357)

## 📁 Project Structure

```
caladanecomvp/
├── backend/                 # Node.js/Express backend
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Auth, validation, error handling
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic & cron jobs
│   ├── utils/              # Database, logger, wallet utilities
│   ├── app.js              # Express app entry point
│   └── config.js           # Configuration
│
├── src/                    # React frontend
│   ├── components/         # React components
│   │   ├── auth/          # Authentication components
│   │   ├── dashboard/     # Dashboard components
│   │   └── WalletComponents/ # Web3 wallet components
│   ├── contexts/          # React contexts (Auth, Web3)
│   ├── services/          # API service layer
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── constants/         # Constants and configurations
│   ├── contract/          # Smart contract ABIs and functions
│   └── views/             # Page components
│
├── public/                 # Static assets
└── package.json           # Frontend dependencies
```

## 📄 License

This is a demo project for evaluation purposes.
