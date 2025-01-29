<script lang="ts">
	import { Table } from '@ui';
</script>

<!-- Table 11 -->
<Table._ class="" itemClassName="border-solid border-r border-gray-400 dark:border-gray-600" headCellClassName="pr-8" captionClassName="bg-gray-400 dark:bg-gray-900">
    <Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
    <Table.Body data={[
        ['David', 85, 87, 88, 92, 88],
        ['Richard', 85, 87, 88, 92, 92],
        ['John', 85, 87, 88, 92, 88],
        ['David', 85, 87, 88, 92, 88]
    ]}/>
</Table._>