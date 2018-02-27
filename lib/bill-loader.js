const request = require('request');
const { xml2json } = require('xml-js');

class BillLoader {
  constructor(params = {}) {
    this.congress = params.congress;
    this.legisNum = params.legisNum;
    this.url = `https://www.congress.gov/bils/${this.congress}/${
      this.legisNum
    }/BILLS-${this.congress + this.legisNum}hr.xml`;
    this.bill = {
      json: null,
      text: null,
      xml: null
    };
  }

  async get() {
    try {
      this.bill.xml = await request.get(this.url).body;
      this.bill.json = xml2json(this.bill.xml);
    } catch (error) {
      this.bill.xml = null;
    }
    return this.bill;
  }
}

module.exports = BillLoader;
