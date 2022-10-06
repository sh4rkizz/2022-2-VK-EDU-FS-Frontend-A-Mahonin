/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
    expect(convertBytesToHuman(-1)).toBe(false)
    expect(convertBytesToHuman(Infinity)).toBe(false)
    expect(convertBytesToHuman(12.21)).toBe(false)
    expect(convertBytesToHuman('12345')).toBe(false)
    expect(convertBytesToHuman([1, 2, 3])).toBe(false)
    expect(convertBytesToHuman(undefined)).toBe(false)
})

test('Возвращает корректное значение для чисел', () => {
    expect(convertBytesToHuman(0)).toBe('0 B')
    expect(convertBytesToHuman(150)).toBe('150 B')
    expect(convertBytesToHuman(1024)).toBe('1 KB')
    expect(convertBytesToHuman(1150)).toBe('1.12 KB')
    expect(convertBytesToHuman(41723647364767)).toBe('37.95 TB')
    expect(convertBytesToHuman(2417851639229258349412352000)).toBe('2000 YB')
})
