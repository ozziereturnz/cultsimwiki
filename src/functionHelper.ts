export function execFunc<T>(stringFunc: string): (prop?: T) => void {
    const parts = stringFunc.split(".");

    if (parts.length === 1) {
        return ((window as any)[stringFunc] as (prop?: T) => void);
    } else {
        let wnd = window as any;
        parts.map((item) => {
            wnd = wnd[item];
        });

        if (wnd instanceof Function) {
            return wnd as (prop?: T) => void;
        } else {
            throw new Error(stringFunc + ": is not a function");
        }
    }
}