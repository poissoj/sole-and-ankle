import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <StyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  align-items: center;
  height: 40px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
  margin-left: 32px;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  margin-left: 32px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const StyledButton = styled(UnstyledButton)`
  margin-left: 32px;
  margin-right: 32px;
`

export default SuperHeader;
