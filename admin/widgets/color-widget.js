/**
 * Example custom Decap CMS widget.
 * Register in admin/index.html before the closing </head>:
 *   <script src="/admin/widgets/color-widget.js"></script>
 *
 * Then use in config.yml:
 *   { label: "Color", name: "color", widget: "color" }
 */

const ColorControl = window.createClass({
  getInitialState() {
    return { value: this.props.value || "#000000" };
  },
  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
  },
  render() {
    return window.h("input", {
      type: "color",
      value: this.state.value,
      onChange: this.handleChange,
    });
  },
});

const ColorPreview = window.createClass({
  render() {
    return window.h("div", {
      style: { backgroundColor: this.props.value, width: 40, height: 40, borderRadius: 4 },
    });
  },
});

CMS.registerWidget("color", ColorControl, ColorPreview);