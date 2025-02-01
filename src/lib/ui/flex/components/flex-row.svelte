<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;
	
	let className: $$Props['class'] = undefined;
	export { className as class }

	export let el: HTMLDivElement;
</script>

<div bind:this={el} class={cn('flex flex-row', className)} {...$$restProps}>
	<slot />
</div>
