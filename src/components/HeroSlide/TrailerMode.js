import React, { useRef } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'


function TrailerMode(props) {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <div>
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalBody onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalBody>
        </Modal>
    </div>
  )
}

export default TrailerMode