
export const ethereum = () =>  (window as any).ethereum 
export const networkVersion = () => ethereum() ? +ethereum().networkVersion : null;