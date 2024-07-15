import { Alert, Col, Row } from "react-bootstrap";

function Content({dates}) {
    return (
        <Row className='justify-content-center'>
            <Col sm="8">
                <div className='rectangle p-4'>
                    {dates.length ? dates.map((date, index) => (
                        <div className='d-flex border-bottom m-2' key={index}>
                            <img src='./images/avatar.jpeg' alt='avatar'></img>
                            <div className='ps-3'>
                                <p className='d-inline fs-5'>{date.name}</p>
                                <p className='fs-7'>الموعد الساعة {date.time.toFixed(2)}</p>
                            </div>
                        </div>
                    )) :
                        <Alert variant='warning' className='text-center fs-4'>لا توجد اي مواعيد اليوم</Alert>}
                </div>
            </Col>
        </Row>
    );
}

export default Content;

/**
 * Development by : Mahmoud Abd Elaziz
 * Mobile : 01201576447
 */
