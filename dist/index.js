'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styles = require('../src/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {

  return _reactDom2.default.createPortal(_react2.default.createElement(
    'div',
    { className: 'modal' },
    _react2.default.createElement(
      'div',
      { style: _styles.modalContainer },
      _react2.default.createElement(
        'div',
        { style: _styles.modalContent },
        _react2.default.createElement(
          'span',
          { onClick: props.close, style: _styles.span },
          '\xD7'
        ),
        props.children
      )
    )
  ), document.querySelector('#modal'));
};

exports.default = Modal;
