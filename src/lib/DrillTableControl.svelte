<script lang="ts">
	/** Maximum value to show in the drill.*/
	let maxValue: number = $state(10);

	/** Minimum value to show in the drill.*/
	let minValue: number = $state(0);

	/** Incremental value for the drill.*/
	let step: number = $state(1);
</script>

<form>
	<label for="min-input">Top value range:</label>
	<input id="min-input" min="0" name="minValue" required type="number" value={minValue} />
	<span>to</span>
	<input id="max-input" min="0" name="maxValue" required type="number" value={maxValue} />
	<label for="step">Step:</label>
	<input id="step" min="1" name="step" required type="number" value={step} />
</form>
