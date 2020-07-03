import Caesar from '../encryption_methods/caesar/caesar-logic';

class Encryption {
  constructor(props) {
    this.props = props;
    this.Caesar = Caesar;
  }

  static Caesar = () => {
    let val = Caesar.encrypt(this.props);
    console.log(val);
  };
}

const encrypted = new Encryption(
  'hello there',
  'ignore',
  'include',
  'abcdefghijklmnopqrstuvwxyz'
);

console.log(encrypted.Caesar());

export default encrypted.Caesar();
