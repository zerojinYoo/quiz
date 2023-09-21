import type { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import TextStyles from 'styles/text';

export interface TextProps {
  $textstyle?: 'heading1' | 'heading2' | 'heading3' | 'title1' | 'title2' | 'title3' | 'body';
}

const Text = (props: PropsWithChildren<TextProps>) => {
  const { $textstyle = 'body', children } = props;

  return <TextBox $textstyle={$textstyle}>{children}</TextBox>;
};

export default Text;

const TextBox = styled.p<TextProps>`
  ${({ $textstyle = 'body' }) => TextStyles[$textstyle]};
`;
