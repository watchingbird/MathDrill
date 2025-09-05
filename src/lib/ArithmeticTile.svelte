<script lang="ts">
	/**
	 * An arithmetic function.
	 */
	interface Operation {
		/** Operation being performed, as a formatted text string.*/
		application: string;

		/** Value of the operation, when evaluated.*/
		value: number;
	}

	let { application, value }: Operation = $props();

	/** Indicator to show application or value.*/
	let isAnswer: boolean = $state(false);

	/** Text to be displayed in the tile.*/
	let text: string = $derived(isAnswer ? value : application);

	function hideAnswer() {
		isAnswer = false;
	}

	function toggleText() {
		isAnswer = !isAnswer;
	}
</script>

<button
	class="ArithmeticTile {isAnswer ? 'Answer' : 'Problem'}"
	type="button"
	onblur={hideAnswer}
	onclick={toggleText}
>
	{text}
</button>

<style>
	.Answer {
		background-color: black;
		color: white;
		text-align: center;
		vertical-align: middle;
	}

	.ArithmeticTile {
		height: 5em;
		width: 5em;
	}

	.Problem {
		background-color: white;
		color: black;
		text-align: center;
		vertical-align: top;
	}
</style>
