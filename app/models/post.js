import Ember from 'ember';
import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';

export default PostModel.extend({
  author: DS.attr(),
	month: Ember.computed('date', function() {
		switch (new Date(this.get('date')).getMonth()) {
			case 0:
				return "January";
			case 1:
				return 'February';
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
			case 7:
				return "August";
			case 8:
				return "September";
			case 9:
				return "October";
			case 10:
				return "November";
			case 11:
				return "December";
			default:
				return "UNMAPPED";
		}
	}),
	year: Ember.computed('date', function() {
		return new Date(this.get('date')).getFullYear();
	}),
	monthYear: Ember.computed('date', function() {
		return `${this.get('month')} ${this.get('year')}`;
	}),
	dayMonthYear: Ember.computed('date', function() {
		return `${new Date(this.get('date')).getDate()} ${this.get('monthYear')}`;
	})
});
