import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Buttons from '../../buttons';
// import ImgArticle from '../../img/article';
import Novotesto from '../navbar';

import  './style.css'

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" variant="light">
        <Container className=''>
          <Navbar.Brand>
            <Novotesto />
            {/* <Buttons /> */}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;