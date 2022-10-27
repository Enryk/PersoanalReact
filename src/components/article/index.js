import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Buttons from '../../buttons';
import ImgArticle from '../../img/article';

import  './style.css'

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" variant="light">
        <Container className=''>
          <Navbar.Brand>
            <Buttons />
            <ImgArticle />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;