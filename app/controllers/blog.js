import Ember from 'ember';

export default Ember.Controller.extend({

	// getMonth(model) {
	// 	return model.get('month');
	// },
	// archiveMonths: Ember.computed.map('model', function(model) {
	// 	return this.getMonth(model);
	// }),
	// months: Ember.computed('model', function() {
	// 	var uniqMths = [];
	//
	// 	this.model.forEach(function(entry){
	// 		var month = entry.get('month');
	// 		var id = entry.get('id');
  //     // var hasMonth = !!uniqMths.includes(month);
  //     if (!uniqMths.includes(month)) {
  //       uniqMths.push({month: month, id: id});
  //     }
	// 		else {
	//
	// 		}
	// 	});
	//
	// 	return uniqMths;
	// }),
	monthGroups: Ember.computed('model', function() {
		var monthGroups = new Ember.A();
		var entries = this.model;

		entries.forEach(function(entry){
			var month = entry.get('month');
			var year = entry.get('year');
			var monthGroup = monthGroups.findBy('month', month);

			if (Ember.isPresent(monthGroup)) {
				Ember.get(monthGroup, 'entries').push(entry);
			} else {
				monthGroup = { month: month, year: year, entries: [entry] };
				monthGroups.push(monthGroup);
			}
		});

		return monthGroups;
	})

});
