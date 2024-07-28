declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

declare module '*.svg' {
  const content: any;
  export default content;
}
