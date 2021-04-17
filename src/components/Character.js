// Write your Character component here
import React, {useState} from 'react';
import styled from "styled-components"

const CharDiv = styled.div `
    display: flex;
    background-color: #4f4f4f
`;

const CharAttDiv = styled.div `
    padding: 2%;
    
`;

const CharH1 = styled.h1 `
    font-family: sans-serif;
    color: white;
    font-size: 2rem;
    padding-top: 2%;
`;

const CharP = styled.p `
    color: yellow;
    font-size: 1rem
`;

const Character = ({ characterList }) => {

    return (
        <CharDiv className = 'container'>
            <CharH1>{characterList.name}</CharH1>
            <CharAttDiv>
                <CharP>{characterList.birth_year}</CharP>
                <CharP>{characterList.gender}</CharP>
                <CharP>{characterList.height}</CharP>
                <CharP>{characterList.films}</CharP>
            </CharAttDiv>
        </CharDiv>
    )
}

export default Character