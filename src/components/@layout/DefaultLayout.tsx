import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return <DefaultLayoutContainer>{children}</DefaultLayoutContainer>;
};

export default DefaultLayout;

const DefaultLayoutContainer = styled.div`
  height: 100%;
  max-width: 375px;
  margin: 0 auto;
`;
