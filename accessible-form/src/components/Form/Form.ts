import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormProps from './form.interface';
// import FormProps from './form.interface';


// const ContactForm = (): FormProps => {
const ContactForm: React.FC<FormProps> = ({
    label,
    value,
    ...props,
}:FormProps) => {
    return (
        <Form className="mb-3">
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
            
            {/* Password Inputs */}
            <Row className="g-2">
                <Col md>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
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

            {/* Checkboxes */}
            {['checkbox', 'radio'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />
                </div>
            ))}

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
        </Form>
    )
};

export default ContactForm;