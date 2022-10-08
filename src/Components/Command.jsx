import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const Command= ({name,wins,role}) => {
return(
<Container className="square border border-primary rounded p-3">
<Row>
<Col md={{offset: 0, span:0, order: 'last'}} >
        <Image className="square border border-primary rounded" roundedCircle style={{width:'20vh',height:'20vh'}} src={require("../Resources/Test_C.jpg")}></Image>
    </Col>
    <Col md={{offset:0 ,span:0 }}>
        <h3 style={{color:'#9DC1F8'}}>Команда: {name}</h3>
        <h6 style={{color:'#9DC1F8'}}>Количество побед: {wins}</h6>
        {Boolean(role) ? <h6 style={{color:'#9DC1F8'}}> Роль: {role}</h6> : ''}
    </Col>
    
</Row>

</Container>);

}