/**
 * 스토리북에서 해당 컴포넌트를 표시하기 위해 작성
 */
import { ComponentMeta } from '@storybook/react';
import { StyledButton } from '../../pages/components/StyledButton/button';

//파일 안의 스토리 설정(메타데이터)
export default {
    //그룹명
    title: 'StyledButton',
    //사용하는 컴포넌트
    component: StyledButton,

} as ComponentMeta<typeof StyledButton>

export const Primary = (props) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
        </StyledButton>
    )
}
export const Transparent = (props) => {
    return (
        <StyleButton {...props} variant="transparent">
            Transparent
        </StyleButton>)
}