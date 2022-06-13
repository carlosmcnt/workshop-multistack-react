import { styled } from '@mui/material'

//Variável com informações de estilização do cabeçalho
export const HeaderContainer = styled('header')`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
    padding: ${({theme}) => theme.spacing(6)};
`;

//Variável com informações de estilização da logo
export const Logo = styled('img')`
    width: 230px;
`;