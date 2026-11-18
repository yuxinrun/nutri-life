declare module "echarts" {
  export type EChartsOption = Record<string, unknown>;
  export interface EChartsInstance {
    setOption(option: EChartsOption): void;
    dispose(): void;
    resize(): void;
  }
  export function init(dom: HTMLElement): EChartsInstance;
}
