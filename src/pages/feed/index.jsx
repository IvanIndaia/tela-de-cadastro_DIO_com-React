//import { Link } from "react-router-dom";
//import { Button } from "../../components/Button";


import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
    return (<> 
        <Header autenticado={true} /> 
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA </TitleHighLight>
                <UserInfo percentual={25} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/79813537?s=400&u=5f0e569cfccb1a65daeaaf316ffb51284394549f&v=4" />
                <UserInfo percentual={75} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/79813537?s=400&u=5f0e569cfccb1a65daeaaf316ffb51284394549f&v=4" />
                <UserInfo percentual={55} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/79813537?s=400&u=5f0e569cfccb1a65daeaaf316ffb51284394549f&v=4" />
                <UserInfo percentual={70} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/79813537?s=400&u=5f0e569cfccb1a65daeaaf316ffb51284394549f&v=4" />
                <UserInfo percentual={33} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/79813537?s=400&u=5f0e569cfccb1a65daeaaf316ffb51284394549f&v=4" />
            </Column>
        </Container>

    {/* <Button title="Teste 1"/>
    <Button title="Teste 2" variant="secondary"/>
    <Link to="/login">Ir para o Login</Link> */}
   </>)
}

export { Feed }