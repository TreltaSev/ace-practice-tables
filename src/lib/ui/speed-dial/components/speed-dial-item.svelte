<script lang="ts">
	import { cn } from '@lib/utils';
	import type { ItemProps } from '..';

    import { Flex } from "@ui"
	import { getCtx } from '../ctx';
	import { onDestroy, onMount } from 'svelte';

 	// -=-=-=-=- Static Classes -=-=-=-=- //
    const ITEM_CLASS = "hover:bg-stone-100 transition-all ease-in cursor-pointer w-10 h-10 rounded-full items-center justify-center text-primary-950"

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = ItemProps;

	const { itemCount$ } = getCtx()
	
	let className: $$Props['class'] = undefined;
	export { className as class }

	onMount(() => {
		itemCount$.update((item_count) => {
			return item_count + 1
		})
	})

	onDestroy(() => {
		itemCount$.update((item_count) => {
			return item_count - 1
		})
	})
	
</script>

<Flex.Col class={cn('', ITEM_CLASS, className)} {...$$restProps}>
	<slot />
</Flex.Col>
