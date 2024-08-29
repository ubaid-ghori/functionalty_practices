"use client"
import React, { useState, useEffect } from 'react';
const Quiz = () => {
const [question,setquestion]=useState(quizData)
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [score, setScore] = useState(0);

  return (
    <div>
        <h2>Quiz</h2>
        <p>{question[currentQuestionIndex].question}</p>
        {question[currentQuestionIndex].options.map((option,key) =>(
            <div key={key}>
                <input type="radio" value={option} />
                <label>{option}</label>
            </div>
        ))}
    </div>
  );
};

export default Quiz;

const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      correctAnswer: "2"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
      correctAnswer: "Oxygen"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Great White Shark"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["Japan", "China", "India", "Thailand"],
      correctAnswer: "Japan"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7"
    },
    {
      question: "Which language is primarily spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "English"],
      correctAnswer: "Portuguese"
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
      correctAnswer: "Pound Sterling"
    }
  ];