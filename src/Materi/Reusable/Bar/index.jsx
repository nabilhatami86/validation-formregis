import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    padding: 16px;
    background-color: #333;
    color: white;
    text-align: center;
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
    font-size: 18px;
`;

export default class Bar extends React.Component {
    render() {
        return (
            <Nav>
                <Link href="#">
                    {this.props.value}
                </Link>
            </Nav>
        );
    }
}
