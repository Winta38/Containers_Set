import Team from '../team';

// Тест для конструктора класса Team:

test('should create an empty Team', () => {
    const team = new Team();
    expect(team.members.size).toBe(0);
});

// Тест для метода add():

test('should add a character to the team', () => {
    const team = new Team();
    const character = 'Gandalf';

    team.add(character);

    expect(team.members.size).toBe(1);
    expect(team.members.has(character)).toBe(true);
});

test('should throw an error if character is already added', () => {
    const team = new Team();
    const character = 'Legolas';

    team.add(character);

    expect(() => team.add(character)).toThrow(Error);
    expect(team.members.size).toBe(1);
});

// Тест для метода addAll():

test('should add multiple characters to the team', () => {
    const team = new Team();
    const characterList = ['Frodo', 'Sam', 'Merry', 'Pippin'];

    team.addAll(...characterList);

    expect(team.members.size).toBe(characterList.length);
    expect(team.members.has('Frodo')).toBe(true);
    expect(team.members.has('Sam')).toBe(true);
    expect(team.members.has('Merry')).toBe(true);
    expect(team.members.has('Pippin')).toBe(true);
});

// Тест для метода toArray():

test('should convert team members to an array', () => {
    const team = new Team();
    const characterList = ['Aragorn', 'Legolas', 'Gimli'];

    team.addAll(...characterList);

    expect(team.toArray()).toEqual(characterList);
});