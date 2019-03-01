export interface IBanner {
  height?: number;
  width?: number;
  htmlSnippet: string;
}

export interface IFilter {
  type: string;
  name: string;
  fields?: Array<String>;
  range?: Array<PriceRange>;
}

export enum PriceRange {
  min = 0,
  max = 1
}
