import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export const NFT= ({value}) => {
return(
<Container className="square border border-primary rounded p-3 mt-1">
<Row>
    <Col>
    <Image className="square border border-primary rounded" roundedCircle style={{width:'20vh',height:'20vh'}} src={require("../Resources/Test.jpg")}></Image>
    </Col>
    <Col>
    <Image className="square border border-primary rounded" roundedCircle style={{width:'20vh',height:'20vh'}} src={require("../Resources/Test.jpg")}></Image>
      </Col>
    <Col>
    <Image className="square border border-primary rounded" roundedCircle style={{width:'20vh',height:'20vh'}} src={require("../Resources/Test.jpg")}></Image>
      </Col>
    <Col>
    <Image className="square border border-primary rounded" roundedCircle style={{width:'20vh',height:'20vh'}} src={require("../Resources/Test.jpg")}></Image>
      </Col>
    <Col>
    <Image className="square border border-primary rounded" roundedCircle style={{width:'20vh',height:'20vh'}} src={require("../Resources/Test.jpg")}></Image>
      </Col>
    <Col>
    <Button className="mt-1 mb-1 btn-circle" style={{height:'100%'}} variant="primary" type="button" onClick={()=>{document.location.href = '/list_nft';}}>
                                    Смотреть больше
    </Button>
      </Col>
</Row>

</Container>);

}