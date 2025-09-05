import ArithmeticOperation from '$lib/ArithmeticOperation';

type BinaryOperation = (arg1: number, arg2: number) => number;

/**
 * An arithmetic operation which requires 2 arguments for application.
 */
export default class BinaryArithmeticOperation extends ArithmeticOperation {
	/** Operation which is to be executed.*/
	private doOperate: BinaryOperation;

	public constructor(symbol: string, name: string, doOperate: BinaryOperation) {
		super(symbol, name);
		this.doOperate = doOperate;
	}

	public apply(args: number[]): number {
		const result = this.doOperate(args[0], args[1]);

		return result;
	}

	public format(args: number[]): string {
		const result = `${args[0]} ${this.symbol} ${args[1]}`;

		return result;
	}
}
