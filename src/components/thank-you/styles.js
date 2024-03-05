import styled from 'styled-components';

export const Body = styled.div`
display:flex;
height:100vh;
width:100vw;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const threshold = 1024;
const forDeskTop = `@media only screen and (min-width: ${threshold}px)`;
const forMobile = `@media only screen and (max-width: ${threshold - 1}px)`;
const imageDiameter = 50;

export const ThankYouWrapper = styled.div`
${forDeskTop} {
    width: 500px;
}

${forMobile} {
    width: 300px;
}
`;

export const IconWordsWrapper = styled.div`
margin-bottom: 20px;
display:flex;
${forMobile} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}
align-items: end;
`;

export const Image = styled.img`
height: ${imageDiameter}px;
width: ${imageDiameter}px;
border-radius: ${imageDiameter / 2}px;
`;

export const WordsWrapper = styled.div`
color: white;
border: 1px solid #7B876D;
border-radius: 12px;
padding: 18px;
background: #7B876D;
${forDeskTop} {
    margin-left: 20px;
}

${forMobile} {
    margin-top: 20px;
}
`;
