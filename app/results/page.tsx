"use client"

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Results() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const total = searchParams.get('total');
  const difficulty = searchParams.get('difficulty');

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Quiz Results</CardTitle>
          <CardDescription className="text-center">Difficulty: {difficulty}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-xl">Your Score: {score} out of {total}</p>
          <Button asChild className="w-full">
            <Link href="/game">Play Again</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/leaderboard">View Leaderboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}