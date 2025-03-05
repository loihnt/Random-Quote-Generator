import "./App.css";
import { useState } from "react";
import quotesData from "./quotes.json";
const quotes = quotesData.quotes;

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
