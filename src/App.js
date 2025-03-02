import "./App.css";
import { useState } from "react";
const quotes = [
	"Success is not final, failure is not fatal: it is the courage to continue that counts.",
	"Do what you can, with what you have, where you are.",
	"The only limit to our realization of tomorrow is our doubts of today.",
	"Believe you can and you're halfway there.",
	"Hardships often prepare ordinary people for an extraordinary destiny.",
	"Opportunities don’t happen, you create them.",
	"Your time is limited, so don’t waste it living someone else’s life.",
	"Great things never come from comfort zones.",
	"It does not matter how slowly you go as long as you do not stop.",
	"A journey of a thousand miles begins with a single step.",
];

function App() {
	const [quote, setQuote] = useState("");
	return (
		<div className="App">
			<h1>{quote || "How are you today?"}</h1>
			<button
				onClick={() =>
					setQuote(quotes[Math.floor(Math.random() * quotes.length)])
				}
			>
				Get new quote
			</button>
		</div>
	);
}

export default App;
