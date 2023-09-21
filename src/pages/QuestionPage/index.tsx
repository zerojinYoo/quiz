import styled from 'styled-components';
import { useQuestionContext } from 'contexts/QuestionContext';
import { data } from 'data/data';
import Text from 'components/@shared/Text';
import Button from 'components/@shared/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'constants/path';

const QuestionPage = () => {
  const navigate = useNavigate();
  const { state: question, actions } = useQuestionContext();

  const handleScoreClick = (score: number) => {
    actions.update({ id: question.id + 1, score: question.score + score });

    if (question.id === 2) {
      navigate(PATH.LOADING, { replace: true });
    }
  };

  return (
    <Container>
      <QuestionBox>
        <Text $textstyle="title1">{data[question.id + 1].question}</Text>
      </QuestionBox>
      <AnswerBox>
        {data[question.id + 1].answers.map((answer, idx) => (
          <Button key={idx} onClick={() => handleScoreClick(answer.score)}>
            {answer.answer}
          </Button>
        ))}
      </AnswerBox>
    </Container>
  );
};

export default QuestionPage;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
