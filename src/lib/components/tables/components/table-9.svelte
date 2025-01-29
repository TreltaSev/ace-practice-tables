<script lang="ts">
	import { Table } from '@ui';
</script>

<!-- Table 9 -->
<Table._ class="" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" headCellClassName="pr-8" >
    <Table.Head headers={['Company', 'Model']} />
    <Table.Body>
        <Table.Row data={["Dodge", "Challenger"]}/>
        <Table.Row data={["Maruti", "Swift"]}/>
        <Table.Row data={["Jeep", "Wrangler"]}/>

        <!-- Fun Stuff-->
        <Table.Row data={["Disclaimer", "All these car company names and their model names are collected from the internet. You can change the company and yap yap yap, All these car company names and their model names are collected from the internet. You can change the company and yap yap yap... Why did I do this one?"]}/>

        <Table.Row data={["BMW", "BMW 5 Series"]}/>
    </Table.Body>
</Table._>