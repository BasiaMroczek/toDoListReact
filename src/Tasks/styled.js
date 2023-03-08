import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: 30px auto 30px;
    align-items: center;
    grid-gap: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #dadada;

    ${function ({ hidden }) {
        return hidden && css`
     display:none;
    `;
    }}
`;

export const Content = styled.span`
    ${function ({ done }) {
        return done && css`
    text-decoration: line-through;
    `;
    }}
`;

export const Button = styled.button`
    color: #ffffff;
    width: 30px;
    height: 30px;
    border: none;
    transition: background 0.3s;
    padding: 0;

    ${function ({ toggleDone }) {
        return toggleDone && css`
            background: #008000;

        &:hover {
            background: #009400;
        }
    `}
    }

        ${function ({ remove }) {
        return remove && css`
        background: hsl(348, 83%, 47%);

        &:hover {
        background: hsl(348, 83%, 52%);
        }
    `}
    }
`;