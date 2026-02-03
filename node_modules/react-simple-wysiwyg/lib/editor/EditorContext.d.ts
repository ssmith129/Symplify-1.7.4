import type { ReactNode } from 'react';
import React from 'react';
export declare const EditorContext: React.Context<EditorState | undefined>;
export declare function EditorProvider({ children }: {
    children: ReactNode;
}): React.JSX.Element;
export declare function useEditorState(): EditorState;
export interface EditorState {
    update(attrs: Partial<EditorState>): void;
    $el?: HTMLElement;
    $selection?: Node;
    htmlMode: boolean;
}
