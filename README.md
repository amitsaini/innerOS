# innerOS

A personal check-in and wellness tracking application built with Node.js, Express, MongoDB, and React.

## Project Structure

```
innerOS/
├── backend/           # Express.js backend server
└── check-in-app/     # React frontend application
```

## Features

- User authentication and management
- Daily check-ins with mood tracking
- Energy and alignment monitoring
- Personal goal tracking
- Nudge notifications system

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/innerOS.git
cd innerOS
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../check-in-app
npm install
```

4. Create environment files:
```bash
cp backend/.env.example backend/.env
cp check-in-app/.env.example check-in-app/.env
```

5. Start the backend server:
```bash
cd backend
npm start
```

6. Start the frontend development server:
```bash
cd check-in-app
npm start
```

## Usage

- Access the application at `http://localhost:3000`
- Backend API runs on `http://localhost:5001`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
