export const queryJava = `
(line_comment) @comment
(block_comment) @comment

(import_declaration
  .
  (identifier) @name.reference.module) @definition.import

(package_declaration
  .
  (identifier) @name.reference.module) @definition.import

(class_declaration
  name: (identifier) @name.definition.class) @definition.class

(method_declaration
  name: (identifier) @name.definition.method) @definition.method

(method_invocation
  name: (identifier) @name.reference.call
  arguments: (argument_list) @reference.call)

(interface_declaration
  name: (identifier) @name.definition.interface) @definition.interface

(type_list
  (type_identifier) @name.reference.implementation) @reference.implementation

(object_creation_expression
  type: (type_identifier) @name.reference.class) @reference.class

(superclass (type_identifier) @name.reference.class) @reference.class
`;
