import React from 'react';
import { Filter, Matcher, Node, NodeConfig, MatchResponse, ChildrenNode } from './index';
export declare const TOKEN_LOCATIONS: string[];
export declare const SOURCE_PROP: {
    compact: boolean;
    locale: string;
    version: string;
};
export declare const VALID_EMOJIS: string[][];
export declare function createExpectedToken<T>(value: T, factory: (value: T, count: number) => React.ReactNode, index: number, join?: boolean): React.ReactNode | string;
export declare const MOCK_MARKUP = "<main role=\"main\">\n  Main content\n  <div>\n    <a href=\"#\">Link</a>\n    <span class=\"foo\">String</span>\n  </div>\n</main>\n<aside id=\"sidebar\">\n  Sidebar content\n</aside>";
export declare const MOCK_INVALID_MARKUP = "<div bgcolor=\"black\">\n  <font color=\"red\">Outdated font.</font>\n  <script type=\"text/javascript\"></script>\n  <p align=\"center\">More text <strike>with outdated stuff</strike>.</p>\n</div>";
export declare const parentConfig: NodeConfig;
export declare function matchCodeTag(string: string, tag: string): MatchResponse<{
    children: string;
    customProp: string;
}> | null;
export declare class CodeTagMatcher extends Matcher<{}> {
    tag: string;
    key: string;
    constructor(tag: string, key?: string);
    replaceWith(match: ChildrenNode, props?: {
        children?: string;
        key?: string;
    }): Node;
    asTag(): string;
    match(string: string): MatchResponse<{
        children: string;
        customProp: string;
    }> | null;
}
export declare class MarkdownBoldMatcher extends Matcher<any> {
    replaceWith(children: ChildrenNode, props: object): Node;
    asTag(): string;
    match(value: string): MatchResponse<{
        match: string;
    }> | null;
}
export declare class MarkdownItalicMatcher extends Matcher<any> {
    replaceWith(children: ChildrenNode, props: object): Node;
    asTag(): string;
    match(value: string): MatchResponse<{
        match: string;
    }> | null;
}
export declare class MockMatcher extends Matcher<any> {
    replaceWith(children: ChildrenNode, props: any): Node;
    asTag(): string;
    match(): null;
}
export declare class LinkFilter extends Filter {
    attribute(name: string, value: string): string;
    node(name: string, node: HTMLElement): HTMLElement | null;
}
export declare class MockFilter extends Filter {
}
//# sourceMappingURL=testing.d.ts.map