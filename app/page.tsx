import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Green Bay Packers Trivia</CardTitle>
          <CardDescription className="text-center">Test your knowledge of the Packers!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <Button asChild className="w-full">
            <Link href="/login">Login to Play</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/leaderboard">View Leaderboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}