import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
		console.log('model date = ', serialized);
		switch (new Date(serialized).getMonth()) {
			case 0:
					return "January";
			case 1:
					return "February";
			case 2:
					return "March";
			case 3:
					return "April";
			case 4:
					return "May";
			case 5:
					return "June";
			case 6:
					return "July";
			default:
					return 'UNMAPPED';
		}
  },

  serialize(deserialized) {
    return deserialized;
  }
});
