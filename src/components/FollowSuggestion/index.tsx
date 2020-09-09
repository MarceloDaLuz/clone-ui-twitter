import React from 'react';

import { 
  Container, 
  Avatar, 
  Info, 
  FollowButton 
} from './styles';

interface props {
  name: string,
  user: string
}
const FollowSuggestion: React.FC<props>= ({name, user}) => {
  return(
      <Container>
        <div>
          <Avatar/>
          
          <Info>
            <strong>{name}</strong>
            <span>{user}</span>
          </Info>
        </div>

        <FollowButton outlined>Seguir</FollowButton>
      </Container>
  );
}

export default FollowSuggestion;