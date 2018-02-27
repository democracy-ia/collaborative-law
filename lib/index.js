const { xml2json } = require('xml-js');

const collaborativeLaw = {
  bills: [],
  load: {
    bill: {
      fromString(text) {
        const bill = {};
        bill.xml = text;
        bill.json = xml2json(bill.xml, {
          compact: false,
          spaces: 2
        });
        return bill;
      }
    }
  }
};

module.exports = collaborativeLaw;
