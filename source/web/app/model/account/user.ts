export class User {

  public id: string;

  public name: string;

  public surname: string;

  public email: string;

  public sex: string;

  public birthdate: string;

  public billing: any;

  public fromJSON(userJson) {
    this.id = userJson._id;
    this.name = userJson.name;
    this.surname = userJson.surname;
    this.email = userJson.email;
    this.sex = userJson.sex;
    this.birthdate = userJson.birthdate;
    if (userJson.billing) {
      this.billing = userJson.billing;
    }
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      sex: this.sex,
      birthdate: this.birthdate
    };
  }
}
