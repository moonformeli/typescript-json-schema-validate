export default {
  "type": "object",
  "properties": {
    "student": {
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
    "teacher": {
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
  "required": [
    "student",
    "teacher"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}