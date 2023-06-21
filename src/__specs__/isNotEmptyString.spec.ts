import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { isNotEmptyString } from '../isNotEmptyString';
import { describe } from 'vitest';

describe('Negative cases', () => {
	jestFunctionSignatureTest(isNotEmptyString, [
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
			name: 'Array with elements',
			parameters: [['A', 'B', 'C']],
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
	jestFunctionSignatureTest(isNotEmptyString, [
		{
			parameters: ['A'],
			expected: true,
		},
	]);
});
