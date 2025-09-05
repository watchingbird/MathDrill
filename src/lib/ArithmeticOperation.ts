export default abstract class ArithmeticOperation {
	/** Operation symbol.*/
	protected symbol: string;

	/** Operation name.*/
	protected name: string;

	protected constructor(symbol: string, name: string) {
		this.symbol = symbol;
		this.name = name;
	}

	/**
	 * Apply the operation to its arguments.
	 *
	 * @param args
	 * @return Result of performing the aperation
	 */
	public abstract apply(args: number[]): number;

	/**
	 * Returns a string representation of the operation with its arguments.
	 *
	 * @param args
	 * @return Formatted use of the operation
	 */
	public abstract format(args: number[]): string;

	/**
	 * Returns the name of the operation.
	 *
	 * @return Name of the operation
	 */
	public getName(): string {
		return this.name;
	}

	/**
	 * Returns the symbol used by the operation.
	 *
	 * @return Operation symbol
	 */
	public getSymbol(): string {
		return this.symbol;
	}
}
