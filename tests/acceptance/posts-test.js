import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'my-app/tests/helpers/start-app';

var application;

module('Acceptance | posts', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /posts', function(assert) {
  visit('/posts');

  andThen(function() {
    var titles = find('h3').toArray().map((el) => el.textContent);
    assert.deepEqual(titles, ['First Post', 'Second Post'], "Has both titles");
  });
});
