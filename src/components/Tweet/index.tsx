import React from 'react';

import { 
    Container, 
    Retweeted,
    RetweetSign,
    Body,
    Avatar, 
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon, 
} from './styles';

const Tweet: React.FC = () => {
  return(
    <Container>
        <Retweeted>
            <RetweetSign />
            você retweetou
        </Retweeted>
        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>Rocketseat</strong>
                    <span>@rocketseat</span>
                    <Dot />
                    <time>4 de set</time>
                </Header>
                <Description>
                    Foguete não ré, sai da frente mané.
                </Description>
                
                <ImageContent />
                
                <Icons>
                    <Status>
                        <CommentIcon/>
                        1
                    </Status>
                    <Status>
                        <RetweetIcon/>
                        1
                    </Status>
                    <Status>
                        <LikeIcon/>
                        1
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;