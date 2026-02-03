import React from 'react';
export interface Tag {
    id: string;
    className: string;
    [key: string]: string;
}
export interface TagProps {
    labelField?: string;
    onDelete: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
    tag: Tag;
    moveTag?: (dragIndex: number, hoverIndex: number) => void;
    removeComponent?: React.ComponentType<any>;
    onTagClicked: (event: React.MouseEvent<HTMLSpanElement> | React.TouchEvent<HTMLSpanElement>) => void;
    classNames: {
        tag: string;
        remove: string;
    };
    readOnly: boolean;
    index: number;
    allowDragDrop: boolean;
    tags: Tag[];
}
declare const SingleTag: (props: TagProps) => import("react/jsx-runtime").JSX.Element;
export { SingleTag };
