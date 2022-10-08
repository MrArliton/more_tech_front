import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



export const NaviBar = ({name}) => {
    return(
        <Navbar style={{backgroundColor: '#413F45', height: '10vh'}} bsClass="" expand="sm">
             <Container>
                <Navbar.Brand  id="Drop"><Image style={{width:'10vh',height:'10vh'}} src={require("../Resources/Menu.png")}></Image></Navbar.Brand>
                <Nav className="me-auto" style={{color: '#3A83F1'}}><h2>{name}</h2></Nav>
             </Container>
        </Navbar>
    );
}
export const NaviBarLk = ({name}) => {
    return(
        <Navbar style={{backgroundColor: '#413F45', height: '10vh'}} bsClass="" expand="sm">
             <Container>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown" variant="">
                    <Image style={{width:'10vh',height:'10vh'}} src={require("../Resources/Menu.png")}></Image>
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">

                    <Dropdown.Item href="/Lk"><span style={{color: '#3A83F1'}}>Личный Кабинет</span></Dropdown.Item>

                    <Dropdown.Item href="/command"><span style={{color: '#3A83F1'}}>Команда</span></Dropdown.Item>

                    <Dropdown.Item href="/collegs"><span style={{color: '#3A83F1'}}>Коллеги</span></Dropdown.Item>

                    <Dropdown.Item ><span style={{color: '#3A83F1'}}>Квизы</span></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Nav className="me-auto" style={{color: '#3A83F1'}}><h2>{name}</h2></Nav>
             </Container>
        </Navbar>
    );
}