<script lang="ts">
	import { Table } from '@ui';
</script>

<!-- Table 1 -->
<Table._ class="hidden" headCellClassName="pr-8">
    <Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
    <Table.Body>
        <Table.Row data={['David', 85, 87, 88, 92, 88]} />
        <Table.Row data={['Richard', 85, 87, 88, 92, 92]} />
        <Table.Row data={['John', 85, 87, 88, 92, 88]} />
        <Table.Row data={['David', 85, 87, 88, 92, 88]} />
    </Table.Body>
</Table._>