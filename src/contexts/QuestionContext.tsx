import { ReactNode, useMemo } from 'react';
import { createContext, useContext, useState } from 'react';

interface QuestionContextState {
  id: number;
  score: number;
}

const initialState: QuestionContextState = {
  id: 0,
  score: 0,
};

interface QuestionContextActions {
  update(value: QuestionContextState): void;
  reset(): void;
}

interface QuestionContextType {
  state: QuestionContextState;
  actions: QuestionContextActions;
}

const QuestionContext = createContext<QuestionContextType | null>(null);

export function QuestionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuestionContextState>(initialState);
  const actions: QuestionContextActions = useMemo(
    () => ({
      update(value) {
        setState(value);
      },
      reset() {
        setState(initialState);
      },
    }),
    []
  );

  const value = useMemo(() => ({ state, actions }), [state, actions]);

  return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
}

export function useQuestionContext() {
  const context = useContext(QuestionContext);
  if (context === null) {
    throw new Error('useQuestionContext must be used within QuestionProvider');
  }
  return context;
}
