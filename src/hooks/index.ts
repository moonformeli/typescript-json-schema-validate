import { validate } from "../utils/validate";

export const extendJSCMatcher = (): void => {
  expect.extend({
    toMatchJSC(JSC: object, data: object) {
      const schemaValid = validate(JSC, data);

      const pass = schemaValid.valid;
      const errorText = schemaValid.errorText;

      if (pass) {
        return {
          pass,
          message: () => errorText
        };
      }
      return {
        pass,
        message: () => `data must not match JSC ${errorText}`
      };
    }
  });
};
