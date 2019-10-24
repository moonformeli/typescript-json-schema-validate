import { extendJSCMatcher } from "../hooks";
import TeacherInterfaceJSC from "../schema/TeacherInterfaceJSC";

extendJSCMatcher();

describe("Validation Test", () => {
  describe("Pass", () => {
    it("when it matches TeacherJSC", () => {
      // Assert
      expect(TeacherInterfaceJSC).toMatchJSC({ name: "h", subject: "a" });
      expect(TeacherInterfaceJSC).toMatchJSC({
        name: "Jane",
        subject: "math",
        gender: "female"
      });
      expect(TeacherInterfaceJSC).toMatchJSC({
        name: "Drock",
        subject: "english",
        gender: "male"
      });
    });
  });

  describe("Fail", () => {
    it("when it does not match TeacherJSC", () => {
      // Assert
      expect(TeacherInterfaceJSC).not.toMatchJSC({ name: 123 });
      // Assert
      expect(TeacherInterfaceJSC).not.toMatchJSC({ name: "James", age: 30 });
      // Assert
      expect(TeacherInterfaceJSC).not.toMatchJSC({
        name: "Drock",
        subject: "english",
        gender: "unknown"
      });
    });
  });
});
