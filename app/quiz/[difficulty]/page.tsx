import QuizClient from './QuizClient';

export function generateStaticParams() {
  return [
    { difficulty: 'easy' },
    { difficulty: 'medium' },
    { difficulty: 'hard' },
  ];
}

export default function Quiz({ params }: { params: { difficulty: string } }) {
  return <QuizClient difficulty={params.difficulty} />;
}