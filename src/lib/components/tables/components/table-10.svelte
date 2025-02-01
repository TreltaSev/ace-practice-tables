<script lang="ts">
	import { Table } from '@ui';
</script>

<!-- Table 10 -->
<Table._
	class=""
	itemClassName="p-1 h-[115px] aspect-square text-center border-solid border-1 border-gray-400 dark:border-gray-600"
	headCellClassName="pr-8"
>
	<Table.Head headers={['Sno', 'Fruit Name', 'Quantity']} />
	<Table.Body>
		<Table.Row data={[1, 'Orange', 60]} />
		<Table.Row data={[2, 'Mango', 50]} />
		<Table.Row data={[3, 'Pineapple', 30]} />
	</Table.Body>
</Table._>
