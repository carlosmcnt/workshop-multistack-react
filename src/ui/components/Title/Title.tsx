import { StyledTitle, Subtitle } from "./Title.style";

interface TitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

//Adiciona título e subtítulo
export default function Title(props: TitleProps){
    return (
        //Retorna mais de um elemento sem criar um extra como contâiner (fragment)
        <>
            <StyledTitle>{props.title}</StyledTitle>
            <Subtitle>{props.subtitle}</Subtitle>
        </>
    )
}