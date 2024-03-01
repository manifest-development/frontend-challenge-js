import styled from 'styled-components';
import Button from '../button/Button';

export const ThankyouBox = styled.div`
    @media (max-width: 400px) {
        width: 330px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50%;
        margin-left: 38%;
    }
    @media (min-width: 401px) {
        width: 550px;
        height: 300px;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 30%;
        top: 30%;
        align-items:center;
    }
`;

export const ThankyouData = styled.div`
    width: 488px;
    height: 117px;
    border-radius: 30px;
    background-color: #989E8D;
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    @media (max-width: 400px) {
        width: 330px;
        height: auto;
        margin-top: 50px;
        flex-direction: column;

    }
    @media (min-width: 401px) {
        width: 400px;
        height: auto;
        margin-top: -100px;
    }
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 550px; 
    margin-top:10px;


`;

export const ThankYouPage = styled.p`
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
`;

export const SubmitAnotherButton = styled(Button)`
    width: 500px;
    height: 40px;   
    radius: 5px;
    background-color: #7B876D;
    line-height: 30px;
    margin-left: 10px;
    @media (max-width: 200px) {
        width: 100px;
        height: 40px;
        margin-top: 20px;
    }
    @media (min-width: 401px) {
        width: 300px;
        height: 40px;
        margin-top: 20px;
    }
`;
