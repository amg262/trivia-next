'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

const questions = {
  easy: [
    {
      question: "What year were the Green Bay Packers founded?",
      options: ["1919", "1921", "1925", "1930"],
      correctAnswer: "1919"
    },
    {
      question: "Who is the Packers' all-time leading passer?",
      options: ["Brett Favre", "Aaron Rodgers", "Bart Starr", "Don Majkowski"],
      correctAnswer: "Brett Favre"
    },
    {
      question: "What is the nickname of the Packers' home stadium?",
      options: ["The Frozen Tundra", "Cheese Palace", "Titletown Stadium", "Lambeau Field"],
      correctAnswer: "The Frozen Tundra"
    }
  ],
  medium: [
    {
      question: "How many Super Bowl championships have the Packers won?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4"
    },
    {
      question: "Who was the Packers' head coach during their first two Super Bowl victories?",
      options: ["Vince Lombardi", "Mike Holmgren", "Curly Lambeau", "Mike McCarthy"],
      correctAnswer: "Vince Lombardi"
    },
    {
      question: "What year did Aaron Rodgers become the Packers' starting quarterback?",
      options: ["2005", "2008", "2010", "2012"],
      correctAnswer: "2008"
    }
  ],
  hard: [
    {
      question: "Who holds the Packers' record for most receptions in a single season?",
      options: ["Donald Driver", "Sterling Sharpe", "Davante Adams", "Jordy Nelson"],
      correctAnswer: "Davante Adams"
    },
    {
      question: "In what round was Aaron Rodgers drafted by the Packers?",
      options: ["1st", "2nd", "3rd", "4th"],
      correctAnswer: "1st"
    },
    {
      question: "Who scored the first touchdown in Super Bowl I for the Packers?",
      options: ["Max McGee", "Jim Taylor", "Paul Hornung", "Boyd Dowler"],
      correctAnswer: "Max McGee"
    }
  ]
};

export default function QuizClient({ difficulty }: { difficulty: string }) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = questions[difficulty as keyof typeof questions];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
    }
  };

  const handleFinish = () => {
    router.push(`/results?score=${score}&total=${quizQuestions.length}&difficulty=${difficulty}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Green Bay Packers Trivia</CardTitle>
          <CardDescription className="text-center">Difficulty: {difficulty}</CardDescription>
        </CardHeader>
        <CardContent>
          {!showResult ? (
            <>
              <Progress value={(currentQuestion + 1) / quizQuestions.length * 100} className="mb-4" />
              <h2 className="text-xl mb-4">{quizQuestions[currentQuestion].question}</h2>
              <RadioGroup onValueChange={handleAnswerSelect} className="space-y-2">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Button onClick={handleNextQuestion} className="w-full mt-4" disabled={!selectedAnswer}>
                {currentQuestion + 1 === quizQuestions.length ? 'Finish' : 'Next Question'}
              </Button>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl mb-4">Quiz Completed!</h2>
              <p className="text-xl mb-4">Your Score: {score} out of {quizQuestions.length}</p>
              <Button onClick={handleFinish} className="w-full">
                See Results
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}