import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 3rem 0 3rem 0;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: white;
`;

function Header(): JSX.Element {
  return <HeaderContainer>header</HeaderContainer>;
}

export default Header;
