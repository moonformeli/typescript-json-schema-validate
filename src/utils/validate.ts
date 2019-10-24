import * as AJV from "ajv";

export const validate = (JSC: object, data: object) => {
  const ajv = new AJV({ allErrors: true });
  const valid = ajv.validate(JSC, data);
  const errorText =
    ajv.errorsText() && ajv.errorsText().toLocaleLowerCase() !== "no errors"
      ? ajv.errorsText()
      : "";

  return {
    errorText,
    valid: !!valid
  };
};
