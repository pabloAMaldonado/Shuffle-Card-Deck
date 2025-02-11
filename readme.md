# 🎴 Shuffle Card Deck

The **Shuffle Card Deck** app aims to determine the fastest technique for shuffling a deck of cards that you can use in game applications. More importantly, it provides experience in measuring and evaluating app performance.

## 🚀 Features

### ✅ User Stories

- The user sees a panel with:

  - A text box to enter the number of rounds.
  - Three output text boxes for start time, end time, and total execution time.
  - Two buttons: **"JS Random"** and **"Xorshift"**.

- The user can enter a number between **1 and 10,000** to specify how many times (or rounds) the selected random number algorithm should execute.

- Clicking one of the algorithm buttons starts the evaluation, running the selected algorithm for the specified rounds.

- If the input is missing, out of range, or invalid, a **warning message** appears.

- The user sees a **tabular output** displaying:

  - Algorithm name
  - Time started
  - Time ended
  - Total execution time

- If the user changes the number of rounds before completing all three tests, a **warning dialog** appears with:

  - **"Cancel"** to dismiss the dialog without changes.
  - **"OK"** to clear the output area and close the warning dialog.

### 🎁 Bonus Features

- A third algorithm button: **"WELL512a.c"**.
- Developers can review the output and analyze **why the fastest algorithm outperforms the slowest one**.

---

## 🛠️ Installation & Usage

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/shuffle-card-deck.git
   cd shuffle-card-deck
   ```
2. Open `index.html` in your browser (if it's a front-end project) or run the application as instructed.
3. Enter the number of rounds and test the shuffle algorithms!

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

