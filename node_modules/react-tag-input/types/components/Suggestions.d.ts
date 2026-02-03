import { ReactNode } from 'react';
import { Tag } from './SingleTag';
interface SuggestionsProps {
    /**
     * The current query string.
     */
    query: string;
    /**
     * The array of suggestions to display.
     */
    suggestions: Array<any>;
    /**
     * The field to use for the label of each suggestion.
     */
    labelField: string;
    /**
     * The index of the currently selected suggestion.
     */
    selectedIndex: number;
    /**
     * Whether the input field is currently focused.
     */
    isFocused: boolean;
    /**
     * Handler for click events on suggestions.
     * @param {number} index - The index of the clicked suggestion.
     */
    handleClick: (index: number) => void;
    /**
     * Handler for hover events on suggestions.
     * @param {number} index - The index of the hovered suggestion.
     */
    handleHover: (index: number) => void;
    /**
     * CSS class names to apply to the suggestions container and active suggestion.
     */
    classNames: {
        suggestions: string;
        activeSuggestion: string;
    };
    /**
     * Optional function to determine whether to render suggestions.
     * @param {string} query - The current query string.
     * @returns {boolean} - Whether to render suggestions.
     */
    shouldRenderSuggestions?: (query: string) => boolean;
    /**
     * Optional function to render a custom suggestion.
     * @param {Tag} item - The suggestion to render.
     * @param {string} query - The current query string.
     * @returns {ReactNode} - The rendered suggestion.
     */
    renderSuggestion?: (tag: Tag, query: string) => ReactNode;
    /**
     * The minimum length of the query string required to render suggestions.
     */
    minQueryLength?: number;
}
export declare const arePropsEqual: (prevProps: SuggestionsProps, nextProps: SuggestionsProps) => boolean;
declare const Suggestions: import("react").MemoExoticComponent<(props: SuggestionsProps) => import("react/jsx-runtime").JSX.Element | null>;
export default Suggestions;
