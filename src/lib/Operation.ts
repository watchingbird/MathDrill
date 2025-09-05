import ArithmeticOperation from '$lib/ArithmeticOperation';

export interface OperationSelectSpec {
	operations: ArithmeticOperation[];
	selected: ArithmeticOperation;
}
