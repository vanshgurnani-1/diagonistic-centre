const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  servicesOffered: {
    type: [String],
    required: true,
  },
  workingHours: {
    type: {
      weekdays: {
        type: String,
        required: true,
      },
      weekends: String,
    },
    required: true,
  },
  diagnosticEquipment: {
    type: [String],
    required: true,
  },
  doctors: [
    {
      name: {
        type: String,
        required: true,
      },
      specialization: String,
    },
  ],
  appointments: [
    {
      patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
      },
      date: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Canceled'],
        default: 'Scheduled',
      },
    },
  ],
  // Add other center-related fields as needed
});

const Center = mongoose.model('Center', centerSchema);

module.exports = Center;
