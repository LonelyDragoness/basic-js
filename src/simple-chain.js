const chainMaker = {
  chain: [],
  result: '',

  getLength() {
    this.chain = [];
    this.result = '';
    return this.chain.length;
  },
  addLink(value) {
    if (!arguments.length) {
      this.chain.push(' ')
    } else {
      this.chain.push(`${value}`);
    }
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || this.chain.length === -1 || this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error;
    }
    else {this.chain.splice(position - 1, 1)}
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    this.result += '( '+ this.chain[0].toString() + ' )';
    for (let i = 1; i < this.chain.length; i++) {
      this.result += '~~( ' + this.chain[i].toString() + ' )';
    }
    let returnResult = this.result;
    this.result = [];
    this.chain = [];
    return returnResult;
  },
};

module.exports = chainMaker;
