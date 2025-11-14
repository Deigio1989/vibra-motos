export interface AnchorData {
  iconSrc: string;
  isOpen?: boolean;
  number: number;
  title: string;
}

export interface AnchorConfig extends AnchorData {
  id?: number;
}
