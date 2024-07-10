import { Button, Col, Row } from "react-bootstrap";

function Buttons({clearTimes,showTimes}) {
    return (
        <Row className='justify-content-center py-3'>
            <Col sm="8" className='d-flex justify-content-between'>
                <Button onClick={showTimes}>عرض المواعيد</Button>
                <Button onClick={clearTimes} className='btn btn-danger'>مسح الكل</Button>
            </Col>
        </Row>
    )
}
export default Buttons;