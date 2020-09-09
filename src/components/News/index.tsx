import React from 'react';

import { Container } from './styles';

interface props{
  title: string,
  subtitle: string
}
const News: React.FC<props>= ({title, subtitle}) => {
  return(
    <Container>
      <span>{subtitle}</span>
      <strong>{title}</strong>
    </Container>
  );
}

export default News;