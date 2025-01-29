<script lang="ts">
	import { Table } from '@ui';
</script>

<!-- Table 4 -->
<Table._ class="" oddRowClassName="bg-gray-800" evenRowClassName="bg-gray-700" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" caption="STUDENTS MARK SHEET" headCellClassName="pr-8" captionClassName="bg-gray-400 dark:bg-gray-900">
    <Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
    <Table.Body data={[
        ['David', 85, 87, 88, 92, 88],
        ['Richard', 85, 87, 88, 92, 92],
        ['John', 85, 87, 88, 92, 88],
        ['David', 85, 87, 88, 92, 88]
    ]}/>
</Table._>