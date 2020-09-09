import React from 'react';
import StickBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import { 
    Container, 
    SearchWrapper, 
    SearchInput, 
    SearchIcon,
    Body
} from './styles';

const SideBar: React.FC = () => {
  return(
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter"/>
              <SearchIcon/>
          </SearchWrapper>
          < StickBox>
            <Body>
                <List 
                    title="Talvez você curta" 
                    elements={
                        [
                            <FollowSuggestion name="Sea" user="sea"/>,
                            <FollowSuggestion name="Sea" user="sea"/>,
                            <FollowSuggestion name="Sea" user="sea"/>,
                            <FollowSuggestion name="Sea" user="sea"/>
                        ]
                    }/>

                <List 
                    title="O que está acontecendo"
                    elements={
                        [
                            <News 
                                title="Jason Mamoa" 
                                subtitle="Assunto do Momento em Brasil"/>,
                            <News 
                                title="Palpatine" 
                                subtitle="Entretenimento · Assunto do Momento"/>,
                            <News 
                                title="Caminhão de carnes é saqueado após tombar em rodovia em São Paulo" 
                                subtitle="Notícias·Noite anterior"/>,
                            <News 
                                title="Covid-19: Vacina chinesa deve ter eficácia testada a partir de 15 de outubro" 
                                subtitle="covid-19"/>
                        ]
                    } />
            </Body>
          </StickBox>
          
      </Container>
  );
}

export default SideBar;