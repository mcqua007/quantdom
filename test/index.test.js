/**
 * @jest-environment jsdom
 */

import $ from '../dist/quantdom.min.js';

describe('check index.js', () => {
  test('parent', () => {
    document.body.innerHTML = '<div id="container">' + '   <span id="password">test</span>' + '</div>';

    expect($('#password').parent().parent().html()).toBe(
      '<div id="container">' + '   <span id="password">test</span>' + '</div>'
    );
  });

  test('find', () => {
    document.body.innerHTML =
      '<div id="container">' +
      '   <span class="test-span">test 1</span>' +
      '   <span class="test-span">test 2</span>' +
      '</div>';

    expect($('#container').find('.test-span').html()).toBe('test 1');
  });

  test('findEl', () => {
    document.body.innerHTML =
      '<div id="container">' +
      '   <span class="test-span">test 1</span>' +
      '   <span class="test-span">test 2</span>' +
      '</div>';

    expect($('#container').findEl('.test-span')).toBe(document.querySelector('#container .test-span'));
  });

  test('FindEls', () => {
    document.body.innerHTML =
      '<div id="container">' +
      '   <span class="test-span">test 1</span>' +
      '   <span class="test-span">test 2</span>' +
      '</div>';

    expect($('#container').findEls('.test-span')).toEqual(document.querySelectorAll('#container .test-span'));
  });

  test('el', () => {
    document.body.innerHTML = '<div id="container">' + '   <span id="password">test</span>' + '</div>';

    expect($('#password').el()).toBe(document.getElementById('password'));
  });

  test('lastEl', () => {
    document.body.innerHTML =
      '<div id="container">' +
      '   <span class="username" id="username-1">abc</span>' +
      '   <span class="username" id="username-2">test</span>' +
      '</div>';

    expect($('.username').lastEl()).toBe(document.getElementById('username-2'));
  });

  test('els', () => {
    document.body.innerHTML =
      '<div id="container">' +
      '   <span class="username" id="username-1">abc</span>' +
      '   <span class="username" id="username-2">test</span>' +
      '</div>';

    expect($('.username').els).toEqual(document.querySelectorAll('.username'));
  });

  test('on and off', () => {
    // Set up our document body
    document.body.innerHTML = '<div id="container">' + '   <button id="button" />' + '</div>';

    const mockCallBack = jest.fn();

    $('#button').on('click', mockCallBack);

    document.getElementById('button').click();
    document.getElementById('button').click();

    $('#button').off('click', mockCallBack);

    document.getElementById('button').click();

    expect(mockCallBack.mock.calls.length).toBe(2);
  });

  test('append and prepend', () => {
    document.body.innerHTML =
      '<div id="container">' + '   <span id="username">abc</span>' + '   <span id="password">test</span>' + '</div>';

    $('#username').append('<span>test</span>');
    $('#username').prepend('<span>test</span>');

    expect($('#username').html()).toBe('<span>test</span>abc<span>test</span>');

    $('#password').append('<span>test</span>');
    $('#password').prepend('<span>test</span>');

    expect($('#password').html()).toBe('<span>test</span>test<span>test</span>');
  });

  test('before and after', () => {
    document.body.innerHTML = '<div id="container">' + '   <span id="username">abc</span>' + '</div>';

    $('#username').after('<span>test</span>');
    $('#username').before('<span>test</span>');

    expect($('#container').html()).toBe('   <span>test</span><span id="username">abc</span><span>test</span>');
  });

  describe('Attribute', () => {
    test('Get', () => {
      document.body.innerHTML =
        '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';
  
      expect($('#username').attr('class')).toBe('test-class');
      expect($('#username').attr('id')).toBe('username');
    });

    test('Set', () => {
      document.body.innerHTML =
        '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';
  
      $('#username').attr('class', 'test-class-2');
      $('#username').attr('id', 'username-2');
  
      expect($('#username-2').attr('class')).toBe('test-class-2');
      expect($('#username-2').attr('id')).toBe('username-2');
    })

    test('Remove', () => {
      document.body.innerHTML =
        '<div id="container">' + '   <span data-test="test-span" id="username" class="test-class">abc</span>' + '</div>';
  
      $('#username').removeAttr('class');
      $('#username').removeAttr('id');
  
      expect($('[data-test=test-span]').attr('class')).toBe(null);
      expect($('[data-test=test-span]').attr('id')).toBe(null);
    })
  })

  describe('hide and show', () => {
    test('display', () => {
      document.body.innerHTML =
        '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';

      $('#username').hide();

      expect($('#username').css('display')).toBe('none');

      $('#username').show();

      expect($('#username').css('display')).toBe('');
    });

    test('aria only', () => {
      document.body.innerHTML =
        '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';

      $('#username').hide(true);

      expect($('#username').css('display')).not.toBe('none');
      expect($('#username').attr('aria-hidden')).toBe('true');

      $('#username').show(true);

      expect($('#username').attr('aria-hidden')).toBe('false');
    });
  });

  test('html', () => {
    document.body.innerHTML =
      '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';

    expect($('#username').html()).toBe('abc');

    $('#username').html('<span>test</span>');

    expect($('#username').html()).toBe('<span>test</span>');
  });

  test('text', () => {
    document.body.innerHTML =
      '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';

    expect($('#username').text()).toBe('abc');

    $('#username').text('test');

    expect($('#username').text()).toBe('test');
  });

  test('val', () => {
    document.body.innerHTML =
      '<div id="container">' + '   <input id="username" class="test-class" value="abc">' + '</div>';

    expect($('#username').val()).toBe('abc');

    $('#username').val('test');

    expect($('#username').val()).toBe('test');
  });

  describe('class', () => {
    test('add', () => {
      document.body.innerHTML =
        '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';

      expect($('#username').attr('class')).toBe('test-class');

      $('#username').addClass('test-class-2');

      expect($('#username').attr('class')).toBe('test-class test-class-2');
    });

    test('remove', () => {
      document.body.innerHTML =
        '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';

      expect($('#username').attr('class')).toBe('test-class');

      $('#username').removeClass('test-class');

      expect($('#username').attr('class')).toBe('');
    });

    test('toggle', () => {
      document.body.innerHTML =
        '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';

      expect($('#username').attr('class')).toBe('test-class');

      $('#username').toggleClass('test-class');

      expect($('#username').attr('class')).toBe('');

      $('#username').toggleClass('test-class');

      expect($('#username').attr('class')).toBe('test-class');
    });
  });

  test('css', () => {
    document.body.innerHTML =
      '<div id="container">' + '   <span id="username" class="test-class">abc</span>' + '</div>';

    expect($('#username').css('color')).toBe('');

    $('#username').css('color', 'red');

    expect($('#username').css('color')).toBe('red');

    $('#username').css('color', 'green');

    expect($('#username').css('color')).toBe('green');

    $('#username').css('color', 'blue');

    expect($('#username').css('color')).toBe('blue');

    $('#username').css('color', 'black');

    expect($('#username').css('color')).toBe('black');

    $('#username').css('color', 'white');

    expect($('#username').css('color')).toBe('white');
  });
});
