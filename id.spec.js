
describe('First group of tests', () => {
    test('Jest is working', () => {
        expect(1).toBe(1);
    });
});

test('returns a random number', () => {
    function getNewId() {
      return  Math.random()
    }
    const mockMath = Object.create(global.Math);
    mockMath.random = jest.fn(() => 0.75);
    global.Math = mockMath;
    const id = getNewId();
    expect(id).toBe(0.75);
});
