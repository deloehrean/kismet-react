declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.pdf';

declare module '*.svg' {
  const content: string;
  export default content;
}
