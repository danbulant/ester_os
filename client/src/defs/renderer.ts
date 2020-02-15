export default interface renderer {
    name: string;
    removePrevious: boolean;

    /**
     * Possible states:
     * 0    not-ready (cannot be rendered)
     * 1    ready (can be rendered)
     * 2    rendered (user can see this)
     * 3    hidden (can be rendered again)
     * 4    ejected (cannot be rendered again)
     */
    state: 0 | 1 | 2 | 3 | 4;

    render(): void;
    eject(): void;
    hide?(): void;

    prepare?(): Promise<void>;
}