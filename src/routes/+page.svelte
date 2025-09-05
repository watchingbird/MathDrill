<script lang="ts">
	import BinaryArithmeticOperation from '$lib/BinaryArithmeticOperation';
	import Operation from '$lib/Operation.svelte';
	import ArithmeticTile from '$lib/ArithmeticTile.svelte';
	import RangeControl from '$lib/RangeControl.svelte';

	const addition = new BinaryArithmeticOperation('+', 'Addition', (x, y) => x + y);
	const operations: ArithmeticOperation[] = [
		addition,
		//new BinaryArithmeticOperation('\u00f7', 'Division', (x, y) => x / y),
		new BinaryArithmeticOperation('\u22c5', 'Multiplication', (x, y) => x * y)
		//new BinaryArithmeticOperation('\u2212', 'Subtraction', (x, y) => x - y)
	];

	// Operation selected by the user.
	let operation = $state(addition);

	// Horizontal range.
	let xValues = $state([]);

	// Vertical range.
	let yValues = $state([]);
</script>

<header class="NoPrint">
	<form class="NoPrint">
		<h1>Drill Table</h1>
		<Operation bind:selected={operation} {operations} />
		<RangeControl title="Horizontal Values" bind:rangeValues={xValues} />
		<RangeControl title="Vertical Values" bind:rangeValues={yValues} />
		<hr />
	</form>
</header>
<main>
	<table id="drill-table">
		<caption>{operation.name} Drill Table</caption>
		<thead>
			<tr>
				<th>{operation.symbol}</th>
				{#each xValues as xValue (xValue)}
					<th>{xValue}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each yValues as yValue (yValue)}
				<tr>
					<th>{yValue}</th>
					{#each xValues as xValue (xValue)}
						<td>
							<ArithmeticTile
								application={operation.format([xValue, yValue])}
								value={operation.apply([xValue, yValue])}
							/>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<style>
	@media print {
		.NoPrint {
			display: none;
		}
	}

	td {
		border: black thin solid;
		border-collapse: collapse;
	}

	th {
		background-color: black;
		border: black thin solid;
		border-collapse: collapse;
		color: white;
		height: 5em;
		text-align: center;
		vertical-align: middle;
		width: 5em;
	}
</style>
