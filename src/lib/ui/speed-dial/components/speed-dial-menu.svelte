<script lang="ts">
	import { cn } from '@lib/utils';
	import type { MenuProps } from '..';

    import { Flex } from "@ui"
    import { type Props as tFlexProps } from '@ui/flex';

    import { getCtx } from '../ctx';
	import { get } from 'svelte/store';

    // -=-=-=-=- Static Classes -=-=-=-=- //
    const MENU_CLASS = "absolute top-0 right-0 h-10 bg-white transition-all ease-in z-1"

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = MenuProps;
    type $$FlexProps = tFlexProps;

	let className: $$Props['class'] = undefined;
    let el: $$FlexProps['el'] = undefined;
	export { className as class }

    const { isActive$, itemCount$, speedDialSize$ } = getCtx();


    


</script>

<Flex.Row bind:el class={cn('box-border pr-10 w-10', MENU_CLASS, className, $isActive$ && `w-${get(speedDialSize$)}`)} {...$$restProps}>
	<slot />
</Flex.Row>
