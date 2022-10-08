
import {Command} from "../Components/Command"
import {NaviBar, NaviBarLk} from '../Components/NaviBar'
import {User} from "../Components/User"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CommandP = () => {
    document.body.style.background = "#312F36";
    return(
        <>
        <div >
        <NaviBarLk name="Quizi"></NaviBarLk>
            <Container className="square border border-primary rounded p-3 mt-5 ">
                <Row>
                    <Col>
                    <Command name="Супек" wins={12}/>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="mt-2">
                    <User name="Егор" surname="Васильев" post="Руководитель" level={12} progress={60}></User>
                    </Col>
                    <Col className="mt-2">
                    <User name="Егор" surname="Васильев" post="Руководитель" level={12} progress={60}></User>
                    </Col >
                    <Col className="mt-2">
                    <User name="Егор" surname="Васильев" post="Руководитель" level={12} progress={60}></User>
                    </Col>
                    <Col className="mt-2">
                    <User name="Егор" surname="Васильев" post="Руководитель" level={12} progress={60}></User>
                    </Col>
                    <Col className="mt-2">
                    <User name="Егор" surname="Васильев" post="Руководитель" level={12} progress={60}></User>
                    </Col>
                    <Col className="mt-2">
                    <User name="Егор" surname="Васильев" post="Руководитель" level={12} progress={60}></User>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}