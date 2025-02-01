import { getContext, setContext } from 'svelte';
import { type tSpeedDialProps } from './types';
import { toggle_writable, type ToggleableWritable } from '@lib/internal/store';
import { removeUndefined } from '@lib/internal';
import { writable, type Writable } from 'svelte/store';

export function createSpeedDial(props: tSpeedDialProps) {
	const isActive$: ToggleableWritable = toggle_writable(false);
	const itemCount$: Writable<number> = writable(0);
	const speedDialSize$: Writable<number> = writable(10+10);

	itemCount$.subscribe((item_count) => {
		speedDialSize$.update((current_size) => {
			current_size = 10+(10 * item_count)
			return current_size
		})
	})

	return {
		...props,
		isActive$,
		itemCount$,
		speedDialSize$
	};
}

export function getSpeedDialData() {
	const NAME = 'speed-dial' as const;
	const SUBMENU_NAME = 'speed-dial-submenu' as const;

	return {
		NAME,
		SUBMENU_NAME
	};
}

export function setCtx(props: tSpeedDialProps = {}) {
	const { NAME } = getSpeedDialData();

	const speedDial = {
		...createSpeedDial({ ...removeUndefined(props) })
	};

	setContext(NAME, speedDial);

	return {
		...speedDial
	};
}

type GetReturn = ReturnType<typeof setCtx>;
export function getCtx() {
	const { NAME } = getSpeedDialData();
	return getContext<GetReturn>(NAME);
}