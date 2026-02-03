import React from 'react';
import type { FC, HTMLAttributes } from 'react';
import { EditorState } from '../editor/EditorContext';
export declare const BtnStyles: React.FC<DropDownFactoryProps>;
export declare function createDropdown(title: string, items: DropDownItem[]): FC<DropDownFactoryProps>;
export declare function Dropdown({ items, selected, ...inputProps }: DropdownProps): React.JSX.Element;
export type DropDownItem = [
    string,
    string | ((editorState: EditorState) => void),
    string
];
export interface DropDownFactoryProps extends HTMLAttributes<HTMLSelectElement> {
    selected?: number;
}
export interface DropdownProps extends DropDownFactoryProps {
    items: DropDownItem[];
}
