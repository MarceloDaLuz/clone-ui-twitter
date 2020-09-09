import React from 'react';
import Feed from '../Feed';
import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return(
      <Container>
        <Banner >
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>
                Editar perfil
            </EditButton>

            <h1>Marcelo</h1>
            <h2>@marcelo</h2>
            <p> Bio estravagante e chamativa.</p>
            <ul>
                <li>
                    <LocationIcon />
                    Curitiba, Paraná
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 18 de março de 1998
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>10</strong>
                </span>
                <span>
                    <strong>10 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
      </Container>
  );
}

export default ProfilePage;