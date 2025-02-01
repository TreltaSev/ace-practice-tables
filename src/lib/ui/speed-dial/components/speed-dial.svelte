<script lang="ts">
	import { cn } from '@lib/utils';	
	import IconAdd from '~icons/material-symbols/add';

	import type { Props } from '..';
	import { setCtx } from '../ctx';
	import { onMount } from 'svelte';

	// -=-=-=-=- Static Classes -=-=-=-=- //
	const BUTTON_CLASS =
		'ease-in transition-all group flex flex-col fixed right-10 bottom-10 w-10 h-10 rounded-full bg-primary-500 cursor-pointer hover:bg-primary-600 transition-colors items-center justify-center';
	const ICON_CLASS = 'transition-all ease-in text-white fill-current size-8';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;
	let className: $$Props['class'] = undefined;
	export { className as class };

	const { isActive$ } = setCtx();

</script>

<button class={cn(BUTTON_CLASS, className)} on:click={() => isActive$.toggle()}>
	<IconAdd class={cn(ICON_CLASS, $isActive$ && "-rotate-45")} />
</button>
