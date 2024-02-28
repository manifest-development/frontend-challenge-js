import convertNumber from '../utils/convertNumber';

export class User {
  name = '';

  income = 0;

  education = '';

  constructor(params) {
    this.name = params ? params.name ? params.name : '' : '';
    //This will handle the zero value entered
    if (params && params.income !== undefined && params.income !== null){
      thid.income=convertNumber(params.income);
    } else {
      this.income=0;
    }
    
    this.education = params && params.education ? params.education : '';
  }
}


