import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const ContactForm = () => {
    return (
        <div className="mb-3">
            <Row className="g-2">
                <Col md>
                    {/* Email input */}
                    <FloatingLabel controlId="floatingInputGrid" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    {/* Email input */}
                    <FloatingLabel controlId="floatingInputGrid" label="Full name">
                        <Form.Control type="name" placeholder="Annie Body" />
                    </FloatingLabel>
                </Col>
            </Row>
            
            {/*  input */}
            <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                <Form.Select aria-label="What topic is your inquiry regarding?">
                    <option>Topic:</option>
                    <option value="1">Question</option>
                    <option value="2">Praise</option>
                    <option value="3">Concern</option>
                </Form.Select>
            </FloatingLabel>

            {/* Textarea input */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Please leave your comment here</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            {/* Checkbox inputs */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Option A" />
                <Form.Check type="checkbox" label="Option B" />
                <Form.Check type="checkbox" label="Option C" />
            </Form.Group>

            {/* Submit button */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </div>
    )
};

export default ContactForm;