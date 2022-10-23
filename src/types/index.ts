export interface Board {
  columns: Array<Columns>;
}

interface Columns {
  id: number | string;
  title: string;
  cards: Array<Card>;
}

export interface Card {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  date: string;
  orderDeatils: any;
  processDeatails: any;
  files: Array<File>;
}

export interface OrderDeatils {
  part: string;
  partNumber: string;
  releaseStatus: string;
  drawingNumber: string;
  FlightArticle: string;
  estimatedShippingDate: string;
}

export interface ProcessDeatails {
  material: string;
  materialStockSize: string;
  surfaceTreatment: string;
  nachine: string;
}

export interface File {
  name: string;
  date: string;
  description: string;
}

export type Priority = "Critical Path" | "High Priority" | "Standard";
