import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,

} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/79813537?s=400&u=5f0e569cfccb1a65daeaaf316ffb51284394549f&v=4"/>
                    <div>
                        <h4>Ivan Oliveira</h4>
                        <p>Há 7 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4> Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de HTML e CSS no Bootcamp DIO do Global avane... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }