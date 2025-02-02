<script lang="ts">
	import { Flex, SpeedDial } from '@ui';

	import DarkMode from '~icons/ic/round-light-mode';
	import LightMode from '~icons/ic/round-dark-mode';
	import AddIcon from '~icons/mingcute/add-fill';
	import WindowIcon from '~icons/material-symbols/select-window';

	import type { ToggleableWritable } from '@lib/internal';
	import { cn } from '@lib/utils';
	import { tables } from '@lib/components/tables';
	import { global_mode$ } from '@lib/stores/mode';
	import { writable, type Writable } from 'svelte/store';

	let mode$: Writable<'dark' | 'light' | string> = global_mode$.mode$;

	let parentActive$: ToggleableWritable;
	let currentTable$: Writable<number> = writable(0);

	function change_table(index: number): void  {
		currentTable$.set(index)
	}

</script>

<Flex.Col class="size-full items-center justify-center gap-5 overflow-scroll select-none">

	<svelte:component this={tables[$currentTable$]}/>

	<!-- Speed Dial -->
	<SpeedDial.Menu
		bind:isActive$={parentActive$}
		direction="left"
		anchorClass="fixed right-10 bottom-10"
		parent
	>
		<!-- Main Anchor -->
		<SpeedDial.Item
			slot="anchor"
			class="group [&>svg]:transition-all [&>svg]:ease-in-out bg-primary-500 hover:bg-primary-400 text-gray-300"
		>
			<AddIcon
				class={cn(
					'shrink-0 text-white group-hover:rotate-20',
					$parentActive$ && 'group-hover:-rotate-30'
				)}
			/>
		</SpeedDial.Item>

		<!-- dark/light mode -->
		<SpeedDial.Item
			class="bg-primary-800 hover:bg-primary-700"
			on:click={() => global_mode$.toggle()}
		>
			{#if $mode$ == 'dark'}
				<LightMode class="shrink-0 text-gray-300" />
			{:else}
				<DarkMode class="shrink-0 text-gray-300" />
			{/if}
		</SpeedDial.Item>

		<!-- Tables -->
		<SpeedDial.Menu direction="up" class="flex-col-reverse">
			<SpeedDial.Item slot="anchor" class="bg-primary-800 hover:bg-primary-700">
				<WindowIcon class="shrink-0 text-gray-300" />
			</SpeedDial.Item>
			{#each tables as table, index}
				<SpeedDial.Item class="bg-primary-700 hover:bg-primary-600 text-gray-300" on:click={() => change_table(index)}>
					<span class="font-sans text-gray-300">{index + 1}</span>
				</SpeedDial.Item>
			{/each}
		</SpeedDial.Menu>
	</SpeedDial.Menu>
</Flex.Col>
