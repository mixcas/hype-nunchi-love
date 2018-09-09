import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.section`
  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  background: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 300ms;
`;

const ModalContentWrapper = styled.div`
  background: rgba(255,255,255);
`;

const ModalCloser = styled.span`
  position: fixed;
  top: 1%;
  right: 1%;
`;

class Modal extends React.Component {
  render() {
    const { children, show, hide } = this.props;
    return (
      <ModalWrapper show={show}>
        <ModalContentWrapper>
          {children}
        </ModalContentWrapper>
        <ModalCloser>
          <button onClick={() => hide()}>X</button>
        </ModalCloser>
      </ModalWrapper>
    );
  }
}

export default Modal;
