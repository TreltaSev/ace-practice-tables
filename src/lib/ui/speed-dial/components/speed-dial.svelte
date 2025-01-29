<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

    import { Flex } from "@ui"

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;
	
	let className: $$Props['class'] = undefined;
	export { className as class }
</script>

<Flex.Col class={cn('', className)} {...$$restProps}>
	<slot />
</Flex.Col>
