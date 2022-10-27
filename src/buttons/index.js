import Button from 'react-bootstrap/Button';

import  './style.css'

function Buttons() {
  return (
    <div className="d-grid gap-3">
      <Button variant="primary" size="lg">
        Exercite em Casa
      </Button>
      <Button variant="secondary" size="lg">
        Calcule seu IMC
      </Button>
      <Button variant="secondary" size="lg">
        Contactar Personal
      </Button>
    </div>
  );
}

export default Buttons;