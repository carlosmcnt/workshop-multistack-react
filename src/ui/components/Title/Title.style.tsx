import { styled } from '@mui/material';

//Variável com estilização do título
export const StyledTitle = styled('h1')`
    font-size: 20px;
    text-align: center;
    margin-top: ${({theme}) => theme.spacing(5) };
`;

//Variável com estilização do subtítulo
export const Subtitle = styled('h2')`
    font-size: 18px;
    text-align: center;
    margin-bottom: ${({theme}) => theme.spacing(5) };
    font-weight: normal;
    color: ${({theme}) => theme.palette.text.secondary };
`;