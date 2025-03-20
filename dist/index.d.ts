declare class Console {
    default: (text: string) => void;
    success: (text: any) => void;
    error: (text: any) => void;
    warning: (text: string) => void;
    continue: (text: string) => void;
    primary: (text: string) => void;
    red: (text: string) => void;
    yellow: (text: string) => void;
    bold: (text: string) => void;
    green: (text: string) => void;
    underlined: (text: string) => void;
    underlined_Bright: (text: string) => void;
    heart: () => void;
    hii: () => void;
    blue: (text: string) => void;
    gray: (text: string) => void;
    pink: (text: string) => void;
}
export declare const Log: Console;
export {};
