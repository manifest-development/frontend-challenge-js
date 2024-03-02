import convertNumber from '../utils/convertNumber';

export class User {
  name = '';

  income = null;

  education = '';

  constructor(params) {
    this.name = params ? params.name ? params.name : '' : '';
    this.income = params
      ? params.income >= 0 && params.income != null ? convertNumber(params.income) : null : null;
    this.education = params ? params.education : '';
  }
}
