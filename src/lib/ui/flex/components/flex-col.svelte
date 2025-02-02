<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let el: $$Props['el'] = undefined;
</script>

<div bind:this={el} class={cn('flex flex-col', className)} {...$$restProps}>
	<slot />
</div>
