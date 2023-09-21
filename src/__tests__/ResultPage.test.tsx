import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PATH } from 'constants/path';
import { QuestionProvider } from 'contexts/QuestionContext';
import ResultPage from '../pages/ResultPage';

describe('ResultPage 등급 확인', () => {
  test.each<{ score: number; grade: string }>([
    { score: 7, grade: 'A' },
    { score: 4, grade: 'B' },
    { score: 2, grade: 'C' },
  ])('$grade 등급 테스트', ({ score, grade }) => {
    const pathname = `${PATH.RESULT}?score=${score}`;

    render(
      <MemoryRouter initialEntries={[pathname]}>
        <QuestionProvider>
          <ResultPage />
        </QuestionProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(`${grade}등급`)).toBeInTheDocument();
  });
});
