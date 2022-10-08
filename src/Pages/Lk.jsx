import {User} from "../Components/User"
import {Command} from "../Components/Command"
import {Wallet} from "../Components/Wallet"
import {NFT} from "../Components/NFT"
import {NaviBar, NaviBarLk} from '../Components/NaviBar'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Lk = () => {
    document.body.style.background = "#312F36";
    return(
        <>
        <div >
        <NaviBarLk name="Quizi"></NaviBarLk>
            <Container className="square border border-primary rounded p-3 mt-5 ">
                <Row>
                    <Col>
                            <User name="Егор" surname="Васильев" post="Руководитель" level={12} progress={60}></User>
                    </Col>
                    <Col>
                            <Command name="СУпек" wins={12} role="Боженьека"/>
                    </Col>
                </Row>
                <Row>
                   <Wallet value={144545}/>
                </Row>
                <Row>
                     <Col>
                            <NFT/> 
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}