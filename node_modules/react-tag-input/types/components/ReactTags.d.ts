import type { Tag } from './SingleTag';
import type { ReactTagsWrapperProps } from '../';
/**
 * Props for the ReactTags component.
 */
type ReactTagsProps = ReactTagsWrapperProps & {
    placeholder: string;
    labelField: string;
    suggestions: Array<Tag>;
    delimiters: Array<number>;
    separators: Array<string>;
    autofocus?: boolean;
    autoFocus: boolean;
    inline?: boolean;
    inputFieldPosition: 'inline' | 'top' | 'bottom';
    allowDeleteFromEmptyInput: boolean;
    allowAdditionFromPaste: boolean;
    autocomplete: boolean | number;
    readOnly: boolean;
    allowUnique: boolean;
    allowDragDrop: boolean;
    tags: Array<Tag>;
    inputProps: {
        [key: string]: string;
    };
    editable: boolean;
    clearAll: boolean;
    ariaAttrs?: {
        clearAllLabel?: string;
    };
};
declare const ReactTags: (props: ReactTagsProps) => import("react/jsx-runtime").JSX.Element;
export default ReactTags;
