import styled from 'styled-components';
import Button from 'components/@shared/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PATH } from 'constants/path';

export const GRADE_DATA = {
  A: {
    name: 'A등급',
    title: 'A등급 타이틀',
    message: 'A등급 메시지',
  },
  B: {
    name: 'B등급',
    title: 'B등급 타이틀',
    message: 'B등급 메시지',
  },
  C: {
    name: 'C등급',
    title: 'C등급 타이틀',
    message: 'C등급 메시지',
  },
};

export const calculator = (score: number) => {
  return score >= 7 ? 'A' : score >= 4 ? 'B' : 'C';
};

const ResultPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const score = Number(searchParams.get('score'));
  const grade = calculator(score);

  const handleAgainClick = () => {
    navigate(PATH.MAIN);
  };

  return (
    <Container>
      <GradeBox>
        <div> 9 ~ 7점 : A </div>
        <div> 6 ~ 4점 : B </div>
        <div> 3점 이하 : C</div>
      </GradeBox>

      <ScoreBox>
        <div>{score}점 입니다!!</div>
        <div>{GRADE_DATA[grade].name}</div>
        <div>{GRADE_DATA[grade].title}</div>
        <div>{GRADE_DATA[grade].message}</div>
      </ScoreBox>
      <ButtonBox>
        <Button onClick={handleAgainClick}>다시하기</Button>
      </ButtonBox>
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GradeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ScoreBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
`;
