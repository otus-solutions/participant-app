import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    const user = new User();
    expect(user).toBeTruthy();
    expect(user.id = 'id').toEqual(user.id);
    expect(user.birthdate = 'birthdate').toEqual(user.birthdate);
    expect(user.surname = 'surname').toEqual(user.surname);
    expect(user.email = 'email').toEqual(user.email);
    expect(user.sex = 'sex').toEqual(user.sex);
    expect(user.name = 'name').toEqual(user.name);
  });

  it('should fill the fields fromJson', () => {
    const user = new User();
    user.fromJSON({_id: 'id', birthdate: 'birthdate', surname: 'surname', email: 'email', sex: 'sex', name: 'name'});
    expect('id').toEqual(user.id);
    expect('birthdate').toEqual(user.birthdate);
    expect('surname').toEqual(user.surname);
    expect('email').toEqual(user.email);
    expect('sex').toEqual(user.sex);
    expect('name').toEqual(user.name);
  });

  it('should convert user to Json', () => {
    const user = new User();
    user.fromJSON({_id: 'id', birthdate: 'birthdate', surname: 'surname', email: 'email', sex: 'sex', name: 'name'});
    expect({id: 'id', birthdate: 'birthdate', surname: 'surname', email: 'email', sex: 'sex', name: 'name'}).toEqual(user.toJSON());
  });
});
