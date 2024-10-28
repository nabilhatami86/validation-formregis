import React from "react";
import styled from "styled-components";
import Counter from '../Counter';
import Bar from '../Bar';

const imgProduct = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjygJMw8mSd7NB-dtKQ23PNjnbIxZs89OUrvLJyqi7O_Oh7Qh6ZJ3Z_MqCs9ezA2h5vo&usqp=CAU';

const CardContainer = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 16px;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 12px;
`;

const Description = styled.p`
    font-size: small;
`;

export default class Product extends React.Component {
    state = {
        value: 0
    };

    handleValue = (value) => {
        this.setState({ value });
    };

    render() {
        return (
            <div>
                <CardContainer>
                <Bar value={this.state.value} />
                    <Image src={imgProduct} alt="img" />
                    <Heading>Title Card</Heading>
                    <Price>Rp.100.000</Price>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                    </Description>
                    <Counter receiveValue={this.handleValue} />
                </CardContainer>
            </div>
        );
    }
}
