import React, {PropTypes} from 'react';
import {Button, Modal, Header, Form} from 'semantic-ui-react';

export const LoginDialog = (props) => {
  return (
    <Modal
      open
      onClose={props.onClose}
      size='small'
    >
      <Header icon='user' content='Log-in'/>
      <Modal.Content>
        <div>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder='john' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' />
            </Form.Field>
          </Form>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={props.onClose} inverted>Login</Button>
      </Modal.Actions>
    </Modal>
  );
};

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default LoginDialog;