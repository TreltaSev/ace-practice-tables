<script lang="ts">
	import { Flex, SpeedDial } from '@ui';

	import DarkMode from '~icons/ic/round-light-mode';
	import LightMode from '~icons/ic/round-dark-mode';

</script>


<Flex.Col class="size-full items-center justify-center gap-5 overflow-scroll">
	<SpeedDial._ class="relative">

		<!-- light/dark mode switcher -->
		<SpeedDial.Item>
			<LightMode/>
		</SpeedDial.Item>

	</SpeedDial._>	
</Flex.Col>