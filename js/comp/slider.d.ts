declare class slider extends HTMLElement {
    constructor();
    mes: any;
    trig: any;
    path: any;
    get value(): number;
    set value(value: number);
    connectedCallback(): void;
}
export { slider };
