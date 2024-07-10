import { Col, Row } from "react-bootstrap";

function Header({dates}) {
    return (
        <Row className='justify-content-center mb-3'>
            <Col sm="8" className='fs-3'>
                لديك {dates.length} موعد اليوم
            </Col>
        </Row>
    );
}
export default Header;