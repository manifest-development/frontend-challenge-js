import styled from 'styled-components';
import Button from '../button/Button';

export const ContentContainer = styled.div`
    @media (max-width: 400px) {
        width: 330px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 50%;
        margin-left: 18%;
    }
    @media (min-width: 401px) {
        width: 550px;
        height: 300px;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 20%;
        top: 30%;
    }
`;

export const ConfirmationMessageContainer = styled.div`
    width: 488px;
    height: 117px;
    border-radius: 30px;
    background-color: #989E8D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    @media (max-width: 400px) {
        width: 330px;
        height: 142px;
        margin-top: 20px;
    }
    @media (min-width: 401px) {
        width: 488px;
        height: 117px;
        margin-top: 20px;
    }
`;

export const Picture = styled.img`
    width: 60px;
    height: 60px;
`;

export const ConfirmationMessage = styled.p`
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
`;

export const SubmitAnotherButton = styled(Button)`
    width: 580px;
    height: 40px;   
    radius: 10px;
    background-color: #7B876D;
    line-height: 30px;
    @media (max-width: 400px) {
        width: 330px;
        height: 40px;
        margin-top: 60px;
    }
    @media (min-width: 401px) {
        width: 580px;
        height: 40px;
        margin-top: 20px;
    }
`;
