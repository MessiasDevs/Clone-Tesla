import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

interface UniqueOverlayProps {
  children: ReactNode;
}

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href='#'>UI Clone</a>
          </li>
          <li>
            <a href='#'>made with </a>
          </li>
          <li>
            <a href='#'>by Messias dos Santos</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay;
