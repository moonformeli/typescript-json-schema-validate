export default {
  "type": "object",
  "properties": {
    "student": {
      "$ref": "#/definitions/StudentInterface"
    },
    "teacher": {
      "$ref": "#/definitions/TeacherInterface"
    }
  },
  "required": [
    "student",
    "teacher"
  ],
  "definitions": {
    "StudentInterface": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "age": {
          "type": "number"
        },
        "address": {
          "type": "string"
        }
      },
      "required": [
        "age",
        "name"
      ]
    },
    "TeacherInterface": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "subject": {
          "type": "string"
        },
        "gender": {
          "enum": [
            "female",
            "male"
          ],
          "type": "string"
        }
      },
      "required": [
        "name",
        "subject"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#"
}