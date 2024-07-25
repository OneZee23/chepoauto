export const UseEnv =
  <TProperty>(
    name: string,
    transform?: (raw?: string) => TProperty,
  ): PropertyDecorator =>
  (proto, propertyKey) => {
    let computed;

    Object.defineProperty(proto, propertyKey, {
      enumerable: true,
      get(): any {
        if (computed === undefined) {
          computed = (() => {
            const raw: string | undefined = process.env[name];

            if (transform) {
              try {
                return transform(raw);
              } catch (err) {
                throw new Error(`Config ${name} transformation failed: ${err}`);
              }
            }

            return raw;
          })();
        }

        return computed;
      },
    });
  };
