<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

    import { Flex } from "@ui"
	import IconAdd from '~icons/material-symbols/add';


	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;
	
	let className: $$Props['class'] = undefined;
	export { className as class }
</script>

<Flex.Col class={cn('fixed right-10 bottom-10 w-10 h-10 rounded-full bg-primary-500 cursor-pointer hover:bg-primary-600 transition-colors items-center justify-center', className)} {...$$restProps}>
	<IconAdd class={cn('fill-current size-8', 'text-white')}/>
</Flex.Col>
 