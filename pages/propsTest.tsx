/**
 * css의 내용을 바꾸고 싶을 때는 props를 사용해서 외부로부터 스타일을 제어 가능
 * ${(props) => props.color }의 형태로 스타일을 끄집어냄
 * * 
 */
import { NextPage } from 'next';
import styled from 'styled-components';

type ButtonProps = {
    color: string;
    backgroundColor: string;

}

//문자 색상과 배경 색상을 props를 통해 변경할 수 있는 버튼 컴포넌트
//타입 인수에 props타입을 전달

const Button = styled.button<ButtonProps>`
    color: ${(props) => props.color};
    background: ${(props) => props.backgroundColor};
    border: 2px solid ${(props) => props.color};
    font-size : 2em;
    margin : 1em;
    padding:0.25em 1em;
    border-radius: 8px;
    cursor: pointer
`

const Page: NextPage = () => {
  return (
    <div>
        {/* 빨간색 문자, 투명한 배경의 버튼 */}
        <Button backgroundColor='transparent' color="#FF0000">
            HELLO
        </Button>
        <Button backgroundColor='#1E90FF' color="white">
            World
        </Button>
    </div>
  )
}

export default Page;