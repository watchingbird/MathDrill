<script lang="ts">
	interface RangeControlSpec {
		/** Maximum value to show in the drill.*/
		end?: number | undefined;

		/** Minimum value to show in the drill.*/
		start?: number | undefined;

		/** Increment of values in the range.*/
		step?: number | undefined;

		/** Title for the range.*/
		title: string;

		rangeValues: number[];
	}

	function getRangeValues(start: number, end: number, step: number = 1): number[] {
		const values = [];
		for (let current = start; current <= end; current += step) {
			values.push(current);
		}

		return values;
	}

	function onchange() {
		rangeValues = getRangeValues(start, end, step);
	}

	let {
		end = 9,
		start = 1,
		step = 1,
		title,
		rangeValues = $bindable([])
	}: RangeControlSpec = $props();
	onchange();
</script>

<fieldset>
	<legend>{title}</legend>
	<label for="from">From</label>
	<input
		id="from"
		min="0"
		name="from"
		required
		step="1"
		type="number"
		bind:value={start}
		{onchange}
	/>

	<label for="to">to</label>
	<input id="to" min="0" name="to" required step="1" type="number" bind:value={end} {onchange} />

	<label for="step">stepping by</label>
	<input
		id="step"
		min="1"
		name="step"
		required
		step="1"
		type="number"
		bind:value={step}
		{onchange}
	/>
</fieldset>
