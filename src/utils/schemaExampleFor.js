export default function schemaExampleFor(schema) {
  if (!schema) {
    return null;
  }

  if (schema.hasOwnProperty('example')) {
    return schema.example;
  }

  if (schema.anyOf) {
    return schemaExampleFor(schema.anyOf[0]);
  }

  const type = Array.isArray(schema.type) ?
    schema.type[0] :
    schema.type;

  if (type === 'object') {
    if (schema.oneOf) {
      return schemaExampleFor(schema.oneOf[0]);
    }

    if (!schema.properties) {
      return {};
    }

    return Object.keys(schema.properties).reduce((acc, property) => {
      return Object.assign({}, acc, { [property]: schemaExampleFor(schema.properties[property]) });
    }, {});
  } else if (type === 'array') {
    if (schema.items.oneOf) {
      return schema.items.oneOf.map((s) => schemaExampleFor(s));
    }
    return [ schemaExampleFor(schema.items) ];
  } else if (type === 'string') {
    return "";
  } else if (type === 'boolean') {
    return true;
  } else if (type === 'integer') {
    return 20;
  } else if (type === 'null') {
    return null;
  } else {
    throw `Don't know how to manage ${type} type!`;
  }
}
