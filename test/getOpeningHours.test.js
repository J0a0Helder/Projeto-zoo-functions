const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';
  const object = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };

  it('retorna "The zoo is closed" quando o argumento passado for "Monday e 09:00-AM"', () => {
    const count = getOpeningHours('Monday', '09:00-AM');
    expect(count).toEqual(closed);
  });

  it('retorna "The zoo is open" quando o argumento passado for "Tuesday e 09:00-AM"', () => {
    const count = getOpeningHours('Tuesday', '09:00-AM');
    expect(count).toEqual('The zoo is open');
  });

  it('retorna "The zoo is open" quando o argumento passado for "friday e 00:00-PM"', () => {
    const count = getOpeningHours('friday', '00:00-PM');
    expect(count).toEqual('The zoo is open');
  });

  it('retorna "The zoo is closed" quando o argumento passado for "Wednesday e 09:00-PM"', () => {
    const count = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(count).toEqual(expected);
  });

  it('retorna uma exceção com a mensagem: "The day must be valid. Example: Monday" quando o argumento passado for "Wed e 09:00-PM"', () => {
    const count = () => getOpeningHours('wend', '09:00');
    const dayError = 'The day must be valid. Example: Monday';
    expect(count).toThrowError(new Error(dayError));
  });

  it('retorna uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'" quando o argumento passado for "Wednesday e 09:00-JH"', () => {
    const count = () => getOpeningHours('Wednesday', '09:00-JH');
    expect(count).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('retorna uma exceção com a mensagem: "The hour should represent a number" quando o argumento passado for "Friday e JH09:00-PM"', () => {
    const count = () => getOpeningHours('Friday', 'JH09:00-PM');
    expect(count).toThrowError(new Error('The hour should represent a number'));
  });

  it('retorna uma exceção com a mensagem: "The minutes should represent a number" quando o argumento passado for "Saturday e 09:c0-AM"', () => {
    const count = () => getOpeningHours('Saturday', '09:c0-AM');
    expect(count).toThrowError(new Error('The minutes should represent a number'));
  });

  it('retorna uma exceção com a mensagem: "The hour must be between 0 and 12" quando o argumento passado for "Tuesday e 13:00-PM"', () => {
    const count = () => getOpeningHours('Tuesday', '13:00-PM');
    expect(count).toThrowError(new Error('The hour must be between 0 and 12'));
  });

  it('retorna uma exceção com a mensagem: "The minutes must be between 0 and 59" quando o argumento passado for "Sunday e 09:60-AM"', () => {
    const count = () => getOpeningHours('Sunday', '09:60-AM');
    expect(count).toThrowError(new Error('The minutes must be between 0 and 59'));
  });

  it('retorna um objeto com os horarios e dias quando não forem passados argumentos', () => {
    const count = getOpeningHours('', '');
    expect(count).toEqual(object);
  });
});
