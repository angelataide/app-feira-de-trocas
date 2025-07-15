import { itens } from '../../constants/mockItens'
import {
    Button,
    Card,
    Container,
    Description,
    Grid,
    LogoImg,
    ProductImage,
    Title,
} from './styles'

import logo from '../../assets/logo.PNG'

const Itens = () => {
    return (
        <>
            <Container>
                <LogoImg src={logo} alt="Logo" />
                <Grid>
                    {itens.map((item) => (
                        <Card key={item.id}>
                            <ProductImage src={item.imagem} alt={item.nome} />
                            <Title>Produto</Title>
                            <Description>{item.descricao}</Description>
                            <Button>Trocar</Button>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Itens
