import { MatchCallback, MatchResponse } from './types';
/**
 * Trigger the actual pattern match and package the matched
 * response through a callback.
 */
export default function match<T>(string: string, pattern: string | RegExp, callback: MatchCallback<T>, isVoid?: boolean): MatchResponse<T> | null;
//# sourceMappingURL=match.d.ts.map