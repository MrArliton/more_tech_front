
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export const Wallet= ({value}) => {
return(
<>
<Container className="square border border-primary rounded p-3 mt-1">
<Row>
    <Col md={3}>
        <Row>
        <h3 style={{color:'#9DC1F8'}}>Счёт</h3>
        </Row>
        <Row>
        <h3 style={{color:'#9DC1F8'}}>{value} Digitals Rubles</h3>
        </Row>
    </Col>

    <Col md={{span:3,offset:1}}>
        <Row>
        <Button className="mt-1 mb-1" variant="primary" type="button" onClick={()=>{
           
        }}>
                                  Перевести
                                </Button>
      

        <Button className="mt-1 mb-1" variant="primary" type="button">
                                   Просмотр истории
                                </Button>
        </Row>
        
    </Col>
    <Col md={{span:3,offset:2}}>
    <Row>
        <Button className="mt-1 mb-1"  variant="primary" type="button">
                                    Обмен на товары
                                </Button>
        

        <Button  className="mt-1 mb-1" variant="primary" type="button">
                                  Обмен на Digital Ruble
                                </Button>
        </Row>
    </Col>
</Row>

</Container>

</>
);


}