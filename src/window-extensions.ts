declare global {
  interface Window {
    site: string;
    createPopover: (tag?: string) => void;
  }
}

export default window;
