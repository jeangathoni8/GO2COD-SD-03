# Rock Paper Scissors Game 🎮

A modern, interactive Rock Paper Scissors game built with React, featuring smooth animations and a beautiful UI.

## ✨ Features

- 🎯 Intuitive and responsive user interface
- 🌈 Beautiful animations using Framer Motion
- 📱 Fully responsive design for all devices
- 🎮 Real-time score tracking
- 🎨 Modern design with Tailwind CSS
- ⚡ Lightning-fast performance with Vite

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/jeangathoni8/GO2COD-SD-03.git
cd rock-paper-scissors
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations

## 🏗️ Project Structure

```
rock-paper-scissors/
├── src/
│   ├── components/
│   │   ├── GameChoice.jsx    # Game choice button component
│   │   ├── GameResult.jsx    # Game result display component
│   │   └── ScoreBoard.jsx    # Score tracking component
│   ├── App.jsx              # Main React component
│   ├── main.jsx            # React entry point
│   ├── index.css           # Global styles
│   ├── game.js             # Game logic class
│   ├── computer.js         # Computer choice logic
│   └── game.test.js        # Game logic tests
├── public/
│   └── game.svg            # Game icon
└── config files
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## 🧩 Components

### GameChoice
- Renders the game choice buttons (Rock, Paper, Scissors)
- Handles button animations and click events
- Uses Framer Motion for hover and tap animations

### GameResult
- Displays the outcome of each round
- Shows player and computer choices
- Includes "Play Again" and "Reset Game" buttons
- Animated entry with Framer Motion

### ScoreBoard
- Tracks and displays the current score
- Shows player and computer scores
- Animated with Framer Motion

## 🎮 How to Play

1. Choose your move: Rock (🪨), Paper (📃), or Scissors (✂️)
2. The computer will make its choice
3. Winner is determined by classic rules:
   - Rock crushes Scissors
   - Scissors cuts Paper
   - Paper covers Rock
4. Score is tracked automatically
5. Click "Play Again" to start a new round
6. Click "Reset Game" to reset the score

## 🧪 Running Tests

The project uses Node.js built-in test runner for game logic testing:

```bash
node src/game.test.js
```

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons and animations inspired by modern web design principles
- Community feedback and contributions