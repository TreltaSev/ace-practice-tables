import { getContext, setContext } from "svelte";
import { type tSpeedDialProps } from "./types";
import { toggle_writable, type ToggleableWritable } from "@lib/internal/store";
import { removeUndefined } from "@lib/internal";

export function createSpeedDial(props: tSpeedDialProps) {
    const isActive$: ToggleableWritable = toggle_writable(false);

    return {
        ...props,
        isActive$: isActive$
    }
}

export function getSpeedDialData() {
    const NAME = "speed-dial" as const;

    return {
        NAME,
    }
}

export function setCtx(props: tSpeedDialProps = {}) {
    const { NAME } = getSpeedDialData();

    const speedDial = {
        ...createSpeedDial({...removeUndefined(props)})
    }

    setContext(NAME, speedDial)

    return {
        ...speedDial      
    }
}

type GetReturn = ReturnType<typeof setCtx>;
export function getCtx() {
    const { NAME } = getSpeedDialData();
    return getContext<GetReturn>(NAME)
}