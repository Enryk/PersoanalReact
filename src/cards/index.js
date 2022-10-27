import Card from 'react-bootstrap/Card';
import ImgArticle from '../img/article';

import  './style.css'

const NavbarCards = () => {
    return (
        <div>
        <Card >
          <Card.Body>
            <ImgArticle />
          </Card.Body>
        </Card>
        </div>
      );
}

export default NavbarCards;