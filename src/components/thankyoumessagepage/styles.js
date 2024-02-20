import styled from 'styled-components';
import Button from '../button/Button';

export const ThankyouBox = styled.div`
    {
        width: 600px;
        height: 200px;
        flex-direction: column;
        margin-top: 70%;;
        display: flex;
    }
    @media (min-width: 100px) {
        position: absolute;
        height: 200px;
        left: 30%;
        display: flex;
        flex-direction: column;
        top: 20%;
        width: 700px;
        margin-bottom:50px;
`;

export const ThankyouData = styled.div`
   
    height: 117px;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 500px;
    align-items: center;
    border-radius: 70px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    background-color: #989E8D;
 
`;

export const Image = styled.img`
    height: 80px;
    margin-right: 30px;
    width: 60px;
    left:200px
    right:500px;
    margin-top:auto;
    padding:1px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin left:50px;
    justify-content:center;

`;

export const ThankYouPage = styled.p`
    color: #FFFFFF;
`;

export const SubmitAnotherButton = styled(Button)`
    height: 100px;   
    radius: 20px;
    background-color: #7B876D;
    height: 100px;
    @media (min-width: 300px) {
        height: 60px;
        width: 200px;
        margin-top: 10px;
        margin-left:150px;
    }

    @media (max-width: 400px) {
        height: 40px;
        width: 80px;
        margin-top: 80px;
    }
   
`;
