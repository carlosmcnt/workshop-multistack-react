import {
    StyledList,
    ListItem,
    Photo,
    Info,
    Name,
    Story
} from './List.style'

import { Pet } from '../../../data/@types/Pet'
import { Button } from '@mui/material'
import { TextService } from '../../../data/services/TextService';

interface PropsList{
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function List(props: PropsList){
    const textMaxSize = 200;
    return (
        <StyledList>
            {props.pets.map(pet => (
                <ListItem key={pet.id} >
                    <Photo src={pet.photo} alt={pet.name} />
                    <Info>
                        <Name>{pet.name}</Name>
                        <Story>
                            {TextService.limitText(pet.story, textMaxSize)}
                        </Story>
                        <Button
                            variant={'contained'}
                            fullWidth
                            onClick={() => props.onSelect(pet)}
                        >
                            Adotar {pet.name}
                        </Button>
                    </Info>
                </ListItem>
            ))}
        </StyledList>
    )
}