// Allow importing image files in TypeScript
declare module '*.png' {
  const value: string;
  export default value;
}

