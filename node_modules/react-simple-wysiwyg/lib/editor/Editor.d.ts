import { ComponentProps } from 'react';
import React from 'react';
import { ContentEditableProps } from './ContentEditable';
import '../styles.css';
export declare const Editor: React.ForwardRefExoticComponent<EditorProps & React.RefAttributes<HTMLDivElement>>;
export interface EditorProps extends ContentEditableProps {
    containerProps?: ComponentProps<'div'>;
}
