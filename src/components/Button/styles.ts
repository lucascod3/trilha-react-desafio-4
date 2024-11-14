import styled from 'styled-components';
import { IButtonProps } from './types';

export const ButtonContainer = styled.button<IButtonProps>`
    width: 100%;
    height: 40px;
    background-color: #7D249C;
    color: #FFFFFF;

    border: 1px solid #7D249C;
    border-radius: 20px;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;
