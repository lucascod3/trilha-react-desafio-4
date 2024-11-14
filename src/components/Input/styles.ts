import styled from 'styled-components';

export const InputWrapper = styled.div`
    width: 100%;
    height: 40px;
    color: #FFFFFF;

    border: 1px solid #7D249C;
    border-radius: 20px;
    overflow: hidden;
    padding: 0 12px;
    
    & input {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        background-color: transparent;
        border: none;
        outline: none;
    }
`;

export const ErrorText = styled.p`
    color: blue;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 12px;
`;
