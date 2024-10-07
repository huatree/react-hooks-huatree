import * as hooksHuatree from '..';

describe('hooksHuatree', () => {
  test('exports modules should be defined', () => {
    Object.keys(hooksHuatree).forEach((module) => {
      expect(hooksHuatree[module]).toBeDefined();
    });
  });
});
