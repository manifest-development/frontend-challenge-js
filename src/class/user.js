import convertNumber from '../utils/convertNumber';

export class User {
  name = '';

  income = '';

  education = '';

  constructor(params) {
    this.name = params ? params.name ? params.name : '' : '';
    this.income = params ? params.income >= 0 && params.income !== '' ? convertNumber(params.income) : '' : '';
    this.education = params ? params.education : '';
  }
}
