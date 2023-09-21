import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useQuestionContext } from 'contexts/QuestionContext';
import { PATH } from 'constants/path';

const LoadingPage = () => {
  const navigate = useNavigate();
  const { state: question } = useQuestionContext();

  useEffect(() => {
    const tick = setTimeout(() => {
      navigate(`${PATH.RESULT}?score=${question.score}`);
    }, 5000);

    return () => clearTimeout(tick);
  }, []);

  return <Container>LoadingPage</Container>;
};

export default LoadingPage;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
