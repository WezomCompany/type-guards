import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { describe } from 'vitest';
import { isNotEmptyArray } from '../isNotEmptyArray';

describe('Negative cases', () => {
	jestFunctionSignatureTest(isNotEmptyArray, [
		{
			name: 'Undefined',
			parameters: [undefined],
			expected: false,
		},
		{
			name: 'Null',
			parameters: [null],
			expected: false,
		},
		{
			name: 'Number',
			parameters: [1],
			expected: false,
		},
		{
			name: 'Boolean',
			parameters: [true],
			expected: false,
		},
		{
			name: 'Object',
			parameters: [{}],
			expected: false,
		},
		{
			name: 'Empty Array',
			parameters: [[]],
			expected: false,
		},
		{
			name: 'Empty Array created by Array constructor',
			parameters: [new Array(0)],
			expected: false,
		},
		{
			name: 'Empty string',
			parameters: [''],
			expected: false,
		},
	]);
});

describe('Positive cases', () => {
	jestFunctionSignatureTest(isNotEmptyArray, [
		{
			name: 'Array with elements',
			parameters: [[1, 2, 3]],
			expected: true,
		},
		{
			name: 'Array created by Array constructor',
			parameters: [new Array(10)],
			expected: true,
		},
		{
			name: 'Array with forced element place',
			parameters: (): Parameters<typeof isNotEmptyArray> => {
				const arr = [];
				arr.length = 10;
				return [arr];
			},
			expected: true,
		},
	]);

	const emptyArray = [];
	emptyArray.length = 10;
});
