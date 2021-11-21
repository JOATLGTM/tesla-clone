import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <div>
           <Container>
               <Logo>
                    <a>
                        <img src="/images/logo.svg" alt="" href="#"/>
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
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    <a href="#">Menu</a>
                </RightMenu>
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