module.exports = {

  friendlyName: 'Validator',

  description: 'some description',

  extendedDescription: '',

  inputs: {

    thing: {
      defaultsTo: 'some default value',
      description: 'description of this input',
      extendedDescription: 'extended description of this input',
      typeclass: 'array',
      required: true
    }

  },

  defaultExit: 'success',

  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    someOtherError: {
      description: 'Some description.',
      extendedDescription: 'Some extended description.'
    },

    success: {
      description: 'Describe our returns',
      getExample: function (inputs) {
        return true;
      }
    }

  },

  fn: function (inputs, exits) {

  }

};