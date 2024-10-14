"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const difficulties = ['Easy', 'Medium', 'Hard'];

export default function Game() {
  const router = useRouter();
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleStartGame = () => {
    if (selectedDifficulty) {
      router.push(`/quiz/${selectedDifficulty.toLowerCase()}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Choose Difficulty</CardTitle>
          <CardDescription className="text-center">Select a difficulty level to start the game</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <RadioGroup onValueChange={setSelectedDifficulty} className="w-full">
            {difficulties.map((difficulty) => (
              <div key={difficulty} className="flex items-center space-x-2">
                <RadioGroupItem value={difficulty} id={difficulty} />
                <Label htmlFor={difficulty}>{difficulty}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button onClick={handleStartGame} className="w-full" disabled={!selectedDifficulty}>
            Start Game
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}