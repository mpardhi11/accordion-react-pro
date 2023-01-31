import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answer</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.is} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
