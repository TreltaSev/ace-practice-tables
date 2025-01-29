<script lang="ts">
	import { Table } from '@ui';
</script>

<!-- Table 7 -->
<Table._ class="" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" headCellClassName="pr-8">
    <Table.Head headers={['Company', 'Model']} />
    <Table.Body>
        <Table.Row data={["Dodge", "Challenger"]}/>
        <Table.Row data={["Maruti", "Swift"]}/>
        <Table.Row data={["Jeep", "Wrangler"]}/>

        <!-- Fun Stuff-->
         <Table.Row>
            <Table.Cell data="Ford" rowspan={3}/>
            <Table.Cell data="Fusion"/>
         </Table.Row>

         <Table.Row>
            <Table.Cell data="Fiesta"/>
         </Table.Row>

         <Table.Row>
            <Table.Cell data="Escape"/>
         </Table.Row>

        <Table.Row data={["BMW", "BMW 5 Series"]}/>
    </Table.Body>
</Table._>