describe('matcher', () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });

    test('object assignment', () => {
        const data: any = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    });

    test('array assignment', () => {
        const data: number[] = [1];
        data.push(2);
        expect(data).toEqual([1, 2]);
    });

    test('null', () => {
        const n = null;
        expect(n).toBeNull();
    });

    test('undefined', () => {
        const t = undefined;
        expect(t).toBeUndefined();
      });

    test('has defined', () => {
        const t = 'hello';
        expect(t).toBeDefined();
    });

    test('true', () => {
        const t = true;
        expect(t).toBeTruthy();
    });

    test('false', () => {
        const f = false;
        expect(f).toBeFalsy();
    });

    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeLessThan(5);
    });

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    test('the shopping list has milk on it', () => {
        const shoppingList = ['diapers', 'kleenex', 'trash bags', 'milk'];
        expect(shoppingList).toContain('milk');
    });
});