// Type definitions for source-map-support 0.2.10
// Project: https://github.com/evanw/source-map-support
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Output of retrieveSourceMap().
 */
export interface UrlAndMap {
  url: string;
  map: string | Buffer;
}

/**
 * Options to install().
 */
export interface Options {
  environment?: 'node' | 'browser' | 'auto';
  handleUncaughtExceptions?: boolean;
  emptyCacheBetweenOperations?: boolean;
  retrieveFile?: (path: string) => string | null | undefined;
  retrieveSourceMap?: (source: string) => UrlAndMap | null | undefined;
}

export interface Position {
  source: string;
  line: number;
  column: number;
}

export function wrapCallSite (frame: any /* StackFrame */): any /* StackFrame */;
export function getErrorSource (error: Error): string;
export function mapSourcePosition (position: Position): Position;
export function retrieveSourceMap (source: string): UrlAndMap;

/**
 * Install SourceMap support.
 * @param options Can be used to e.g. disable uncaughtException handler.
 */
export function install (options?: Options): void;
