import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

export const User= ({name,surname,post,level,progress}) => {
return(
<Container className="square border border-primary rounded p-3">
<Row>
    <Col md={1}>
        <Image className="square border border-primary rounded" roundedCircle style={{width:'14vh',height:'14vh'}} src={require("../Resources/Test.jpg")}></Image>
    </Col>

    <Col md={{offset:1}}>
        <h3 style={{color:'#9DC1F8'}}>{surname} {name}</h3>
        <h7 style={{color:'#B3B2B5'}}>{post}</h7>
    </Col>
</Row>

<Row> 
<Col md={{offset:2}}>
     <h5 style={{color:'#9DC1F8'}}>Level {level}</h5>
     <ProgressBar now={progress} label=""/>
    </Col>
</Row>
</Container>);

}