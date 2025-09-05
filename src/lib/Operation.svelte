<script lang="ts">
	import ArithmeticOperation from '$lib/ArithmeticOperation';

	interface OperationSelectionSpec {
		operations: ArithmeticOperation[];
		selected: ArithmeticOperation;
	}

	let { selected = $bindable({}), operations }: OperationSelectionSpec = $props();
</script>

<fieldset>
	<label for="operation-select">Operation</label>
	<select id="operation-select" bind:value={selected}>
		{#each operations as op (op.getName())}
			<option value={op}>{op.getName()}</option>
		{/each}
	</select>
</fieldset>
