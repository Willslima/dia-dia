import dbInstance from './database.js'

// database.d.ts
declare module '*.js' {
  const value: any
  export default value
}

declare module './database.js' {
  const dbInstance: any // ou ajuste o tipo conforme necessário
  export default dbInstance
}
