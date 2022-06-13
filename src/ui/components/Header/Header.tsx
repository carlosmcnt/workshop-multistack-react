import { 
    HeaderContainer,
    Logo
} from './Header.style';


//Adiciona logo no cabeçalho
export default function header(){
    return(
        <HeaderContainer>
            <Logo src="/images/logo.svg" alt="Adote um Pet" />
        </HeaderContainer>
    )
}