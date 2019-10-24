export default {
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
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}