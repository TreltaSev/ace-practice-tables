import type { ClassValue } from "clsx";
import type { HTMLAttributes } from "svelte/elements";

export type tSpeedDialItemProps = HTMLAttributes<HTMLDivElement>;

export type tSpeedDialMenuProps = HTMLAttributes<HTMLDivElement> & {
    direction?: "up" | "right" | "down" | "left",
    anchor?: HTMLElement | string,
    anchorClass?: ClassValue,
    parent?: boolean
}