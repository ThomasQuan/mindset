import 'reflect-metadata';

export function Slug(sourceField: string) {
  return function (target: any, propertyKey: string) {
    // Store metadata on the constructor function
    const constructor = target.constructor;
    const slugFields = Reflect.getMetadata('slugFields', constructor) || [];
    slugFields.push({ property: propertyKey, source: sourceField });
    Reflect.defineMetadata('slugFields', slugFields, constructor);
  };
}
