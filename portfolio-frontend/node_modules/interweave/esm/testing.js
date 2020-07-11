import React from 'react';
import { TAGS, Element, Matcher, Filter } from './index';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var TOKEN_LOCATIONS = ['no tokens', '{token}', ' {token} ', '{token} pattern at beginning', 'pattern at end {token}', 'pattern in {token} middle', '{token} pattern at beginning and end {token}', '{token} pattern on {token} all sides {token}', 'pattern {token} used {token} multiple {token} times', 'tokens next {token} {token} {token} to each other', 'token next to {token}, a comma', 'token by a period {token}.', 'token after a colon: {token}', 'token after a\n{token} new line', 'token before a {token}\n new line', 'token surrounded by ({token}) parenthesis'];
var SOURCE_PROP = {
  compact: false,
  locale: 'en',
  version: 'latest'
};
var VALID_EMOJIS = [['1F621', '😡', ':enraged:', '>:/'], ['1F468-200D-1F469-200D-1F467-200D-1F466', '👨‍👩‍👧‍👦', ':family_mwgb:'], ['1F1FA-1F1F8', '🇺🇸', ':flag_us:'], ['1F63A', '😺', ':smiling_cat:'], ['1F3EF', '🏯', ':japanese_castle:'], ['1F681', '🚁', ':helicopter:'], ['1F469-200D-2764-FE0F-200D-1F468', '👩‍❤️‍👨', ':couple_mw:'], ['1F1E7-1F1F4', '🇧🇴', ':flag_bo:'], ['1F468-200D-1F468-200D-1F466', '👨‍👨‍👦', ':family_mmb:'], ['1F3C0', '🏀', ':basketball:']];
function createExpectedToken(value, factory, index, join) {
  if (join === void 0) {
    join = false;
  }

  if (index === 0) {
    return TOKEN_LOCATIONS[0];
  }

  var count = -1;
  var tokens = TOKEN_LOCATIONS[index].split(/({token})/).map(function (row) {
    if (row === '{token}') {
      count += 1;
      return factory(value, count);
    }

    return row;
  }).filter(Boolean);
  return join ? tokens.join('') : tokens;
}
var MOCK_MARKUP = "<main role=\"main\">\n  Main content\n  <div>\n    <a href=\"#\">Link</a>\n    <span class=\"foo\">String</span>\n  </div>\n</main>\n<aside id=\"sidebar\">\n  Sidebar content\n</aside>";
var MOCK_INVALID_MARKUP = "<div bgcolor=\"black\">\n  <font color=\"red\">Outdated font.</font>\n  <script type=\"text/javascript\"></script>\n  <p align=\"center\">More text <strike>with outdated stuff</strike>.</p>\n</div>";
var parentConfig = _extends({
  children: [],
  content: 0,
  invalid: [],
  parent: [],
  self: true,
  tagName: 'div',
  type: 0,
  void: false
}, TAGS.div);
function matchCodeTag(string, tag) {
  var matches = string.match(new RegExp("\\[" + tag + "\\]"));

  if (!matches) {
    return null;
  }

  return {
    children: tag,
    customProp: 'foo',
    index: matches.index,
    length: matches[0].length,
    match: matches[0],
    valid: true,
    void: false
  };
}
var CodeTagMatcher = function (_Matcher) {
  _inheritsLoose(CodeTagMatcher, _Matcher);

  function CodeTagMatcher(tag, key) {
    var _this;

    if (key === void 0) {
      key = '';
    }

    _this = _Matcher.call(this, tag, {}) || this;

    _defineProperty(_assertThisInitialized(_this), "tag", void 0);

    _defineProperty(_assertThisInitialized(_this), "key", void 0);

    _this.tag = tag;
    _this.key = key;
    return _this;
  }

  var _proto = CodeTagMatcher.prototype;

  _proto.replaceWith = function replaceWith(match, props) {
    if (props === void 0) {
      props = {};
    }

    var _props = props,
        children = _props.children;

    if (this.key) {
      props.key = this.key;
    }

    return React.createElement(Element, _extends({
      tagName: "span"
    }, props), children.toUpperCase());
  };

  _proto.asTag = function asTag() {
    return 'span';
  };

  _proto.match = function match(string) {
    return matchCodeTag(string, this.tag);
  };

  return CodeTagMatcher;
}(Matcher);
var MarkdownBoldMatcher = function (_Matcher2) {
  _inheritsLoose(MarkdownBoldMatcher, _Matcher2);

  function MarkdownBoldMatcher() {
    return _Matcher2.apply(this, arguments) || this;
  }

  var _proto2 = MarkdownBoldMatcher.prototype;

  _proto2.replaceWith = function replaceWith(children, props) {
    return React.createElement("b", props, children);
  };

  _proto2.asTag = function asTag() {
    return 'b';
  };

  _proto2.match = function match(value) {
    return this.doMatch(value, /\*\*((?:[\0-\)\+-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\*\*/, function (matches) {
      return {
        match: matches[1]
      };
    });
  };

  return MarkdownBoldMatcher;
}(Matcher);
var MarkdownItalicMatcher = function (_Matcher3) {
  _inheritsLoose(MarkdownItalicMatcher, _Matcher3);

  function MarkdownItalicMatcher() {
    return _Matcher3.apply(this, arguments) || this;
  }

  var _proto3 = MarkdownItalicMatcher.prototype;

  _proto3.replaceWith = function replaceWith(children, props) {
    return React.createElement("i", props, children);
  };

  _proto3.asTag = function asTag() {
    return 'i';
  };

  _proto3.match = function match(value) {
    return this.doMatch(value, /_((?:[\0-\^`-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)_/, function (matches) {
      return {
        match: matches[1]
      };
    });
  };

  return MarkdownItalicMatcher;
}(Matcher);
var MockMatcher = function (_Matcher4) {
  _inheritsLoose(MockMatcher, _Matcher4);

  function MockMatcher() {
    return _Matcher4.apply(this, arguments) || this;
  }

  var _proto4 = MockMatcher.prototype;

  _proto4.replaceWith = function replaceWith(children, props) {
    return React.createElement("div", props, children);
  };

  _proto4.asTag = function asTag() {
    return 'div';
  };

  _proto4.match = function match() {
    return null;
  };

  return MockMatcher;
}(Matcher);
var LinkFilter = function (_Filter) {
  _inheritsLoose(LinkFilter, _Filter);

  function LinkFilter() {
    return _Filter.apply(this, arguments) || this;
  }

  var _proto5 = LinkFilter.prototype;

  _proto5.attribute = function attribute(name, value) {
    if (name === 'href') {
      return value.replace('foo.com', 'bar.net');
    }

    return value;
  };

  _proto5.node = function node(name, _node) {
    if (name === 'a') {
      _node.setAttribute('target', '_blank');
    } else if (name === 'link') {
      return null;
    }

    return _node;
  };

  return LinkFilter;
}(Filter);
var MockFilter = function (_Filter2) {
  _inheritsLoose(MockFilter, _Filter2);

  function MockFilter() {
    return _Filter2.apply(this, arguments) || this;
  }

  return MockFilter;
}(Filter);

export { CodeTagMatcher, LinkFilter, MOCK_INVALID_MARKUP, MOCK_MARKUP, MarkdownBoldMatcher, MarkdownItalicMatcher, MockFilter, MockMatcher, SOURCE_PROP, TOKEN_LOCATIONS, VALID_EMOJIS, createExpectedToken, matchCodeTag, parentConfig };
