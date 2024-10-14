"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type LeaderboardEntry = {
  rank: number;
  name: string;
  score: number;
  difficulty: string;
};

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Aaron R.", score: 300, difficulty: "Hard" },
  { rank: 2, name: "Davante A.", score: 280, difficulty: "Hard" },
  { rank: 3, name: "Jordy N.", score: 260, difficulty: "Medium" },
  { rank: 4, name: "Clay M.", score: 240, difficulty: "Medium" },
  { rank: 5, name: "Donald D.", score: 220, difficulty: "Easy" },
];

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // Simulating an API call to fetch leaderboard data
    setTimeout(() => {
      setLeaderboard(mockLeaderboard);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Leaderboard</CardTitle>
          <CardDescription className="text-center">Top Packers Trivia Players</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Score</TableHead>
                <TableHead className="text-right">Difficulty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((entry) => (
                <TableRow key={entry.rank}>
                  <TableCell className="font-medium">{entry.rank}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.score}</TableCell>
                  <TableCell className="text-right">{entry.difficulty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-center">
            <Button asChild>
              <Link href="/game">Play Now</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}