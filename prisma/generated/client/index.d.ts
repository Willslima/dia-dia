
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model AtividadeDiaria
 * 
 */
export type AtividadeDiaria = $Result.DefaultSelection<Prisma.$AtividadeDiariaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.atividadeDiaria`: Exposes CRUD operations for the **AtividadeDiaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtividadeDiarias
    * const atividadeDiarias = await prisma.atividadeDiaria.findMany()
    * ```
    */
  get atividadeDiaria(): Prisma.AtividadeDiariaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    AtividadeDiaria: 'AtividadeDiaria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'usuario' | 'atividadeDiaria'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      AtividadeDiaria: {
        payload: Prisma.$AtividadeDiariaPayload<ExtArgs>
        fields: Prisma.AtividadeDiariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeDiariaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeDiariaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload>
          }
          findFirst: {
            args: Prisma.AtividadeDiariaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeDiariaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload>
          }
          findMany: {
            args: Prisma.AtividadeDiariaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload>[]
          }
          create: {
            args: Prisma.AtividadeDiariaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload>
          }
          delete: {
            args: Prisma.AtividadeDiariaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload>
          }
          update: {
            args: Prisma.AtividadeDiariaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload>
          }
          deleteMany: {
            args: Prisma.AtividadeDiariaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeDiariaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AtividadeDiariaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AtividadeDiariaPayload>
          }
          aggregate: {
            args: Prisma.AtividadeDiariaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAtividadeDiaria>
          }
          groupBy: {
            args: Prisma.AtividadeDiariaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AtividadeDiariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeDiariaCountArgs<ExtArgs>,
            result: $Utils.Optional<AtividadeDiariaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    atividades_diarias: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividades_diarias?: boolean | UsuarioCountOutputTypeCountAtividades_diariasArgs
  }

  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtividades_diariasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeDiariaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nome: number
    email: number
    senha: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nome: string
    email: string
    senha: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    atividades_diarias?: boolean | Usuario$atividades_diariasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividades_diarias?: boolean | Usuario$atividades_diariasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      atividades_diarias: Prisma.$AtividadeDiariaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nome: string
      email: string
      senha: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    atividades_diarias<T extends Usuario$atividades_diariasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$atividades_diariasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario.atividades_diarias
   */
  export type Usuario$atividades_diariasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    where?: AtividadeDiariaWhereInput
    orderBy?: AtividadeDiariaOrderByWithRelationInput | AtividadeDiariaOrderByWithRelationInput[]
    cursor?: AtividadeDiariaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeDiariaScalarFieldEnum | AtividadeDiariaScalarFieldEnum[]
  }


  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Model AtividadeDiaria
   */

  export type AggregateAtividadeDiaria = {
    _count: AtividadeDiariaCountAggregateOutputType | null
    _avg: AtividadeDiariaAvgAggregateOutputType | null
    _sum: AtividadeDiariaSumAggregateOutputType | null
    _min: AtividadeDiariaMinAggregateOutputType | null
    _max: AtividadeDiariaMaxAggregateOutputType | null
  }

  export type AtividadeDiariaAvgAggregateOutputType = {
    id_atividade: number | null
    id_usuario: number | null
  }

  export type AtividadeDiariaSumAggregateOutputType = {
    id_atividade: number | null
    id_usuario: number | null
  }

  export type AtividadeDiariaMinAggregateOutputType = {
    id_atividade: number | null
    id_usuario: number | null
    ddSemana: string | null
    data: Date | null
    lembrete: string | null
    notas: string | null
    treino: string | null
    leuHoje: boolean | null
    tirouFoto: boolean | null
    foto: string | null
    dieta: boolean | null
    lendo: string | null
  }

  export type AtividadeDiariaMaxAggregateOutputType = {
    id_atividade: number | null
    id_usuario: number | null
    ddSemana: string | null
    data: Date | null
    lembrete: string | null
    notas: string | null
    treino: string | null
    leuHoje: boolean | null
    tirouFoto: boolean | null
    foto: string | null
    dieta: boolean | null
    lendo: string | null
  }

  export type AtividadeDiariaCountAggregateOutputType = {
    id_atividade: number
    id_usuario: number
    ddSemana: number
    data: number
    lembrete: number
    notas: number
    treino: number
    leuHoje: number
    tirouFoto: number
    foto: number
    dieta: number
    lendo: number
    _all: number
  }


  export type AtividadeDiariaAvgAggregateInputType = {
    id_atividade?: true
    id_usuario?: true
  }

  export type AtividadeDiariaSumAggregateInputType = {
    id_atividade?: true
    id_usuario?: true
  }

  export type AtividadeDiariaMinAggregateInputType = {
    id_atividade?: true
    id_usuario?: true
    ddSemana?: true
    data?: true
    lembrete?: true
    notas?: true
    treino?: true
    leuHoje?: true
    tirouFoto?: true
    foto?: true
    dieta?: true
    lendo?: true
  }

  export type AtividadeDiariaMaxAggregateInputType = {
    id_atividade?: true
    id_usuario?: true
    ddSemana?: true
    data?: true
    lembrete?: true
    notas?: true
    treino?: true
    leuHoje?: true
    tirouFoto?: true
    foto?: true
    dieta?: true
    lendo?: true
  }

  export type AtividadeDiariaCountAggregateInputType = {
    id_atividade?: true
    id_usuario?: true
    ddSemana?: true
    data?: true
    lembrete?: true
    notas?: true
    treino?: true
    leuHoje?: true
    tirouFoto?: true
    foto?: true
    dieta?: true
    lendo?: true
    _all?: true
  }

  export type AtividadeDiariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeDiaria to aggregate.
     */
    where?: AtividadeDiariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeDiarias to fetch.
     */
    orderBy?: AtividadeDiariaOrderByWithRelationInput | AtividadeDiariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeDiariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeDiarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeDiarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtividadeDiarias
    **/
    _count?: true | AtividadeDiariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadeDiariaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadeDiariaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeDiariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeDiariaMaxAggregateInputType
  }

  export type GetAtividadeDiariaAggregateType<T extends AtividadeDiariaAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividadeDiaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividadeDiaria[P]>
      : GetScalarType<T[P], AggregateAtividadeDiaria[P]>
  }




  export type AtividadeDiariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeDiariaWhereInput
    orderBy?: AtividadeDiariaOrderByWithAggregationInput | AtividadeDiariaOrderByWithAggregationInput[]
    by: AtividadeDiariaScalarFieldEnum[] | AtividadeDiariaScalarFieldEnum
    having?: AtividadeDiariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeDiariaCountAggregateInputType | true
    _avg?: AtividadeDiariaAvgAggregateInputType
    _sum?: AtividadeDiariaSumAggregateInputType
    _min?: AtividadeDiariaMinAggregateInputType
    _max?: AtividadeDiariaMaxAggregateInputType
  }

  export type AtividadeDiariaGroupByOutputType = {
    id_atividade: number
    id_usuario: number
    ddSemana: string
    data: Date
    lembrete: string | null
    notas: string | null
    treino: string | null
    leuHoje: boolean
    tirouFoto: boolean
    foto: string | null
    dieta: boolean
    lendo: string | null
    _count: AtividadeDiariaCountAggregateOutputType | null
    _avg: AtividadeDiariaAvgAggregateOutputType | null
    _sum: AtividadeDiariaSumAggregateOutputType | null
    _min: AtividadeDiariaMinAggregateOutputType | null
    _max: AtividadeDiariaMaxAggregateOutputType | null
  }

  type GetAtividadeDiariaGroupByPayload<T extends AtividadeDiariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeDiariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeDiariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeDiariaGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeDiariaGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeDiariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_atividade?: boolean
    id_usuario?: boolean
    ddSemana?: boolean
    data?: boolean
    lembrete?: boolean
    notas?: boolean
    treino?: boolean
    leuHoje?: boolean
    tirouFoto?: boolean
    foto?: boolean
    dieta?: boolean
    lendo?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividadeDiaria"]>

  export type AtividadeDiariaSelectScalar = {
    id_atividade?: boolean
    id_usuario?: boolean
    ddSemana?: boolean
    data?: boolean
    lembrete?: boolean
    notas?: boolean
    treino?: boolean
    leuHoje?: boolean
    tirouFoto?: boolean
    foto?: boolean
    dieta?: boolean
    lendo?: boolean
  }

  export type AtividadeDiariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }


  export type $AtividadeDiariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtividadeDiaria"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_atividade: number
      id_usuario: number
      ddSemana: string
      data: Date
      lembrete: string | null
      notas: string | null
      treino: string | null
      leuHoje: boolean
      tirouFoto: boolean
      foto: string | null
      dieta: boolean
      lendo: string | null
    }, ExtArgs["result"]["atividadeDiaria"]>
    composites: {}
  }


  type AtividadeDiariaGetPayload<S extends boolean | null | undefined | AtividadeDiariaDefaultArgs> = $Result.GetResult<Prisma.$AtividadeDiariaPayload, S>

  type AtividadeDiariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AtividadeDiariaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AtividadeDiariaCountAggregateInputType | true
    }

  export interface AtividadeDiariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtividadeDiaria'], meta: { name: 'AtividadeDiaria' } }
    /**
     * Find zero or one AtividadeDiaria that matches the filter.
     * @param {AtividadeDiariaFindUniqueArgs} args - Arguments to find a AtividadeDiaria
     * @example
     * // Get one AtividadeDiaria
     * const atividadeDiaria = await prisma.atividadeDiaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AtividadeDiariaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AtividadeDiariaFindUniqueArgs<ExtArgs>>
    ): Prisma__AtividadeDiariaClient<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AtividadeDiaria that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AtividadeDiariaFindUniqueOrThrowArgs} args - Arguments to find a AtividadeDiaria
     * @example
     * // Get one AtividadeDiaria
     * const atividadeDiaria = await prisma.atividadeDiaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AtividadeDiariaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AtividadeDiariaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AtividadeDiariaClient<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AtividadeDiaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeDiariaFindFirstArgs} args - Arguments to find a AtividadeDiaria
     * @example
     * // Get one AtividadeDiaria
     * const atividadeDiaria = await prisma.atividadeDiaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AtividadeDiariaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AtividadeDiariaFindFirstArgs<ExtArgs>>
    ): Prisma__AtividadeDiariaClient<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AtividadeDiaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeDiariaFindFirstOrThrowArgs} args - Arguments to find a AtividadeDiaria
     * @example
     * // Get one AtividadeDiaria
     * const atividadeDiaria = await prisma.atividadeDiaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AtividadeDiariaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AtividadeDiariaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AtividadeDiariaClient<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AtividadeDiarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeDiariaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtividadeDiarias
     * const atividadeDiarias = await prisma.atividadeDiaria.findMany()
     * 
     * // Get first 10 AtividadeDiarias
     * const atividadeDiarias = await prisma.atividadeDiaria.findMany({ take: 10 })
     * 
     * // Only select the `id_atividade`
     * const atividadeDiariaWithId_atividadeOnly = await prisma.atividadeDiaria.findMany({ select: { id_atividade: true } })
     * 
    **/
    findMany<T extends AtividadeDiariaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AtividadeDiariaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AtividadeDiaria.
     * @param {AtividadeDiariaCreateArgs} args - Arguments to create a AtividadeDiaria.
     * @example
     * // Create one AtividadeDiaria
     * const AtividadeDiaria = await prisma.atividadeDiaria.create({
     *   data: {
     *     // ... data to create a AtividadeDiaria
     *   }
     * })
     * 
    **/
    create<T extends AtividadeDiariaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AtividadeDiariaCreateArgs<ExtArgs>>
    ): Prisma__AtividadeDiariaClient<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a AtividadeDiaria.
     * @param {AtividadeDiariaDeleteArgs} args - Arguments to delete one AtividadeDiaria.
     * @example
     * // Delete one AtividadeDiaria
     * const AtividadeDiaria = await prisma.atividadeDiaria.delete({
     *   where: {
     *     // ... filter to delete one AtividadeDiaria
     *   }
     * })
     * 
    **/
    delete<T extends AtividadeDiariaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AtividadeDiariaDeleteArgs<ExtArgs>>
    ): Prisma__AtividadeDiariaClient<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AtividadeDiaria.
     * @param {AtividadeDiariaUpdateArgs} args - Arguments to update one AtividadeDiaria.
     * @example
     * // Update one AtividadeDiaria
     * const atividadeDiaria = await prisma.atividadeDiaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AtividadeDiariaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AtividadeDiariaUpdateArgs<ExtArgs>>
    ): Prisma__AtividadeDiariaClient<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AtividadeDiarias.
     * @param {AtividadeDiariaDeleteManyArgs} args - Arguments to filter AtividadeDiarias to delete.
     * @example
     * // Delete a few AtividadeDiarias
     * const { count } = await prisma.atividadeDiaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AtividadeDiariaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AtividadeDiariaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtividadeDiarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeDiariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtividadeDiarias
     * const atividadeDiaria = await prisma.atividadeDiaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AtividadeDiariaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AtividadeDiariaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtividadeDiaria.
     * @param {AtividadeDiariaUpsertArgs} args - Arguments to update or create a AtividadeDiaria.
     * @example
     * // Update or create a AtividadeDiaria
     * const atividadeDiaria = await prisma.atividadeDiaria.upsert({
     *   create: {
     *     // ... data to create a AtividadeDiaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtividadeDiaria we want to update
     *   }
     * })
    **/
    upsert<T extends AtividadeDiariaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AtividadeDiariaUpsertArgs<ExtArgs>>
    ): Prisma__AtividadeDiariaClient<$Result.GetResult<Prisma.$AtividadeDiariaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AtividadeDiarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeDiariaCountArgs} args - Arguments to filter AtividadeDiarias to count.
     * @example
     * // Count the number of AtividadeDiarias
     * const count = await prisma.atividadeDiaria.count({
     *   where: {
     *     // ... the filter for the AtividadeDiarias we want to count
     *   }
     * })
    **/
    count<T extends AtividadeDiariaCountArgs>(
      args?: Subset<T, AtividadeDiariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeDiariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtividadeDiaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeDiariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtividadeDiariaAggregateArgs>(args: Subset<T, AtividadeDiariaAggregateArgs>): Prisma.PrismaPromise<GetAtividadeDiariaAggregateType<T>>

    /**
     * Group by AtividadeDiaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeDiariaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtividadeDiariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeDiariaGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeDiariaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtividadeDiariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeDiariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtividadeDiaria model
   */
  readonly fields: AtividadeDiariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtividadeDiaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeDiariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AtividadeDiaria model
   */ 
  interface AtividadeDiariaFieldRefs {
    readonly id_atividade: FieldRef<"AtividadeDiaria", 'Int'>
    readonly id_usuario: FieldRef<"AtividadeDiaria", 'Int'>
    readonly ddSemana: FieldRef<"AtividadeDiaria", 'String'>
    readonly data: FieldRef<"AtividadeDiaria", 'DateTime'>
    readonly lembrete: FieldRef<"AtividadeDiaria", 'String'>
    readonly notas: FieldRef<"AtividadeDiaria", 'String'>
    readonly treino: FieldRef<"AtividadeDiaria", 'String'>
    readonly leuHoje: FieldRef<"AtividadeDiaria", 'Boolean'>
    readonly tirouFoto: FieldRef<"AtividadeDiaria", 'Boolean'>
    readonly foto: FieldRef<"AtividadeDiaria", 'String'>
    readonly dieta: FieldRef<"AtividadeDiaria", 'Boolean'>
    readonly lendo: FieldRef<"AtividadeDiaria", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AtividadeDiaria findUnique
   */
  export type AtividadeDiariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeDiaria to fetch.
     */
    where: AtividadeDiariaWhereUniqueInput
  }


  /**
   * AtividadeDiaria findUniqueOrThrow
   */
  export type AtividadeDiariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeDiaria to fetch.
     */
    where: AtividadeDiariaWhereUniqueInput
  }


  /**
   * AtividadeDiaria findFirst
   */
  export type AtividadeDiariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeDiaria to fetch.
     */
    where?: AtividadeDiariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeDiarias to fetch.
     */
    orderBy?: AtividadeDiariaOrderByWithRelationInput | AtividadeDiariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeDiarias.
     */
    cursor?: AtividadeDiariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeDiarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeDiarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeDiarias.
     */
    distinct?: AtividadeDiariaScalarFieldEnum | AtividadeDiariaScalarFieldEnum[]
  }


  /**
   * AtividadeDiaria findFirstOrThrow
   */
  export type AtividadeDiariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeDiaria to fetch.
     */
    where?: AtividadeDiariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeDiarias to fetch.
     */
    orderBy?: AtividadeDiariaOrderByWithRelationInput | AtividadeDiariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeDiarias.
     */
    cursor?: AtividadeDiariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeDiarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeDiarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeDiarias.
     */
    distinct?: AtividadeDiariaScalarFieldEnum | AtividadeDiariaScalarFieldEnum[]
  }


  /**
   * AtividadeDiaria findMany
   */
  export type AtividadeDiariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeDiarias to fetch.
     */
    where?: AtividadeDiariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeDiarias to fetch.
     */
    orderBy?: AtividadeDiariaOrderByWithRelationInput | AtividadeDiariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtividadeDiarias.
     */
    cursor?: AtividadeDiariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeDiarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeDiarias.
     */
    skip?: number
    distinct?: AtividadeDiariaScalarFieldEnum | AtividadeDiariaScalarFieldEnum[]
  }


  /**
   * AtividadeDiaria create
   */
  export type AtividadeDiariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * The data needed to create a AtividadeDiaria.
     */
    data: XOR<AtividadeDiariaCreateInput, AtividadeDiariaUncheckedCreateInput>
  }


  /**
   * AtividadeDiaria update
   */
  export type AtividadeDiariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * The data needed to update a AtividadeDiaria.
     */
    data: XOR<AtividadeDiariaUpdateInput, AtividadeDiariaUncheckedUpdateInput>
    /**
     * Choose, which AtividadeDiaria to update.
     */
    where: AtividadeDiariaWhereUniqueInput
  }


  /**
   * AtividadeDiaria updateMany
   */
  export type AtividadeDiariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtividadeDiarias.
     */
    data: XOR<AtividadeDiariaUpdateManyMutationInput, AtividadeDiariaUncheckedUpdateManyInput>
    /**
     * Filter which AtividadeDiarias to update
     */
    where?: AtividadeDiariaWhereInput
  }


  /**
   * AtividadeDiaria upsert
   */
  export type AtividadeDiariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * The filter to search for the AtividadeDiaria to update in case it exists.
     */
    where: AtividadeDiariaWhereUniqueInput
    /**
     * In case the AtividadeDiaria found by the `where` argument doesn't exist, create a new AtividadeDiaria with this data.
     */
    create: XOR<AtividadeDiariaCreateInput, AtividadeDiariaUncheckedCreateInput>
    /**
     * In case the AtividadeDiaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeDiariaUpdateInput, AtividadeDiariaUncheckedUpdateInput>
  }


  /**
   * AtividadeDiaria delete
   */
  export type AtividadeDiariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
    /**
     * Filter which AtividadeDiaria to delete.
     */
    where: AtividadeDiariaWhereUniqueInput
  }


  /**
   * AtividadeDiaria deleteMany
   */
  export type AtividadeDiariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeDiarias to delete
     */
    where?: AtividadeDiariaWhereInput
  }


  /**
   * AtividadeDiaria without action
   */
  export type AtividadeDiariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeDiaria
     */
    select?: AtividadeDiariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AtividadeDiariaInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AtividadeDiariaScalarFieldEnum: {
    id_atividade: 'id_atividade',
    id_usuario: 'id_usuario',
    ddSemana: 'ddSemana',
    data: 'data',
    lembrete: 'lembrete',
    notas: 'notas',
    treino: 'treino',
    leuHoje: 'leuHoje',
    tirouFoto: 'tirouFoto',
    foto: 'foto',
    dieta: 'dieta',
    lendo: 'lendo'
  };

  export type AtividadeDiariaScalarFieldEnum = (typeof AtividadeDiariaScalarFieldEnum)[keyof typeof AtividadeDiariaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    atividades_diarias?: AtividadeDiariaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    atividades_diarias?: AtividadeDiariaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    atividades_diarias?: AtividadeDiariaListRelationFilter
  }, "id_usuario">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type AtividadeDiariaWhereInput = {
    AND?: AtividadeDiariaWhereInput | AtividadeDiariaWhereInput[]
    OR?: AtividadeDiariaWhereInput[]
    NOT?: AtividadeDiariaWhereInput | AtividadeDiariaWhereInput[]
    id_atividade?: IntFilter<"AtividadeDiaria"> | number
    id_usuario?: IntFilter<"AtividadeDiaria"> | number
    ddSemana?: StringFilter<"AtividadeDiaria"> | string
    data?: DateTimeFilter<"AtividadeDiaria"> | Date | string
    lembrete?: StringNullableFilter<"AtividadeDiaria"> | string | null
    notas?: StringNullableFilter<"AtividadeDiaria"> | string | null
    treino?: StringNullableFilter<"AtividadeDiaria"> | string | null
    leuHoje?: BoolFilter<"AtividadeDiaria"> | boolean
    tirouFoto?: BoolFilter<"AtividadeDiaria"> | boolean
    foto?: StringNullableFilter<"AtividadeDiaria"> | string | null
    dieta?: BoolFilter<"AtividadeDiaria"> | boolean
    lendo?: StringNullableFilter<"AtividadeDiaria"> | string | null
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type AtividadeDiariaOrderByWithRelationInput = {
    id_atividade?: SortOrder
    id_usuario?: SortOrder
    ddSemana?: SortOrder
    data?: SortOrder
    lembrete?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    treino?: SortOrderInput | SortOrder
    leuHoje?: SortOrder
    tirouFoto?: SortOrder
    foto?: SortOrderInput | SortOrder
    dieta?: SortOrder
    lendo?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AtividadeDiariaWhereUniqueInput = Prisma.AtLeast<{
    id_atividade?: number
    AND?: AtividadeDiariaWhereInput | AtividadeDiariaWhereInput[]
    OR?: AtividadeDiariaWhereInput[]
    NOT?: AtividadeDiariaWhereInput | AtividadeDiariaWhereInput[]
    id_usuario?: IntFilter<"AtividadeDiaria"> | number
    ddSemana?: StringFilter<"AtividadeDiaria"> | string
    data?: DateTimeFilter<"AtividadeDiaria"> | Date | string
    lembrete?: StringNullableFilter<"AtividadeDiaria"> | string | null
    notas?: StringNullableFilter<"AtividadeDiaria"> | string | null
    treino?: StringNullableFilter<"AtividadeDiaria"> | string | null
    leuHoje?: BoolFilter<"AtividadeDiaria"> | boolean
    tirouFoto?: BoolFilter<"AtividadeDiaria"> | boolean
    foto?: StringNullableFilter<"AtividadeDiaria"> | string | null
    dieta?: BoolFilter<"AtividadeDiaria"> | boolean
    lendo?: StringNullableFilter<"AtividadeDiaria"> | string | null
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id_atividade">

  export type AtividadeDiariaOrderByWithAggregationInput = {
    id_atividade?: SortOrder
    id_usuario?: SortOrder
    ddSemana?: SortOrder
    data?: SortOrder
    lembrete?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    treino?: SortOrderInput | SortOrder
    leuHoje?: SortOrder
    tirouFoto?: SortOrder
    foto?: SortOrderInput | SortOrder
    dieta?: SortOrder
    lendo?: SortOrderInput | SortOrder
    _count?: AtividadeDiariaCountOrderByAggregateInput
    _avg?: AtividadeDiariaAvgOrderByAggregateInput
    _max?: AtividadeDiariaMaxOrderByAggregateInput
    _min?: AtividadeDiariaMinOrderByAggregateInput
    _sum?: AtividadeDiariaSumOrderByAggregateInput
  }

  export type AtividadeDiariaScalarWhereWithAggregatesInput = {
    AND?: AtividadeDiariaScalarWhereWithAggregatesInput | AtividadeDiariaScalarWhereWithAggregatesInput[]
    OR?: AtividadeDiariaScalarWhereWithAggregatesInput[]
    NOT?: AtividadeDiariaScalarWhereWithAggregatesInput | AtividadeDiariaScalarWhereWithAggregatesInput[]
    id_atividade?: IntWithAggregatesFilter<"AtividadeDiaria"> | number
    id_usuario?: IntWithAggregatesFilter<"AtividadeDiaria"> | number
    ddSemana?: StringWithAggregatesFilter<"AtividadeDiaria"> | string
    data?: DateTimeWithAggregatesFilter<"AtividadeDiaria"> | Date | string
    lembrete?: StringNullableWithAggregatesFilter<"AtividadeDiaria"> | string | null
    notas?: StringNullableWithAggregatesFilter<"AtividadeDiaria"> | string | null
    treino?: StringNullableWithAggregatesFilter<"AtividadeDiaria"> | string | null
    leuHoje?: BoolWithAggregatesFilter<"AtividadeDiaria"> | boolean
    tirouFoto?: BoolWithAggregatesFilter<"AtividadeDiaria"> | boolean
    foto?: StringNullableWithAggregatesFilter<"AtividadeDiaria"> | string | null
    dieta?: BoolWithAggregatesFilter<"AtividadeDiaria"> | boolean
    lendo?: StringNullableWithAggregatesFilter<"AtividadeDiaria"> | string | null
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    atividades_diarias?: AtividadeDiariaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nome: string
    email: string
    senha: string
    atividades_diarias?: AtividadeDiariaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    atividades_diarias?: AtividadeDiariaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    atividades_diarias?: AtividadeDiariaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeDiariaCreateInput = {
    ddSemana: string
    data: Date | string
    lembrete?: string | null
    notas?: string | null
    treino?: string | null
    leuHoje: boolean
    tirouFoto: boolean
    foto?: string | null
    dieta: boolean
    lendo?: string | null
    usuario: UsuarioCreateNestedOneWithoutAtividades_diariasInput
  }

  export type AtividadeDiariaUncheckedCreateInput = {
    id_atividade?: number
    id_usuario: number
    ddSemana: string
    data: Date | string
    lembrete?: string | null
    notas?: string | null
    treino?: string | null
    leuHoje: boolean
    tirouFoto: boolean
    foto?: string | null
    dieta: boolean
    lendo?: string | null
  }

  export type AtividadeDiariaUpdateInput = {
    ddSemana?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lembrete?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    treino?: NullableStringFieldUpdateOperationsInput | string | null
    leuHoje?: BoolFieldUpdateOperationsInput | boolean
    tirouFoto?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: BoolFieldUpdateOperationsInput | boolean
    lendo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutAtividades_diariasNestedInput
  }

  export type AtividadeDiariaUncheckedUpdateInput = {
    id_atividade?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    ddSemana?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lembrete?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    treino?: NullableStringFieldUpdateOperationsInput | string | null
    leuHoje?: BoolFieldUpdateOperationsInput | boolean
    tirouFoto?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: BoolFieldUpdateOperationsInput | boolean
    lendo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeDiariaUpdateManyMutationInput = {
    ddSemana?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lembrete?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    treino?: NullableStringFieldUpdateOperationsInput | string | null
    leuHoje?: BoolFieldUpdateOperationsInput | boolean
    tirouFoto?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: BoolFieldUpdateOperationsInput | boolean
    lendo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeDiariaUncheckedUpdateManyInput = {
    id_atividade?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    ddSemana?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lembrete?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    treino?: NullableStringFieldUpdateOperationsInput | string | null
    leuHoje?: BoolFieldUpdateOperationsInput | boolean
    tirouFoto?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: BoolFieldUpdateOperationsInput | boolean
    lendo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AtividadeDiariaListRelationFilter = {
    every?: AtividadeDiariaWhereInput
    some?: AtividadeDiariaWhereInput
    none?: AtividadeDiariaWhereInput
  }

  export type AtividadeDiariaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtividadeDiariaCountOrderByAggregateInput = {
    id_atividade?: SortOrder
    id_usuario?: SortOrder
    ddSemana?: SortOrder
    data?: SortOrder
    lembrete?: SortOrder
    notas?: SortOrder
    treino?: SortOrder
    leuHoje?: SortOrder
    tirouFoto?: SortOrder
    foto?: SortOrder
    dieta?: SortOrder
    lendo?: SortOrder
  }

  export type AtividadeDiariaAvgOrderByAggregateInput = {
    id_atividade?: SortOrder
    id_usuario?: SortOrder
  }

  export type AtividadeDiariaMaxOrderByAggregateInput = {
    id_atividade?: SortOrder
    id_usuario?: SortOrder
    ddSemana?: SortOrder
    data?: SortOrder
    lembrete?: SortOrder
    notas?: SortOrder
    treino?: SortOrder
    leuHoje?: SortOrder
    tirouFoto?: SortOrder
    foto?: SortOrder
    dieta?: SortOrder
    lendo?: SortOrder
  }

  export type AtividadeDiariaMinOrderByAggregateInput = {
    id_atividade?: SortOrder
    id_usuario?: SortOrder
    ddSemana?: SortOrder
    data?: SortOrder
    lembrete?: SortOrder
    notas?: SortOrder
    treino?: SortOrder
    leuHoje?: SortOrder
    tirouFoto?: SortOrder
    foto?: SortOrder
    dieta?: SortOrder
    lendo?: SortOrder
  }

  export type AtividadeDiariaSumOrderByAggregateInput = {
    id_atividade?: SortOrder
    id_usuario?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AtividadeDiariaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AtividadeDiariaCreateWithoutUsuarioInput, AtividadeDiariaUncheckedCreateWithoutUsuarioInput> | AtividadeDiariaCreateWithoutUsuarioInput[] | AtividadeDiariaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeDiariaCreateOrConnectWithoutUsuarioInput | AtividadeDiariaCreateOrConnectWithoutUsuarioInput[]
    connect?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
  }

  export type AtividadeDiariaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AtividadeDiariaCreateWithoutUsuarioInput, AtividadeDiariaUncheckedCreateWithoutUsuarioInput> | AtividadeDiariaCreateWithoutUsuarioInput[] | AtividadeDiariaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeDiariaCreateOrConnectWithoutUsuarioInput | AtividadeDiariaCreateOrConnectWithoutUsuarioInput[]
    connect?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AtividadeDiariaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AtividadeDiariaCreateWithoutUsuarioInput, AtividadeDiariaUncheckedCreateWithoutUsuarioInput> | AtividadeDiariaCreateWithoutUsuarioInput[] | AtividadeDiariaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeDiariaCreateOrConnectWithoutUsuarioInput | AtividadeDiariaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AtividadeDiariaUpsertWithWhereUniqueWithoutUsuarioInput | AtividadeDiariaUpsertWithWhereUniqueWithoutUsuarioInput[]
    set?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
    disconnect?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
    delete?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
    connect?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
    update?: AtividadeDiariaUpdateWithWhereUniqueWithoutUsuarioInput | AtividadeDiariaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AtividadeDiariaUpdateManyWithWhereWithoutUsuarioInput | AtividadeDiariaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AtividadeDiariaScalarWhereInput | AtividadeDiariaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AtividadeDiariaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AtividadeDiariaCreateWithoutUsuarioInput, AtividadeDiariaUncheckedCreateWithoutUsuarioInput> | AtividadeDiariaCreateWithoutUsuarioInput[] | AtividadeDiariaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeDiariaCreateOrConnectWithoutUsuarioInput | AtividadeDiariaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AtividadeDiariaUpsertWithWhereUniqueWithoutUsuarioInput | AtividadeDiariaUpsertWithWhereUniqueWithoutUsuarioInput[]
    set?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
    disconnect?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
    delete?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
    connect?: AtividadeDiariaWhereUniqueInput | AtividadeDiariaWhereUniqueInput[]
    update?: AtividadeDiariaUpdateWithWhereUniqueWithoutUsuarioInput | AtividadeDiariaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AtividadeDiariaUpdateManyWithWhereWithoutUsuarioInput | AtividadeDiariaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AtividadeDiariaScalarWhereInput | AtividadeDiariaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAtividades_diariasInput = {
    create?: XOR<UsuarioCreateWithoutAtividades_diariasInput, UsuarioUncheckedCreateWithoutAtividades_diariasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtividades_diariasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutAtividades_diariasNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtividades_diariasInput, UsuarioUncheckedCreateWithoutAtividades_diariasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtividades_diariasInput
    upsert?: UsuarioUpsertWithoutAtividades_diariasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtividades_diariasInput, UsuarioUpdateWithoutAtividades_diariasInput>, UsuarioUncheckedUpdateWithoutAtividades_diariasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AtividadeDiariaCreateWithoutUsuarioInput = {
    ddSemana: string
    data: Date | string
    lembrete?: string | null
    notas?: string | null
    treino?: string | null
    leuHoje: boolean
    tirouFoto: boolean
    foto?: string | null
    dieta: boolean
    lendo?: string | null
  }

  export type AtividadeDiariaUncheckedCreateWithoutUsuarioInput = {
    id_atividade?: number
    ddSemana: string
    data: Date | string
    lembrete?: string | null
    notas?: string | null
    treino?: string | null
    leuHoje: boolean
    tirouFoto: boolean
    foto?: string | null
    dieta: boolean
    lendo?: string | null
  }

  export type AtividadeDiariaCreateOrConnectWithoutUsuarioInput = {
    where: AtividadeDiariaWhereUniqueInput
    create: XOR<AtividadeDiariaCreateWithoutUsuarioInput, AtividadeDiariaUncheckedCreateWithoutUsuarioInput>
  }

  export type AtividadeDiariaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AtividadeDiariaWhereUniqueInput
    update: XOR<AtividadeDiariaUpdateWithoutUsuarioInput, AtividadeDiariaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AtividadeDiariaCreateWithoutUsuarioInput, AtividadeDiariaUncheckedCreateWithoutUsuarioInput>
  }

  export type AtividadeDiariaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AtividadeDiariaWhereUniqueInput
    data: XOR<AtividadeDiariaUpdateWithoutUsuarioInput, AtividadeDiariaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AtividadeDiariaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AtividadeDiariaScalarWhereInput
    data: XOR<AtividadeDiariaUpdateManyMutationInput, AtividadeDiariaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AtividadeDiariaScalarWhereInput = {
    AND?: AtividadeDiariaScalarWhereInput | AtividadeDiariaScalarWhereInput[]
    OR?: AtividadeDiariaScalarWhereInput[]
    NOT?: AtividadeDiariaScalarWhereInput | AtividadeDiariaScalarWhereInput[]
    id_atividade?: IntFilter<"AtividadeDiaria"> | number
    id_usuario?: IntFilter<"AtividadeDiaria"> | number
    ddSemana?: StringFilter<"AtividadeDiaria"> | string
    data?: DateTimeFilter<"AtividadeDiaria"> | Date | string
    lembrete?: StringNullableFilter<"AtividadeDiaria"> | string | null
    notas?: StringNullableFilter<"AtividadeDiaria"> | string | null
    treino?: StringNullableFilter<"AtividadeDiaria"> | string | null
    leuHoje?: BoolFilter<"AtividadeDiaria"> | boolean
    tirouFoto?: BoolFilter<"AtividadeDiaria"> | boolean
    foto?: StringNullableFilter<"AtividadeDiaria"> | string | null
    dieta?: BoolFilter<"AtividadeDiaria"> | boolean
    lendo?: StringNullableFilter<"AtividadeDiaria"> | string | null
  }

  export type UsuarioCreateWithoutAtividades_diariasInput = {
    nome: string
    email: string
    senha: string
  }

  export type UsuarioUncheckedCreateWithoutAtividades_diariasInput = {
    id_usuario?: number
    nome: string
    email: string
    senha: string
  }

  export type UsuarioCreateOrConnectWithoutAtividades_diariasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtividades_diariasInput, UsuarioUncheckedCreateWithoutAtividades_diariasInput>
  }

  export type UsuarioUpsertWithoutAtividades_diariasInput = {
    update: XOR<UsuarioUpdateWithoutAtividades_diariasInput, UsuarioUncheckedUpdateWithoutAtividades_diariasInput>
    create: XOR<UsuarioCreateWithoutAtividades_diariasInput, UsuarioUncheckedCreateWithoutAtividades_diariasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtividades_diariasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtividades_diariasInput, UsuarioUncheckedUpdateWithoutAtividades_diariasInput>
  }

  export type UsuarioUpdateWithoutAtividades_diariasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutAtividades_diariasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeDiariaUpdateWithoutUsuarioInput = {
    ddSemana?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lembrete?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    treino?: NullableStringFieldUpdateOperationsInput | string | null
    leuHoje?: BoolFieldUpdateOperationsInput | boolean
    tirouFoto?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: BoolFieldUpdateOperationsInput | boolean
    lendo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeDiariaUncheckedUpdateWithoutUsuarioInput = {
    id_atividade?: IntFieldUpdateOperationsInput | number
    ddSemana?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lembrete?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    treino?: NullableStringFieldUpdateOperationsInput | string | null
    leuHoje?: BoolFieldUpdateOperationsInput | boolean
    tirouFoto?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: BoolFieldUpdateOperationsInput | boolean
    lendo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeDiariaUncheckedUpdateManyWithoutUsuarioInput = {
    id_atividade?: IntFieldUpdateOperationsInput | number
    ddSemana?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lembrete?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    treino?: NullableStringFieldUpdateOperationsInput | string | null
    leuHoje?: BoolFieldUpdateOperationsInput | boolean
    tirouFoto?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: BoolFieldUpdateOperationsInput | boolean
    lendo?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AtividadeDiariaDefaultArgs instead
     */
    export type AtividadeDiariaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AtividadeDiariaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}