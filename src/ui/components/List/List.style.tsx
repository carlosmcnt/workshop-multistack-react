import { styled } from '@mui/material';

//Variável com informações de estilização da lista
export const StyledList = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2) };
`
//Variável com informações de estilização dos elementos da lista
export const ListItem = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme}) => theme.spacing(5) };
    margin-bottom: ${({theme}) => theme.spacing(5) };
    //Ponto de quebra abaixo do tamanho médio
    ${({theme}) => theme.breakpoints.down('md') } {
        grid-template-columns: 1fr;
        gap: ${({theme}) => theme.spacing(2) };
        margin-bottom: ${({theme}) => theme.spacing(10) };
    }
` 

//Variáveis com informações sobre estilização dos elementos de um pet

export const Photo = styled('img')`
    width: 100%;
`

export const Info = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2) };
`

export const Name = styled('h2')`
    margin: 0;
`;

export const Story = styled('p')`
    margin: 0;
    word-break: break-word;
`;