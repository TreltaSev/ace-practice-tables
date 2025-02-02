<script lang="ts">
	import { Flex, SpeedDial } from '@ui';

	import DarkMode from '~icons/ic/round-light-mode';
	import LightMode from '~icons/ic/round-dark-mode';
</script>


<Flex.Col class="size-full items-center justify-center gap-5 overflow-scroll">
	<SpeedDial.Menu direction="left" anchorClass="fixed right-10 bottom-10" parent>
		<SpeedDial.Item slot="anchor">
			<DarkMode class="shrink-0 text-black"/>
		</SpeedDial.Item>

		<SpeedDial.Item>
			<LightMode class="shrink-0 text-black"/>
		</SpeedDial.Item>

		<SpeedDial.Item>
			<DarkMode class="shrink-0 text-black"/>
		</SpeedDial.Item>

		<SpeedDial.Menu direction="up">
			<SpeedDial.Item slot="anchor">
				<DarkMode class="shrink-0 text-black"/>
			</SpeedDial.Item>
	
			<SpeedDial.Item>
				<LightMode class="shrink-0 text-black"/>
			</SpeedDial.Item>
		</SpeedDial.Menu>
	</SpeedDial.Menu>
</Flex.Col>