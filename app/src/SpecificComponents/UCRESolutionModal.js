import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

// Images
import StakeholderMap from '../assets/images/UCRE/Stakeholder_Map_JennyXin.jpg';
import SpeedDatingStoryboardIdeas from '../assets/images/UCRE/SpeedDating_Ideas.png';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles


function UCRESolutionModal(props) {
  // const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Modal
        size="lg"
        show={props.modalShowBool}
        onHide={props.modalHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Ideation: Brainstorming to the Solution
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
          <h5>Stakeholder Mapping (generated by teammate Jenny Xin)</h5>
          Stakeholder mapping helped our team learn more about the population our problem affects.
          <Image width="100%" className="mt-3" src={StakeholderMap} alt="Stakeholder Map" />

          <h5>Prototype Ideation</h5>
          Before starting our speeddating research, our generated prototype ideas to test. We then discussed each idea, sorted them into categories (<i>affinity diagramming</i>), and voted on the ones we liked most.
          <Image width="100%" className="mt-3" src={SpeedDatingStoryboardIdeas} alt="Speeddating prototype ideas to test" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UCRESolutionModal;