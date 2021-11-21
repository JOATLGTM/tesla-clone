import React, { useState } from 'react'
import styled from 'styled-components'
import CloseButton from 'react-bootstrap/CloseButton'

export default function Header() {

    let sideMenus = ['Existing Inventory', 'Used Inventory', 'Trade-In', 'Test Drive', 'Cybertruck',
    'Roadster', 'Semi', 'Charging', 'Powerwall', 'Commercial Energy', 'Utilities', 'Find Us', 
    'Support' ,'Investor Relations'];

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
           <Container>
               <Logo>
                    <a>
                        <img src="/images/logo.svg" alt="logo" href="#"/>
                    </a>
               </Logo>
                <Menu>
                    <a href="#">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panels</a>
                </Menu>
                <RightMenu onClick={() => setIsMenuOpen(true)}>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    <a href="#">Menu</a>
                </RightMenu>
                <Nav show={isMenuOpen}> 
                    <CustomWrapper>
                        <CloseButton onClick={() => setIsMenuOpen(false)}/>
                    </CustomWrapper>
                    <li>
                        {sideMenus.map(menu => <a href="#">{menu}</a>)}
                    </li>
                </Nav>
           </Container>
        </div>
    )
}

const Logo = styled.div`
    margin-left: 10px;
`

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
    @media (max-width: 1201px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        font-weight: 600;
        padding: 0 10px;
        margin-right: 10px
        flex-wrap: no-wrap;
    }
`

const Nav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    li {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        a {
            margin: 10px;
            font-weight: 600;
        }
    }
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s;
`

const CustomWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 15px;
`

const CustomMenu = styled.div`
    font-weight: 600;
    color: black;
    font-weight: 800 !important;                                     
`