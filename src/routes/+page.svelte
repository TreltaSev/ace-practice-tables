<script lang="ts">
	import { Flex, Table } from '@ui';
	import { tables } from '@lib/components/tables';
	import clsx from 'clsx';

</script>

<Table.Selector>1</Table.Selector>

<Flex.Col class="size-full items-center justify-center gap-5">
	{#each tables as Table}
		<svelte:component this={Table}/>
	{/each}
</Flex.Col>


<!--
align_items:c enter
justify_content

-->
