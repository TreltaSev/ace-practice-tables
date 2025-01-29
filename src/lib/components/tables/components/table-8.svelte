<script lang="ts">
	import { Table } from '@ui';
</script>

<!-- Table 8 -->
<Table._ class="" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" headCellClassName="pr-8">
    <Table.Head headers={['Company', 'Model']} />
    <Table.Body>
        <Table.Row data={["Dodge", "Challenger"]}/>
        <Table.Row data={["Maruti", "Swift"]}/>
        <Table.Row data={["Jeep", "Wrangler"]}/>

        <!-- Fun Stuff-->
        <Table.Row>
            <Table.Cell colspan={2} data="All these car company names and their model names are collected from the internet. You can change the company and yap yap yap"/>
        </Table.Row>

        <Table.Row data={["BMW", "BMW 5 Series"]}/>
    </Table.Body>
</Table._>