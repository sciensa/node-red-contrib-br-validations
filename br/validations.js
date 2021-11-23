const BrValidations = require('br-validations');

module.exports = (RED) => {
  function BrValidationsNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.cpf = config.cpf;
    node.cnpj = config.cnpj;
    node.pis = config.pis;

    const validate = (document) => {
      if (node.cpf && BrValidations.cpf.validate(document)) {
        return true;
      }

      if (node.cnpj && BrValidations.cnpj.validate(document)) {
        return true;
      }

      if (node.pis && BrValidations.pis.validate(document)) {
        return true;
      }

      return false;
    };

    const isAnySelected = () => node.cpf || node.cnpj || node.pis;

    node.on('input', (message) => {
      if (/^[\s\xa0]*$/.test(message.document || '')) {
        node.error('BrValidations Error: message.document must be sent!', message);
      } else if (!isAnySelected()) {
        node.error('BrValidations Config Error: at least one Document Type must be checked!', message);
      } else if (validate(message.document)) {
        node.send([message, null]);
      } else {
        node.send([null, message]);
      }
    });
  }

  RED.nodes.registerType('BrValidations', BrValidationsNode);
};
