<script lang="ts">
	import { cn } from '@lib/utils';	
	import { Flex } from '@ui'
	import IconAdd from '~icons/material-symbols/add';
	import { SpeedDial } from '@ui';

	import type { Props } from '..';
	import { setCtx } from '../ctx';

	// -=-=-=-=- Static Classes -=-=-=-=- //
	const BUTTON_CLASS =
		'ease-in transition-all group flex flex-col w-10 h-10 rounded-full bg-primary-500 cursor-pointer hover:bg-primary-600 transition-colors items-center justify-center';
	const ICON_CLASS = 'transition-all ease-in text-white fill-current size-8';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;
	let className: $$Props['class'] = undefined;
	export { className as class };

	const { isActive$ } = setCtx();

</script>

<Flex._ class="fixed right-10 bottom-10">
	<button class={cn('z-1', BUTTON_CLASS, className)} on:click={() => isActive$.toggle()}>
		<IconAdd class={cn(ICON_CLASS, $isActive$ && "-rotate-45")} />
	</button>
	
	<SpeedDial.Menu class="z-0 rounded-full">
		<slot/>
	</SpeedDial.Menu>
</Flex._>