import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <>
      <Header>
        <StyledBreadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </StyledBreadcrumbs>
        <InnerWrapper>
          <Title>Running</Title>
          <StyledSelect
            label="Sort"
            value={sortId}
            onChange={ev => setSortId(ev.target.value)}>
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </StyledSelect>
        </InnerWrapper>
      </Header>
      <Spacer size={32} />
      <ColumnWrapper>
        <MainColumn>
          <ShoeGrid />
        </MainColumn>
        <LeftColumn>
          <ShoeSidebar />
        </LeftColumn>
      </ColumnWrapper>
    </>
  );
};

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tabletAndSmaller} {
    display: initial;
  }
`;

const InnerWrapper = styled.div`
  align-items: baseline;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const StyledBreadcrumbs = styled(Breadcrumbs)`
  flex-basis: 248px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--medium);
`;

const StyledSelect = styled(Select)`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default ShoeIndex;
