import type { ForwardedRef } from 'react';
export declare function autoconfigureTextDirection(el: HTMLElement | undefined): void;
export declare function cls(...classNames: unknown[]): string;
export declare function getSelectedNode(): Node | undefined;
export declare function normalizeHtml(str: unknown): string;
export declare function replaceCaret(el: HTMLElement): void;
export declare function setForwardRef<T = HTMLDivElement>(el: T, ref?: ForwardedRef<T>): void;
