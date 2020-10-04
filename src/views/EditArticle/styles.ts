import styled from 'styled-components';

export const Container = styled.div`
    background-color: #5F49AB;
    min-width: 100%;
    min-height: 100%;
`;

export const BodyBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BoxForm = styled.div`
    background-color: #E8F0FE;
    min-width: 80vw;
    min-height: 80vh;
    border-radius: 8px;
    display: inline-block;
    margin: 30px;

`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
    label {
        width: 80%;
    }

    input {
        border-radius: 8px;
        width: 80%;
        height: 45px;
        border: none;
        padding: 10px;
        font-size: 14px;
    }

    textarea {
        border-radius: 8px;
        min-width: 80%;
        max-width: 80%;
        height: 300px;
        border: none;
        padding: 10px;
        font-size: 14px;
    }

    button:hover {
        background-color: #7159C1;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px 10px;
`;

export const ButtonSuccess = styled.div`
    width: 80%;
    button {
        border-radius: 8px 0 0 8px;

        width: 100%;
        height: 50px;
        border: none;
        color: #FFF;
        background-color: #5F49AB;
        cursor: pointer;
        transition: 0.2s;
    }
`;
export const ButtonDelete = styled.div`
    width: 20%;

    button {
        border-radius: 0 8px 8px 0;

        width: 100%;
        height: 50px;
        border: none;
        color: #FFF;
        background-color: #FC951F;
        cursor: pointer;
        transition: 0.2s;
    }
`;

