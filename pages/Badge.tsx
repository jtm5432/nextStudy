/**
 * span요소에 스타일을 적용할 Badge 컴포넌트를 구현
 * 
 */
import {NextPage} from 'next';
import styled from 'styled-components';

//span 요소에 스타일을 적용
const Badge = styled.span`
    padding: 8 16;
    font-weight: bold;
    text-align: center;
    color : white;
    background : red;
    border-radius : 16px;
`

const Page : NextPage = () =>{
    return <Badge>Hello Badge</Badge>
}

export default Page;
