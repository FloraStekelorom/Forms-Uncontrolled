var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UncontrolledForm = function (_React$Component) {
  _inherits(UncontrolledForm, _React$Component);

  function UncontrolledForm(props) {
    _classCallCheck(this, UncontrolledForm);

    var _this = _possibleConstructorReturn(this, (UncontrolledForm.__proto__ || Object.getPrototypeOf(UncontrolledForm)).call(this, props));

    _this.inputRef = React.createRef(); // use .createRef() to create a ref object

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(UncontrolledForm, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var value = this.inputRef.current.value;
      console.log("form submitted: " + value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "label",
          null,
          "Name:",
          React.createElement("input", { type: "text", ref: this.inputRef, defaultValue: "John" })
        ),
        React.createElement("input", { type: "checkbox", ref: this.checkboxRef, defaultChecked: true })
      );
    }
  }]);

  return UncontrolledForm;
}(React.Component);

ReactDOM.render(React.createElement(UncontrolledForm, null), document.getElementById('root'));