# Database Schema:
- name: String (Required)
- email: String (Required)
- password: String (Required)
- dob: String (Required)
- sex: String (Required)
- weight: Number
- height: String
- exercises: mongoose.Schema.Types.Exercise
- accountedCreated: Date

Passwords are encrypted using bcryptjs