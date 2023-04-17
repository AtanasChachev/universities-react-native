export interface RenderHTMLProps {
  html: string;
}

export interface RenderHTMLComponentProps extends RenderHTMLProps {
  width: number;
  theme: Record<string, string>;
}
