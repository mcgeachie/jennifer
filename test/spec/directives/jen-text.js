'use strict';

describe('Directive: jennifer', function () {

  // load the directive's module
  beforeEach(module('jenniferApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should set the text on the element', inject(function ($compile) {
    element = angular.element('<p data-jennifer></p>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jenText directive');
  }));

  it('should set the text on the element', inject(function ($compile) {
    element = angular.element('<p class="jennifer"></p>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jenText directive');
  }));

  it('should set the text on the element', inject(function ($compile) {
    element = angular.element('<jennifer></jennifer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jenText directive');
  }));
});
