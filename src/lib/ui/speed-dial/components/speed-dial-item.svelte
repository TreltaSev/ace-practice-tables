<script lang="ts">
	import { cn } from '@lib/utils';
	import type { ItemProps } from '..';

    import { Flex } from "@ui"

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = ItemProps;
	
	let className: $$Props['class'] = undefined;
	export { className as class }
</script>

<Flex.Col class={cn('', className)} {...$$restProps}>
	<slot />
</Flex.Col>
