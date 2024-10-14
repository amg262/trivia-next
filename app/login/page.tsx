"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      router.push('/game');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login to Play</CardTitle>
          <CardDescription className="text-center">Choose a social login method</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <Button onClick={() => handleSocialLogin('google')} className="w-full" disabled={isLoading}>
            <FaGoogle className="mr-2" /> Login with Google
          </Button>
          <Button onClick={() => handleSocialLogin('facebook')} className="w-full" disabled={isLoading}>
            <FaFacebook className="mr-2" /> Login with Facebook
          </Button>
          <Button onClick={() => handleSocialLogin('twitter')} className="w-full" disabled={isLoading}>
            <FaTwitter className="mr-2" /> Login with Twitter
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}