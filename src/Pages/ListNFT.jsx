

import {NaviBarLk} from '../Components/NaviBar'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {host_cryp} from "../consts"

const listNFT = [{image: "",token: "", for_buy: 1}]


async function loginUser(uid) {
    return fetch(host_cryp+'/nft_collection/'+uid, {
      method: 'GET',
    })
      .then(data => data.json())
}

export const ListNFT = () => {
    document.body.style.background = "#312F36";
    

    return(
        <>
        <div >
        <NaviBarLk name="Quizi"></NaviBarLk>
            <Container className="square border border-primary rounded p-3 mt-5 ">
                    <Row>
                    {listNFT.map(({image,token,for_buy})=>{
                       return(<Col className="p-1" md={{span: 2}}>
                            {Boolean(for_buy) ? <Image  className="square border border-primary rounded p-3 mt-5 " rounded style={{width:'20vh',height:'20vh'}} src={image}></Image> : <Image rounded style={{width:'20vh',height:'20vh'}} src={image}></Image>
                    }
                        </Col>)
                    })}
                    </Row>
            </Container>
        </div>
        </>
    )
}