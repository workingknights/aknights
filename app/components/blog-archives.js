import Ember from 'ember';

export default Ember.Component.extend({

	monthGroups: Ember.computed('model', function() {
		var monthGroups = new Ember.A();
		var entries = this.model;

		entries.forEach(function(entry) {
			var month = entry.get('month');
			var year = entry.get('year');
			var monthGroup = monthGroups.findBy('month', month);

			if (Ember.isPresent(monthGroup)) {
				Ember.get(monthGroup, 'entries').push(entry);
			} else {
				monthGroup = {
					month: month,
					year: year,
					entries: [entry]
				};
				monthGroups.push(monthGroup);
			}
		});

		return monthGroups;
	})

});
