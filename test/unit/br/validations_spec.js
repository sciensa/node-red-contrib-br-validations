/* eslint-env mocha */
/* eslint strict: [2, "global"], no-unused-expressions: [0]*/

import sinon from 'sinon';
import helper from '../helpers';
import node from '../../../br/validations';

describe('BrValidations node', () => {
  beforeEach((done) => {
    helper.startServer(done);
  });

  afterEach((done) => {
    helper.unload().then(() => {
      helper.stopServer(done);
    });
  });

  const brValidationsNode = {
    id: 'br-validations-node',
    type: 'BrValidations',
    name: 'My Br Validations',
    cpf: false,
    cnpj: false,
    pis: false,
    wires: [],
  };

  const flow = [
    brValidationsNode,
  ];

  it('loads defaults currectly', (done) => {
    helper.load(node, flow, () => {
      const brValidations = helper.getNode('br-validations-node');
      expect(brValidations.name).to.equal('My Br Validations');
      expect(brValidations.cpf).to.be.false;
      expect(brValidations.cnpj).to.be.false;
      expect(brValidations.pis).to.be.false;
      done();
    });
  });

  describe('CPF Validation', () => {
    before((done) => {
      brValidationsNode.cpf = true;
      done();
    });

    context('when a valid formatted CPF is given', () => {
      const message = {
        document: '218.570.058-80',
        payload: {
          ninja: 'Jiraya',
        },
      };

      it('sends the message to the first output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([message, null]);

          done();
        });
      });
    });

    context('when a valid unformatted CPF is given', () => {
      const message = {
        document: '21857005880',
        payload: {
          ninja: 'Jiraya',
        },
      };

      it('sends the message to the first output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([message, null]);

          done();
        });
      });
    });

    context('when an invalid CPF is given', () => {
      const message = {
        document: '218.570.058-88',
        payload: {
          ninja: 'Jiraya',
        },
      };

      it('sends the message to the second output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([null, message]);

          done();
        });
      });
    });
  });

  describe('CNPJ Validation', () => {
    before((done) => {
      brValidationsNode.cpf = false;
      brValidationsNode.cnpj = true;
      done();
    });

    context('when a valid formatted CNPJ is given', () => {
      const message = {
        document: '45.277.057/0001-70',
        payload: {
          ninja: 'Jiraya',
        },
      };

      it('sends the message to the first output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([message, null]);

          done();
        });
      });
    });

    context('when a valid unformatted CNPJ is given', () => {
      const message = {
        document: '37258183000150',
        payload: {
          ninja: 'Jiraya',
        },
      };

      it('sends the message to the first output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([message, null]);

          done();
        });
      });
    });

    context('when an invalid CNPJ is given', () => {
      const message = {
        document: '45.277.057/0002-80',
        payload: {
          ninja: 'Jiraya',
        },
      };

      it('sends the message to the second output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([null, message]);

          done();
        });
      });
    });
  });

  describe('PIS/PASEP Validation', () => {
    before((done) => {
      brValidationsNode.cpf = false;
      brValidationsNode.cnpj = false;
      brValidationsNode.pis = true;
      done();
    });

    context('when a valid formatted PIS/PASEP is given', () => {
      const message = {
        document: '120.5825.883-7',
        payload: {
          ninja: 'Kakashi',
        },
      };

      it('sends the message to the first output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([message, null]);

          done();
        });
      });
    });

    context('when a valid unformatted PIS/PASEP is given', () => {
      const message = {
        document: '12058258837',
        payload: {
          ninja: 'Kakashi',
        },
      };

      it('sends the message to the first output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([message, null]);

          done();
        });
      });
    });

    context('when an invalid PIS/PASEP is given', () => {
      const message = {
        document: '120.5825.883-77',
        payload: {
          ninja: 'Kakashi',
        },
      };

      it('sends the message to the second output wire', (done) => {
        helper.load(node, flow, () => {
          const brValidations = helper.getNode('br-validations-node');

          const send = sinon.spy(brValidations, 'send');

          brValidations.emit('input', message);

          expect(send).to.have.been.calledWith([null, message]);

          done();
        });
      });
    });
  });

  context('when no Document Type has been checked', () => {
    before((done) => {
      brValidationsNode.cpf = false;
      brValidationsNode.cnpj = false;
      brValidationsNode.pis = false;
      done();
    });

    const message = {
      document: '120.5825.883-7',
      payload: {
        ninja: 'Kakashi',
      },
    };

    it('displays an error', (done) => {
      helper.load(node, flow, () => {
        const brValidations = helper.getNode('br-validations-node');

        const error = sinon.spy(brValidations, 'error');

        brValidations.emit('input', message);

        expect(error).to.have.been.calledWith('BrValidations Config Error: at least one Document Type must be checked!', message);

        done();
      });
    });
  });

  context('when message.document is null', () => {
    before((done) => {
      brValidationsNode.cpf = false;
      brValidationsNode.cnpj = false;
      brValidationsNode.pis = true;
      done();
    });

    const message = {
      document: null,
      payload: {
        ninja: 'Kakashi',
      },
    };

    it('displays an error', (done) => {
      helper.load(node, flow, () => {
        const brValidations = helper.getNode('br-validations-node');

        const error = sinon.spy(brValidations, 'error');

        brValidations.emit('input', message);

        expect(error).to.have.been.calledWith('BrValidations Error: message.document must be sent!', message);

        done();
      });
    });
  });

  context('when message.document is undefined', () => {
    before((done) => {
      brValidationsNode.cpf = false;
      brValidationsNode.cnpj = false;
      brValidationsNode.pis = true;
      done();
    });

    const message = {
      document: undefined,
      payload: {
        ninja: 'Kakashi',
      },
    };

    it('displays an error', (done) => {
      helper.load(node, flow, () => {
        const brValidations = helper.getNode('br-validations-node');

        const error = sinon.spy(brValidations, 'error');

        brValidations.emit('input', message);

        expect(error).to.have.been.calledWith('BrValidations Error: message.document must be sent!', message);

        done();
      });
    });
  });

  context('when message.document is blank', () => {
    before((done) => {
      brValidationsNode.cpf = false;
      brValidationsNode.cnpj = false;
      brValidationsNode.pis = true;
      done();
    });

    const message = {
      document: '',
      payload: {
        ninja: 'Kakashi',
      },
    };

    it('displays an error', (done) => {
      helper.load(node, flow, () => {
        const brValidations = helper.getNode('br-validations-node');

        const error = sinon.spy(brValidations, 'error');

        brValidations.emit('input', message);

        expect(error).to.have.been.calledWith('BrValidations Error: message.document must be sent!', message);

        done();
      });
    });
  });

  context('when message.document is an spaced blank', () => {
    before((done) => {
      brValidationsNode.cpf = false;
      brValidationsNode.cnpj = false;
      brValidationsNode.pis = true;
      done();
    });

    const message = {
      document: '   ',
      payload: {
        ninja: 'Kakashi',
      },
    };

    it('displays an error', (done) => {
      helper.load(node, flow, () => {
        const brValidations = helper.getNode('br-validations-node');

        const error = sinon.spy(brValidations, 'error');

        brValidations.emit('input', message);

        expect(error).to.have.been.calledWith('BrValidations Error: message.document must be sent!', message);

        done();
      });
    });
  });
});
