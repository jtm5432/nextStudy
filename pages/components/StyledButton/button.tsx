/**
 * 스토리북 테스트. variant에 따라 버튼의 색상을 제어
 * 
 */
import styled, {css} from 'styled-components';

const variants = {
    primary: {
        color: '#fffff',
        backgroundColor: '#1D3461',
        border:'none'
    },
    success: {
        color: '#fffff',
        backgroundColor: '#5AB203',
        border : 'none',

    },
    transparent: {
        color: '#11111',
        backgroundColor: 'transparent',
        border: '1px solid black'
    }


} as const

type StyledButtonProps = {
    variant : keyof typeof variants
}

export  const StyledButton = styled.button<StyledButtonProps>`
    ${({ variant }) => {
        const style = variants[variant];
        return css`
      
        `;

    }}
    border-radius: 12px;
    font-size : 14px;
    height: 30px;
    line-height:22px;
    letter-spacing: 0;
    cursor : pointer;

    &:focus {
        outline:none;
    }`

