import styled, { keyframes } from 'styled-components';
import Text from 'components/@shared/Text';
import Button from 'components/@shared/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'constants/path';
import { useQuestionContext } from 'contexts/QuestionContext';
import { useEffect } from 'react';

const MainPage = () => {
  const navigate = useNavigate();
  const { actions } = useQuestionContext();

  useEffect(() => {
    actions.reset();
  }, []);

  const handleStartClick = () => {
    navigate(PATH.QUESTION);
  };

  return (
    <Container>
      <TextBox>
        <Text $textstyle="title2">이런 테스트는 어떠세요?</Text>
        <Text $textstyle="heading1">테스트!!!!!</Text>
      </TextBox>
      <ButtonBox>
        <Button onClick={handleStartClick}>시작하기</Button>
      </ButtonBox>
    </Container>
  );
};

export default MainPage;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${fadeIn} 3s;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
