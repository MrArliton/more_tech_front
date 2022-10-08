
import {NaviBar, NaviBarLk} from '../Components/NaviBar'
import {User} from "../Components/User"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const collegs = [{name:"Егор",surname:"Васильев",post:"Руководитель",level:12,progress:60, uid: 1 },{name:"Егор",surname:"Васильев",post:"Руководитель",level:12,progress:60 , uid: 1},{name:"Егор",surname:"Рривет",post:"Руководитель",level:12,progress:60, uid: 1}]

export const Collegs = () => {
    document.body.style.background = "#312F36";
    return(
        <>
        <div >
        <NaviBarLk name="Quizi"></NaviBarLk>
            <Container className="square border border-primary rounded p-3 mt-5 ">
                    {collegs.map(({name,surname,post,level,progress, uid})=>{
                       return(<Row className="mt-2">
                        <User name={name} surname={surname} post={post} level={level} progress={progress}></User>
                        </Row>)
                    })}
            </Container>
        </div>
        </>
    )
}