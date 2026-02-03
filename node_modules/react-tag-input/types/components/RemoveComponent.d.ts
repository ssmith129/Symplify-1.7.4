import React from 'react';
import { Tag } from './SingleTag';
export interface RemoveComponentProps {
    onRemove: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
    readOnly: boolean;
    removeComponent?: React.ComponentType<any>;
    className?: string;
    tag: Tag;
    index: number;
}
declare const RemoveComponent: (props: RemoveComponentProps) => import("react/jsx-runtime").JSX.Element;
export default RemoveComponent;
