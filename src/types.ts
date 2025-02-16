import type { API } from "@editorjs/editorjs";

export interface SimpleImageData {
  url: string;
  caption: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
}

export interface SimpleImageConfig {
  data?: Partial<SimpleImageData>;
  config?: any;
  api: any;
  readOnly: boolean;
}

export interface TagPasteEventDetail {
  data: HTMLElement;
}
