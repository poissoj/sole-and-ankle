import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'
  let flag = null;
  if (variant === "on-sale") {
    flag = <SecondaryFlag>Sale</SecondaryFlag>;
  } else if (variant === "new-release") {
    flag = <PrimaryFlag>Just Released!</PrimaryFlag>
  }
  const PriceTag = variant === "on-sale" ? OldPrice : Price;

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {flag}
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <PriceTag>{formatPrice(price)}</PriceTag>
          {variant === "on-sale" && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1 1 200px;
`;

const Wrapper = styled.article`
  max-width: 340px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Image = styled.img`
  border-radius: 16px 16px 4px 4px;
  width: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const OldPrice = styled.span`
  color: ${COLORS.gray[700]};
  text-decoration-line: line-through;
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
  position: absolute;
  right: 0;
  top: 19px;
`;

const BaseFlag = styled.div`
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
  position: absolute;
  padding: 4px;
  border-radius: 2px;
  top: 12px;
  right: -4px;
`;

const PrimaryFlag = styled(BaseFlag)`
  background-color: ${COLORS.secondary};
`;

const SecondaryFlag = styled(BaseFlag)`
  background-color: ${COLORS.primary};
`;

export default ShoeCard;
