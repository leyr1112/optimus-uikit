import * as React from 'react';
import React__default, { isValidElement, cloneElement, Children, useEffect, useState, useRef, forwardRef, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, ThemeProvider, createGlobalStyle } from 'styled-components';
import { space, typography, layout, variant as variant$1, background, border, position, flexbox, grid, color } from 'styled-system';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import { uniqueId as uniqueId$1, noop as noop$1 } from 'lodash';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { Link as Link$1 } from 'react-router-dom';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get(theme, path, fallback);
    };
};

var rotate$1 = keyframes(templateObject_1$18 || (templateObject_1$18 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled.svg(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$18, templateObject_2$x, templateObject_3$f;

var Icon$2l = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$2k = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2j = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$2i = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$17 || (templateObject_1$17 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ",
    "\n\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var ellipsis = _a.ellipsis;
    return ellipsis &&
        "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, space, typography, layout);
Text.defaultProps = {
    color: "text",
    small: false,
    ellipsis: false,
};
var templateObject_1$17;

var TooltipText = styled(Text)(templateObject_1$16 || (templateObject_1$16 = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var theme = _a.theme;
    return "underline dotted " + theme.colors.textSubtle;
});
var templateObject_1$16;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$8 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$6 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    LIGHT: "light",
};

var _a$4, _b$3;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$8.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$8.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$8.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$3 = {},
    _b$3[variants$6.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$3[variants$6.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$3[variants$6.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$3[variants$6.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "backgroundAlt",
    },
    _b$3[variants$6.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$3[variants$6.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$3[variants$6.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$3[variants$6.LIGHT] = {
        backgroundColor: "input",
        color: "textSubtle",
        boxShadow: "none",
    },
    _b$3);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$15 || (templateObject_1$15 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$2,
}), layout, space);
var templateObject_1$15;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React__default.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default.createElement(React__default.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$6.PRIMARY,
    scale: scales$8.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$14;

var Icon$2h = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M5.98327 15.2932C7.57238 14.6803 9.69993 14.3224 12 14.3224C14.3001 14.3224 16.4276 14.6803 18.0167 15.2932C18.808 15.5984 19.5168 15.9864 20.0451 16.4682C20.5739 16.9503 21 17.6045 21 18.4081C21 20.1597 19.6652 21.6227 17.921 21.7829L17.7834 21.7955C13.9359 22.1489 10.0641 22.1489 6.21662 21.7955L6.07901 21.7829C4.33478 21.6227 3 20.1597 3 18.4081C3 17.6045 3.42611 16.9503 3.95486 16.4682C4.48317 15.9864 5.19201 15.5984 5.98327 15.2932Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.7256 1C8.72367 1 7.96795 1.90072 8.15187 2.87568L8.58709 5.18266C7.11275 5.82653 6 6.93833 6 8.33333V9.18182C6 10.3351 6.77077 11.3007 7.84829 11.9526C8.93423 12.6095 10.4033 13 12 13C13.5967 13 15.0658 12.6095 16.1517 11.9526C17.2292 11.3007 18 10.3351 18 9.18182V8.33333C18 6.9309 16.8757 5.81482 15.3888 5.17222L15.8221 2.87568C16.006 1.90072 15.2503 1 14.2483 1C13.3642 1 12.6474 1.70952 12.6474 2.58476V4.53674C12.4347 4.52247 12.2187 4.51515 12 4.51515C11.7724 4.51515 11.5477 4.52308 11.3265 4.53853V2.58476C11.3265 1.70952 10.6098 1 9.7256 1Z" }))); };

var Icon$2g = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 14.2619C9.69993 14.2619 7.57238 14.6197 5.98327 15.2327C5.19201 15.5379 4.48317 15.9258 3.95486 16.4076C3.42611 16.8898 3 17.544 3 18.3476C3 20.0992 4.33478 21.5622 6.07901 21.7223L6.21662 21.735C10.0641 22.0883 13.9359 22.0883 17.7834 21.735L17.921 21.7223C19.6652 21.5622 21 20.0992 21 18.3476C21 17.544 20.5739 16.8898 20.0451 16.4076C19.5168 15.9258 18.808 15.5379 18.0167 15.2327C16.4276 14.6197 14.3001 14.2619 12 14.2619ZM5 18.3476C5 18.2991 5.0216 18.1416 5.3025 17.8854C5.58383 17.6289 6.04656 17.3519 6.70302 17.0987C8.00934 16.5948 9.88179 16.2619 12 16.2619C14.1182 16.2619 15.9907 16.5948 17.297 17.0987C17.9534 17.3519 18.4162 17.6289 18.6975 17.8854C18.9784 18.1416 19 18.2991 19 18.3476C19 19.0655 18.453 19.6651 17.7381 19.7307L17.6005 19.7434C13.8747 20.0855 10.1253 20.0855 6.39952 19.7434L6.26191 19.7307C5.54705 19.6651 5 19.0655 5 18.3476Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.5 7.7619C17.5 10.7995 15.0376 13.2619 12 13.2619C8.96243 13.2619 6.5 10.7995 6.5 7.7619C6.5 4.72433 8.96243 2.2619 12 2.2619C15.0376 2.2619 17.5 4.72433 17.5 7.7619ZM15.5 7.7619C15.5 9.6949 13.933 11.2619 12 11.2619C10.067 11.2619 8.5 9.6949 8.5 7.7619C8.5 5.82891 10.067 4.2619 12 4.2619C13.933 4.2619 15.5 5.82891 15.5 7.7619Z" }))); };

var Icon$2f = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$2e = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$2d = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$2c = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$2b = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$2a = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M21 11.1835L9.83 11.1835L14.71 6.30347C15.1 5.91347 15.1 5.27347 14.71 4.88347C14.32 4.49347 13.69 4.49347 13.3 4.88347L6.71 11.4735C6.32 11.8635 6.32 12.4935 6.71 12.8835L13.29 19.4835C13.68 19.8735 14.31 19.8735 14.7 19.4835C15.09 19.0935 15.09 18.4635 14.7 18.0735L9.83 13.1835L21 13.1835C21.55 13.1835 22 12.7335 22 12.1835C22 11.6335 21.55 11.1835 21 11.1835Z" }),
        React__default.createElement("path", { d: "M4 19.1835C3.44771 19.1835 3 18.7358 3 18.1835L3 6.18347C3 5.63119 3.44772 5.18347 4 5.18347C4.55229 5.18347 5 5.63119 5 6.18347L5 18.1835C5 18.7358 4.55228 19.1835 4 19.1835Z" })));
};

var Icon$29 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$28 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M3 13.1835H14.17L9.29 18.0635C8.9 18.4535 8.9 19.0935 9.29 19.4835C9.68 19.8735 10.31 19.8735 10.7 19.4835L17.29 12.8935C17.68 12.5035 17.68 11.8735 17.29 11.4835L10.71 4.88347C10.32 4.49347 9.69 4.49347 9.3 4.88347C8.91 5.27347 8.91 5.90347 9.3 6.29347L14.17 11.1835H3C2.45 11.1835 2 11.6335 2 12.1835C2 12.7335 2.45 13.1835 3 13.1835Z" }),
        React__default.createElement("path", { d: "M20 5.18347C20.5523 5.18347 21 5.63119 21 6.18347V18.1835C21 18.7358 20.5523 19.1835 20 19.1835C19.4477 19.1835 19 18.7358 19 18.1835V6.18347C19 5.63119 19.4477 5.18347 20 5.18347Z" })));
};

var Icon$27 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$26 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 00-.7 0z" })));
};

var Icon$25 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$24 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z", fill: "#F1BA0D" })));
};

var Icon$23 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$22 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("path", { d: "M58.6666 34.1665C58.6666 48.8523 46.7275 59.6665 31.9999 59.6665C17.2723 59.6665 5.33325 48.8523 5.33325 34.1665C5.33325 19.4808 17.2723 8.6665 31.9999 8.6665C46.7275 8.6665 58.6666 19.4808 58.6666 34.1665Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M58.6666 29.8335C58.6666 44.5192 46.7275 55.3335 31.9999 55.3335C17.2723 55.3335 5.33325 44.5192 5.33325 29.8335C5.33325 15.1477 17.2723 4.3335 31.9999 4.3335C46.7275 4.3335 58.6666 15.1477 58.6666 29.8335Z", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50.4313 11.0848C48.0923 9.01961 45.3538 7.36511 42.3351 6.21094L7.60376 40.5648C8.9535 43.3887 10.8247 45.9001 13.0998 48.0105L50.4313 11.0848ZM24.6139 54.2485C22.7419 53.762 20.9537 53.0928 19.2734 52.259L55.1875 16.7354C56.1366 18.2849 56.918 19.9495 57.5084 21.7116L24.6139 54.2485Z", fill: "#FFE971" }),
        React__default.createElement("path", { d: "M53.6667 29.5002C53.6667 41.2698 44.0409 49.6668 32.1667 49.6668C20.2926 49.6668 10.6667 41.2698 10.6667 29.5002C10.6667 17.7305 20.2926 9.3335 32.1667 9.3335C44.0409 9.3335 53.6667 17.7305 53.6667 29.5002Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M51.6667 20.6615C45.1982 12.2514 33.2898 9.7153 23.8129 15.1469C14.5027 20.483 10.7276 31.6814 14.4875 41.3335C12.0783 38.0902 10.6667 34.0691 10.6667 29.5527C10.6667 17.7524 20.303 9.3335 32.19 9.3335C40.7965 9.33349 48.2231 13.7468 51.6667 20.6615Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M23.4077 30.5L19.8827 34.0117L16.3333 30.5L19.8827 26.9883L23.4077 30.5ZM31.9999 21.9992L38.0708 28.0055L41.6202 24.4938L35.5494 18.5117L31.9999 15L28.4504 18.5117L22.4041 24.4938L25.9536 28.0055L31.9999 21.9992ZM44.1171 26.9883L40.5921 30.5L44.1416 34.0117L47.6666 30.5L44.1171 26.9883ZM31.9999 39.0008L25.9291 32.9945L22.4041 36.5063L28.4749 42.5125L31.9999 46L35.5494 42.4883L41.6202 36.482L38.0708 32.9945L31.9999 39.0008ZM31.9999 34.0117L35.5494 30.5L31.9999 26.9883L28.4504 30.5L31.9999 34.0117Z", fill: "#191326" })));
};

var Icon$21 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.7792 21.9928 11.5602 21.9788 11.343C18.6515 16.824 10.797 19.3967 6.32085 20.232C7.93393 21.3469 9.8907 22 12 22ZM3.6987 17.5775C2.62604 15.9842 2 14.0652 2 12C2 6.47715 6.47715 2 12 2C16.6548 2 20.5667 5.18031 21.6815 9.48656C20.7816 11.0755 19.4244 12.3811 17.8282 13.4444V7.27607C17.8282 6.86948 17.4986 6.53988 17.092 6.53988H15.3742C14.9676 6.53988 14.638 6.86948 14.638 7.27607V15.0795C14.638 15.1034 14.6392 15.1269 14.6413 15.1501C14.2758 15.3076 13.906 15.4562 13.5337 15.5963V9.36196C13.5337 8.95537 13.2041 8.62577 12.7975 8.62577H11.0798C10.6732 8.62577 10.3436 8.95537 10.3436 9.36196V16.592C9.97218 16.6864 9.60348 16.7732 9.23926 16.8528V11.4479C9.23926 11.0413 8.90966 10.7117 8.50307 10.7117H6.78528C6.37869 10.7117 6.04908 11.0413 6.04908 11.4479V17.3941C5.17906 17.4987 4.38348 17.5575 3.6987 17.5775Z" })));
};

var Icon$20 = function (props) {
    var id = uniqueId("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("rect", { width: "32", height: "40", rx: "5.33333", transform: "matrix(-0.866025 -0.5 -0.5 0.866025 65.6667 24.29)", fill: "#0075EB" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M47.988 26.8647C48.913 25.2625 50.9618 24.7135 52.5641 25.6386C54.3798 26.6868 54.7973 29.1264 53.4335 30.7188L49.9995 34.7284C51.4808 37.0281 52.089 39.7267 50.7938 41.97C49.6296 43.9866 47.3505 44.856 44.9724 44.9153C42.5675 44.9753 39.8188 44.2341 37.2483 42.7501C34.6778 41.266 32.6615 39.2561 31.5111 37.1434C30.3734 35.0542 29.9868 32.6458 31.1511 30.6292C32.4387 28.3989 35.0576 27.5731 37.7711 27.694L39.534 22.694C40.2312 20.7167 42.5527 19.8585 44.3684 20.9068C45.9706 21.8318 46.5196 23.8807 45.5945 25.4829L43.4518 29.1943C43.8691 29.3931 44.2848 29.6114 44.6966 29.8492C45.0944 30.0788 45.4782 30.3206 45.847 30.573L47.988 26.8647ZM39.6099 34.0874C39.0216 35.1064 37.9767 35.6046 37.2761 35.2001C36.5755 34.7956 36.4845 33.6416 37.0728 32.6226C37.6612 31.6035 38.7061 31.1053 39.4067 31.5098C40.1073 31.9143 40.1982 33.0683 39.6099 34.0874ZM43.9649 39.0619C44.6655 39.4663 45.7104 38.9681 46.2987 37.9491C46.8871 36.93 46.7961 35.776 46.0955 35.3715C45.3949 34.9671 44.35 35.4653 43.7616 36.4843C43.1733 37.5034 43.2643 38.6574 43.9649 39.0619Z", fill: "#523193" }),
            React__default.createElement("path", { opacity: "0.7", d: "M49.6666 15.0524L42.5726 10.9566C40.0217 9.48387 36.7599 10.3579 35.2871 12.9088L20.6205 38.3122C19.1477 40.8631 20.0217 44.1249 22.5726 45.5976L26.7339 48.0002L44.3333 48.0002C47.2788 48.0002 49.6666 45.6124 49.6666 42.6668L49.6666 15.0524Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M33.7371 52.0434L43.094 46.6412C45.6449 45.1684 46.5189 41.9066 45.0461 39.3557L32.532 17.6807L20.6205 38.3121C19.1477 40.863 20.0217 44.1249 22.5726 45.5976L33.7371 52.0434Z", fill: "#452A7A" }),
            React__default.createElement("rect", { x: "16", y: "6.3335", width: "32", height: "40", rx: "5.33333", fill: "#0075EB" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.3938 16.122C33.3938 14.113 35.0224 12.4844 37.0314 12.4844C39.3079 12.4844 41.0251 14.5519 40.6071 16.7897L39.5548 22.4247C42.1963 23.783 44.2335 25.9905 44.2335 28.8033C44.2335 31.3318 42.5623 33.3867 40.3582 34.7336C38.1293 36.0958 35.142 36.8911 31.919 36.8911C28.696 36.8911 25.7087 36.0958 23.4798 34.7336C21.2757 33.3867 19.6045 31.3318 19.6045 28.8033C19.6045 26.0068 21.6189 23.8083 24.2362 22.4489L23.1794 16.7898C22.7615 14.5519 24.4786 12.4844 26.7552 12.4844C28.7642 12.4844 30.3928 14.113 30.3928 16.122L30.3928 20.7755C30.8932 20.7359 31.4026 20.7155 31.919 20.7155C32.4177 20.7155 32.9099 20.7345 33.3938 20.7715V16.122ZM29.4367 27.4631C29.4367 28.7408 28.7246 29.7766 27.8461 29.7766C26.9677 29.7766 26.2556 28.7408 26.2556 27.4631C26.2556 26.1854 26.9677 25.1496 27.8461 25.1496C28.7246 25.1496 29.4367 26.1854 29.4367 27.4631ZM36.233 29.7763C37.1115 29.7763 37.8236 28.7405 37.8236 27.4627C37.8236 26.185 37.1115 25.1492 36.233 25.1492C35.3546 25.1492 34.6425 26.185 34.6425 27.4627C34.6425 28.7405 35.3546 29.7763 36.233 29.7763Z", fill: "#0075EB" }),
            React__default.createElement("path", { opacity: "0.7", d: "M21.3333 46.3334C18.3878 46.3334 16 43.9456 16 41.0001L16 15.2882L23.4272 11.0001C25.9781 9.52733 29.24 10.4013 30.7127 12.9522L45.3794 38.3556C46.8521 40.9065 45.9781 44.1684 43.4273 45.6411L42.2282 46.3334H21.3333Z", fill: "#0075EB" }),
            React__default.createElement("rect", { x: "-1.66675", y: "24.29", width: "32", height: "40", rx: "5.33333", transform: "rotate(-30 -1.66675 24.29)", fill: "#CAB3F8" }),
            React__default.createElement("path", { opacity: "0.7", fillRule: "evenodd", clipRule: "evenodd", d: "M19.5708 25.8631C18.6224 24.2205 19.1853 22.12 20.828 21.1715C22.6894 20.0968 25.0695 20.9767 25.7842 23.0038L27.584 28.1082C30.3851 27.9718 33.0929 28.8151 34.4208 31.1151C35.6144 33.1825 35.218 35.6517 34.0517 37.7935C32.8722 39.9595 30.805 42.0202 28.1697 43.5417C25.5344 45.0632 22.7162 45.8231 20.2507 45.7615C17.8126 45.7007 15.476 44.8094 14.2824 42.7419C12.9623 40.4553 13.5715 37.7068 15.0698 35.3595L11.5341 31.2312C10.136 29.5986 10.564 27.0975 12.4255 26.0228C14.0681 25.0743 16.1686 25.6372 17.1171 27.2799L19.3139 31.0849C19.7043 30.8162 20.1112 30.5591 20.5335 30.3153C20.9413 30.0799 21.3527 29.8631 21.7658 29.6649L19.5708 25.8631ZM21.6892 37.0043C22.2924 38.049 22.1991 39.2322 21.4809 39.6469C20.7626 40.0615 19.6913 39.5508 19.0881 38.506C18.485 37.4613 18.5782 36.2781 19.2965 35.8634C20.0148 35.4487 21.086 35.9595 21.6892 37.0043ZM28.3382 35.6877C29.0564 35.273 29.1497 34.0898 28.5465 33.0451C27.9433 32.0003 26.8721 31.4896 26.1538 31.9043C25.4355 32.3189 25.3422 33.5021 25.9454 34.5468C26.5486 35.5916 27.6199 36.1024 28.3382 35.6877Z", fill: "#0075EB" }),
            React__default.createElement("g", { opacity: "0.1" },
                React__default.createElement("path", { d: "M13.0716 49.8608L8.23887 41.4903L26.0423 10.6538C27.1289 11.0794 28.0839 11.8629 28.7127 12.952L31.5468 17.8608L13.0716 49.8608Z", fill: "white" }),
                React__default.createElement("path", { d: "M30.936 51.698L26.3172 54.3647L39.4698 31.5838L41.0094 34.2505L30.936 51.698Z", fill: "white" }),
                React__default.createElement("path", { d: "M24.0449 10.2847L7.1336 39.5759L5.59399 36.9092L20.1155 11.7572L21.4272 10.9999C22.2535 10.5229 23.1544 10.292 24.0449 10.2847Z", fill: "white" }))),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: id },
                React__default.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$1$ = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#808080" : "#bdc2c4";
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default.createElement("g", { mask: "url(#mask0)" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1_ = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1Z = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M15 12.1757C15 13.8325 13.6569 15.1757 12 15.1757C10.3431 15.1757 9 13.8325 9 12.1757C9 10.5188 10.3431 9.17566 12 9.17566C13.6569 9.17566 15 10.5188 15 12.1757Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.83 4.17566H20C21.1 4.17566 22 5.07566 22 6.17566V18.1757C22 19.2757 21.1 20.1757 20 20.1757H4C2.9 20.1757 2 19.2757 2 18.1757V6.17566C2 5.07566 2.9 4.17566 4 4.17566H7.17L8.4 2.82566C8.78 2.41566 9.32 2.17566 9.88 2.17566H14.12C14.68 2.17566 15.22 2.41566 15.59 2.82566L16.83 4.17566ZM7 12.1757C7 14.9357 9.24 17.1757 12 17.1757C14.76 17.1757 17 14.9357 17 12.1757C17 9.41566 14.76 7.17566 12 7.17566C9.24 7.17566 7 9.41566 7 12.1757Z" }))); };

var Icon$1Y = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1X = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1W = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 23 22" }, props),
        React__default.createElement("path", { d: "M21.5 1l-20 20", strokeWidth: 2, stroke: "currentColor", strokeLinecap: "round" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.033 19H19.5a1 1 0 100-2H9.033l-2 2zm3-3H18.5a1 1 0 001-1V6.533l-2 2V14h-2v-3.467l-2 2V14h-1.467l-2 2zm.936-8H10.5a1 1 0 00-1 1v.469L10.969 8zm-2 2L5.5 13.469V11a1 1 0 011-1h2.469zM4.5 14.469l-2 2V6a1 1 0 012 0v8.469z" })));
};

var Icon$1V = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1U = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2.75711C6.48 2.75711 2 7.23711 2 12.7571C2 18.2771 6.48 22.7571 12 22.7571C17.52 22.7571 22 18.2771 22 12.7571C22 7.23711 17.52 2.75711 12 2.75711ZM9.29 17.0471L5.7 13.4571C5.31 13.0671 5.31 12.4371 5.7 12.0471C6.09 11.6571 6.72 11.6571 7.11 12.0471L10 14.9271L16.88 8.04711C17.27 7.65711 17.9 7.65711 18.29 8.04711C18.68 8.43711 18.68 9.06711 18.29 9.45711L10.7 17.0471C10.32 17.4371 9.68 17.4371 9.29 17.0471Z" })));
};

var Icon$1T = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1S = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1R = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1Q = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1P = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1O = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1N = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1M = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1L = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.13298 26.6579C3.13253 26.6921 3.1323 26.7263 3.1323 26.7606C3.1323 30.9564 6.53367 34.3577 10.7295 34.3577C14.9253 34.3577 18.3266 30.9564 18.3266 26.7606C18.3266 26.7263 18.3264 26.6921 18.326 26.6579H14.732C14.7329 26.692 14.7333 26.7262 14.7333 26.7606C14.7333 28.9719 12.9407 30.7645 10.7294 30.7645C8.51812 30.7645 6.7255 28.9719 6.7255 26.7606C6.7255 26.7262 6.72593 26.692 6.72679 26.6579H3.13298ZM10.7295 5.71436C15.6624 5.71436 19.6613 9.71326 19.6613 14.6462C19.6613 19.5791 15.6624 23.578 10.7295 23.578C5.79663 23.578 1.79773 19.5791 1.79773 14.6462C1.79773 9.71326 5.79663 5.71436 10.7295 5.71436ZM10.7295 9.3076C13.6779 9.3076 16.0681 11.6977 16.0681 14.6461C16.0681 17.5945 13.6779 19.9847 10.7295 19.9847C7.78111 19.9847 5.39096 17.5945 5.39096 14.6461C5.39096 11.6977 7.78111 9.3076 10.7295 9.3076ZM11.3454 12.9033C12.0632 13.157 12.5775 13.8415 12.5775 14.6462C12.5775 15.6668 11.7501 16.4941 10.7295 16.4941C9.70893 16.4941 8.88157 15.6668 8.88157 14.6462C8.88157 13.8416 9.39577 13.1571 10.1135 12.9034V11.6689H11.3454V12.9033ZM22.7464 16.9552C22.154 15.8735 21.8172 14.6318 21.8172 13.3115C21.8172 9.11573 25.2186 5.71436 29.4144 5.71436C33.6102 5.71436 37.0115 9.11573 37.0115 13.3115C37.0115 14.6319 36.6747 15.8735 36.0823 16.9553C35.1444 16.216 34.0807 15.6291 32.9286 15.232C33.2408 14.6618 33.4183 14.0074 33.4183 13.3115C33.4183 11.1002 31.6257 9.30761 29.4144 9.30761C27.2031 9.30761 25.4105 11.1002 25.4105 13.3115C25.4105 14.0074 25.588 14.6618 25.9002 15.2319C24.7481 15.629 23.6844 16.2159 22.7464 16.9552ZM29.4144 34.3577C34.3473 34.3577 38.3462 30.3588 38.3462 25.4259C38.3462 20.493 34.3473 16.4941 29.4144 16.4941C24.4815 16.4941 20.4826 20.493 20.4826 25.4259C20.4826 30.3588 24.4815 34.3577 29.4144 34.3577ZM29.4144 30.7645C32.3628 30.7645 34.7529 28.3743 34.7529 25.4259C34.7529 22.4775 32.3628 20.0874 29.4144 20.0874C26.466 20.0874 24.0758 22.4775 24.0758 25.4259C24.0758 28.3743 26.466 30.7645 29.4144 30.7645ZM30.0303 27.1688C30.7481 26.9151 31.2624 26.2306 31.2624 25.4259C31.2624 24.4053 30.435 23.578 29.4144 23.578C28.3938 23.578 27.5665 24.4053 27.5665 25.4259C27.5665 26.2305 28.0807 26.915 28.7984 27.1687V28.4032H30.0303V27.1688Z", fill: "#DEAE30" })));
};

var Icon$1K = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9.43458 5.26321C9.31196 4.60661 9.81578 4 10.4837 4C11.0732 4 11.551 4.47784 11.551 5.06729V6.38309C11.6985 6.37268 11.8483 6.36735 12 6.36735C12.1458 6.36735 12.2898 6.37227 12.4316 6.38189V5.06729C12.4316 4.47784 12.9094 4 13.4989 4C14.1668 4 14.6707 4.60661 14.548 5.26321L14.2592 6.80987C15.2505 7.24263 16 7.99428 16 8.93878V9.5102C16 10.2869 15.4862 10.9372 14.7678 11.3762C14.0438 11.8186 13.0645 12.0816 12 12.0816C10.9355 12.0816 9.95615 11.8186 9.23219 11.3762C8.51384 10.9372 8 10.2869 8 9.5102V8.93878C8 7.99928 8.74184 7.25052 9.72473 6.81689L9.43458 5.26321Z" }),
        React__default.createElement("path", { d: "M6 11C6 12.1 5.1 13 4 13C2.9 13 2 12.1 2 11C2 9.9 2.9 9 4 9C5.1 9 6 9.9 6 11Z" }),
        React__default.createElement("path", { d: "M4 14C4.39 14 4.76 14.04 5.13 14.1C4.73 14.78 4.5 15.56 4.5 16.39V18H1C0.447715 18 0 17.5523 0 17V16.43C0 15.62 0.48 14.9 1.22 14.58C2.07 14.21 3.01 14 4 14Z" }),
        React__default.createElement("path", { d: "M22 11C22 12.1 21.1 13 20 13C18.9 13 18 12.1 18 11C18 9.9 18.9 9 20 9C21.1 9 22 9.9 22 11Z" }),
        React__default.createElement("path", { d: "M22.78 14.58C23.52 14.9 24 15.62 24 16.43V17C24 17.5523 23.5523 18 23 18H19.5V16.39C19.5 15.56 19.27 14.78 18.87 14.1C19.24 14.04 19.61 14 20 14C20.99 14 21.93 14.21 22.78 14.58Z" }),
        React__default.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.13 16.24 13.65C17.32 14.13 18 15.21 18 16.39V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V16.39C6 15.21 6.68 14.13 7.76 13.65C8.93 13.14 10.37 12.75 12 12.75Z" })));
};

var Icon$1J = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z" })));
};

var Icon$1I = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$1H = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React__default.createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React__default.createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React__default.createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React__default.createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React__default.createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React__default.createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React__default.createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React__default.createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React__default.createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$1G = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M13 7C13 6.44772 12.5523 6 12 6C11.4478 6 11 6.44772 11 7V7.51206C9.97631 7.76875 9.16137 8.59434 8.94664 9.66796C8.60189 11.3917 9.92035 13 11.6783 13H12.7143C13.1483 13 13.5 13.3518 13.5 13.7857C13.5 14.2197 13.1483 14.5714 12.7143 14.5714H11.4947C11.3096 14.5714 11.1282 14.5201 10.9706 14.4231L10.5241 14.1483C10.0538 13.8589 9.43783 14.0055 9.14838 14.4759C8.85893 14.9463 9.00559 15.5622 9.47594 15.8517L9.92241 16.1264C10.2535 16.3302 10.6197 16.4668 11 16.5304V17C11 17.5523 11.4478 18 12 18C12.5523 18 13 17.5523 13 17V16.557C14.4043 16.4139 15.5 15.2278 15.5 13.7857C15.5 12.2472 14.2528 11 12.7143 11H11.6783C11.1824 11 10.8106 10.5464 10.9078 10.0602C10.9813 9.69293 11.3037 9.42857 11.6783 9.42857H12.2948C12.5269 9.42857 12.7494 9.52076 12.9135 9.68485L13.0786 9.84996C13.4692 10.2405 14.1023 10.2405 14.4929 9.84996C14.8834 9.45944 14.8834 8.82627 14.4929 8.43575L14.3278 8.27064C13.9582 7.90106 13.4983 7.64249 13 7.5164V7Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" })));
};

var Icon$1F = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 20 16" }, props),
        React__default.createElement("path", { d: "M16.93 1.644A16.491 16.491 0 0012.86.38a.062.062 0 00-.066.031c-.175.313-.37.72-.506 1.041a15.226 15.226 0 00-4.573 0A10.54 10.54 0 007.2.412a.064.064 0 00-.065-.031 16.447 16.447 0 00-4.07 1.263.058.058 0 00-.028.023C.444 5.54-.266 9.319.083 13.05a.069.069 0 00.026.047 16.584 16.584 0 004.994 2.525.064.064 0 00.07-.023c.385-.526.728-1.08 1.022-1.662a.063.063 0 00-.035-.088 10.917 10.917 0 01-1.56-.744.064.064 0 01-.007-.106c.105-.079.21-.16.31-.243a.062.062 0 01.065-.009c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 01.066.008c.1.083.204.165.31.244a.064.064 0 01-.005.106c-.499.291-1.017.537-1.561.743a.064.064 0 00-.034.089c.3.582.643 1.135 1.02 1.66a.063.063 0 00.07.025 16.53 16.53 0 005.003-2.525.064.064 0 00.026-.046c.417-4.314-.699-8.061-2.957-11.384a.05.05 0 00-.026-.023zM6.684 10.778c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.111-.796 2.016-1.798 2.016zm6.646 0c-.986 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.111-.788 2.016-1.797 2.016z" })));
};

var Icon$1E = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.207 19.4326C13.207 18.8803 13.6547 18.4326 14.207 18.4326V16.4326C13.6547 16.4326 13.207 15.9849 13.207 15.4326V13.4326C13.207 12.8803 13.6547 12.4326 14.207 12.4326H16.6114L14.7074 8.70395C14.0154 7.34887 12.8502 6.33275 11.4726 5.81533L12.5232 3.01377C12.726 2.47308 12.2673 1.9157 11.6977 2.01064L6.45885 2.88377C5.96111 2.96673 5.68566 3.50765 5.91133 3.95898L6.85595 5.84823C5.51579 6.37512 4.38442 7.37702 3.70684 8.70395L1.66429 12.704C-0.374266 16.6961 2.52538 21.4326 7.00792 21.4326H11.4063C12.0415 21.4326 12.6449 21.3375 13.207 21.1629V19.4326ZM9.17123 8.68262C9.58544 8.68262 9.92123 9.0184 9.92123 9.43262V9.73384C10.5371 9.86761 11.0772 10.2563 11.3971 10.8163L11.5367 11.0605C11.7422 11.4202 11.6173 11.8783 11.2576 12.0838C10.898 12.2893 10.4398 12.1644 10.2343 11.8047L10.0948 11.5605C9.96125 11.3268 9.71274 11.1826 9.4436 11.1826H8.95694C8.54273 11.1826 8.20694 11.5184 8.20694 11.9326C8.20694 12.3468 8.54273 12.6826 8.95694 12.6826H9.64426C10.7246 12.6826 11.6524 13.4504 11.8545 14.5116C12.101 15.8058 11.1913 17.0111 9.92123 17.1659V17.4326C9.92123 17.8468 9.58544 18.1826 9.17123 18.1826C8.75701 18.1826 8.42123 17.8468 8.42123 17.4326V17.1314C7.80534 16.9976 7.26529 16.6089 6.94531 16.0489L6.80576 15.8047C6.60025 15.4451 6.7252 14.9869 7.08484 14.7814C7.44448 14.5759 7.90262 14.7009 8.10812 15.0605L8.24767 15.3047C8.3812 15.5384 8.62971 15.6826 8.89885 15.6826H9.64426C10.1147 15.6826 10.469 15.2545 10.381 14.7923C10.3136 14.4385 10.0044 14.1826 9.64426 14.1826H8.95694C7.7143 14.1826 6.70694 13.1753 6.70694 11.9326C6.70694 10.8746 7.43722 9.98712 8.42123 9.74678V9.43262C8.42123 9.0184 8.75701 8.68262 9.17123 8.68262Z" }),
    React__default.createElement("path", { d: "M15.7071 16.4326C15.4309 16.4326 15.2071 16.6565 15.2071 16.9326V17.9326C15.2071 18.2088 15.4309 18.4326 15.7071 18.4326H21.7071C21.9832 18.4326 22.2071 18.2088 22.2071 17.9326V16.9326C22.2071 16.6565 21.9832 16.4326 21.7071 16.4326H15.7071Z" }),
    React__default.createElement("path", { d: "M14.7071 13.4326C14.4309 13.4326 14.2071 13.6565 14.2071 13.9326V14.9326C14.2071 15.2088 14.4309 15.4326 14.7071 15.4326H20.7071C20.9832 15.4326 21.2071 15.2088 21.2071 14.9326V13.9326C21.2071 13.6565 20.9832 13.4326 20.7071 13.4326H14.7071Z" }),
    React__default.createElement("path", { d: "M14.7071 19.4326C14.4309 19.4326 14.2071 19.6565 14.2071 19.9326V20.9326C14.2071 21.2088 14.4309 21.4326 14.7071 21.4326L20.7071 21.4326C20.9832 21.4326 21.2071 21.2088 21.2071 20.9326V19.9326C21.2071 19.6565 20.9832 19.4326 20.7071 19.4326L14.7071 19.4326Z" }))); };

var Icon$1D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 22 20" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.207 17.836a1 1 0 011-1v-2a1 1 0 01-1-1v-2a1 1 0 011-1h2.404l-1.904-3.728a6 6 0 00-3.234-2.889l1.05-2.801a.75.75 0 00-.825-1.004l-5.24.874a.75.75 0 00-.547 1.075l.945 1.889a6 6 0 00-3.15 2.856l-2.042 4c-2.038 3.992.861 8.728 5.344 8.728h4.398c.635 0 1.239-.095 1.801-.27v-1.73zM8.171 7.086a.75.75 0 01.75.75v.302a2.25 2.25 0 011.476 1.082l.14.244a.75.75 0 11-1.303.745l-.14-.245a.75.75 0 00-.65-.378h-.487a.75.75 0 100 1.5h.687a2.25 2.25 0 01.277 4.484v.266a.75.75 0 01-1.5 0v-.3a2.25 2.25 0 01-1.476-1.083l-.14-.244a.75.75 0 011.303-.745l.14.245a.75.75 0 00.65.377h.746a.75.75 0 100-1.5h-.687a2.25 2.25 0 01-.536-4.435v-.315a.75.75 0 01.75-.75z" }),
        React.createElement("path", { d: "M14.707 14.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 11.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 17.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6z" })));
};

var Icon$1C = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.4063 19.9329C12.066 19.9329 12.6742 19.779 13.207 19.5106V21.6632C12.6449 21.8378 12.0415 21.9329 11.4063 21.9329H7.00792C2.52538 21.9329 -0.374267 17.1964 1.66429 13.2043L3.70684 9.20426C4.30576 8.03138 5.25922 7.11243 6.39803 6.55101L5.46396 4.68288C5.08785 3.93066 5.54693 3.02913 6.3765 2.89087L11.6153 2.01773C12.5647 1.8595 13.3292 2.78847 12.9912 3.68962L11.9333 6.51092C13.1087 7.06815 14.094 8.00302 14.7074 9.20426L16.6114 12.9329H14.3657L12.9261 10.1138C12.2427 8.77534 10.8666 7.93292 9.36372 7.93292H9.05047C7.54759 7.93292 6.17153 8.77534 5.48805 10.1138L3.4455 14.1138C2.08646 16.7753 4.01956 19.9329 7.00792 19.9329H11.4063ZM10.6623 4.20415L7.70695 4.69671L8.32504 5.93291H10.014L10.6623 4.20415Z" }),
    React__default.createElement("path", { d: "M14.707 13.9329C14.4309 13.9329 14.207 14.1568 14.207 14.4329V15.4329C14.207 15.7091 14.4309 15.9329 14.707 15.9329H20.707C20.9832 15.9329 21.207 15.7091 21.207 15.4329V14.4329C21.207 14.1568 20.9832 13.9329 20.707 13.9329H14.707Z" }),
    React__default.createElement("path", { d: "M15.207 17.4329C15.207 17.1568 15.4309 16.9329 15.707 16.9329H21.707C21.9832 16.9329 22.207 17.1568 22.207 17.4329V18.4329C22.207 18.7091 21.9832 18.9329 21.707 18.9329H15.707C15.4309 18.9329 15.207 18.7091 15.207 18.4329V17.4329Z" }),
    React__default.createElement("path", { d: "M14.707 19.9329C14.4309 19.9329 14.207 20.1568 14.207 20.4329V21.4329C14.207 21.7091 14.4309 21.9329 14.707 21.9329L20.707 21.9329C20.9832 21.9329 21.207 21.7091 21.207 21.4329V20.4329C21.207 20.1568 20.9832 19.9329 20.707 19.9329L14.707 19.9329Z" }),
    React__default.createElement("path", { d: "M9.9212 9.93292C9.9212 9.51871 9.58541 9.18292 9.1712 9.18292C8.75699 9.18292 8.4212 9.51871 8.4212 9.93292V10.2471C7.4372 10.4874 6.70692 11.3749 6.70692 12.4329C6.70692 13.6756 7.71427 14.6829 8.95691 14.6829H9.64423C10.0043 14.6829 10.3136 14.9388 10.381 15.2926C10.469 15.7548 10.1147 16.1829 9.64423 16.1829H8.89883C8.62969 16.1829 8.38118 16.0387 8.24765 15.805L8.1081 15.5608C7.90259 15.2012 7.44445 15.0762 7.08481 15.2817C6.72517 15.4872 6.60023 15.9454 6.80573 16.305L6.94528 16.5492C7.26526 17.1092 7.80531 17.4979 8.4212 17.6317V17.9329C8.4212 18.3471 8.75699 18.6829 9.1712 18.6829C9.58541 18.6829 9.9212 18.3471 9.9212 17.9329V17.6662C11.1913 17.5114 12.101 16.3061 11.8545 15.0119C11.6524 13.9507 10.7245 13.1829 9.64423 13.1829H8.95691C8.5427 13.1829 8.20692 12.8471 8.20692 12.4329C8.20692 12.0187 8.5427 11.6829 8.95691 11.6829H9.44357C9.71272 11.6829 9.96123 11.8271 10.0948 12.0608L10.2343 12.305C10.4398 12.6647 10.898 12.7896 11.2576 12.5841C11.6172 12.3786 11.7422 11.9205 11.5367 11.5608L11.3971 11.3166C11.0771 10.7566 10.5371 10.3679 9.9212 10.2341V9.93292Z" }))); };

var Icon$1B = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 16 5" }, props),
        React__default.createElement("path", { d: "M2 0.00384521C0.9 0.00384521 0 0.903845 0 2.00384C0 3.10384 0.9 4.00384 2 4.00384C3.1 4.00384 4 3.10384 4 2.00384C4 0.903845 3.1 0.00384521 2 0.00384521ZM14 0.00384521C12.9 0.00384521 12 0.903845 12 2.00384C12 3.10384 12.9 4.00384 14 4.00384C15.1 4.00384 16 3.10384 16 2.00384C16 0.903845 15.1 0.00384521 14 0.00384521ZM8 0.00384521C6.9 0.00384521 6 0.903845 6 2.00384C6 3.10384 6.9 4.00384 8 4.00384C9.1 4.00384 10 3.10384 10 2.00384C10 0.903845 9.1 0.00384521 8 0.00384521Z" })));
};

var Icon$1A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M20.497 4.6l-.004-.028-.006-.036-.008-.033-.007-.03-.012-.032-.01-.03-.014-.028-.014-.03-.016-.027-.018-.03-.021-.028-.018-.024a.663.663 0 00-.044-.048v-.001a.66.66 0 00-.049-.044l-.024-.018-.028-.02-.03-.018-.026-.016-.03-.015c-.01-.004-.02-.01-.03-.013l-.03-.011-.03-.011-.031-.008-.033-.008-.035-.005-.03-.005A.684.684 0 0019.834 4h-4.667a.667.667 0 100 1.333h3.057l-4.862 4.862a.667.667 0 10.943.943l4.862-4.862v3.057a.667.667 0 101.333 0V4.667a.658.658 0 00-.003-.066zM10.696 12.861l-4.862 4.862v-3.057a.667.667 0 10-1.333 0v4.667l.003.066.005.029.005.035.008.033.008.03.01.032.012.03.013.029.015.03.016.027.017.029.021.028.018.024a.663.663 0 00.093.093l.024.018.029.021.029.018.026.016.03.014.03.014.03.01.031.012.03.007.033.008.036.006.029.004a.657.657 0 00.066.003h4.666a.667.667 0 000-1.333H6.777l4.862-4.862a.667.667 0 00-.943-.943z" })));
};

var Icon$1z = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$1y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.97 0C4.464 0 0 4.465 0 9.97c0 4.403 2.875 8.134 6.789 9.48.49.06.673-.245.673-.49v-1.712c-2.753.611-3.364-1.346-3.364-1.346-.428-1.162-1.101-1.468-1.101-1.468-.917-.611.061-.611.061-.611.979.06 1.53 1.04 1.53 1.04.917 1.528 2.323 1.1 2.874.856a2.13 2.13 0 01.611-1.346c-2.201-.245-4.526-1.1-4.526-4.954 0-1.101.367-1.957 1.04-2.691-.061-.184-.428-1.223.122-2.569 0 0 .857-.245 2.753 1.04.795-.245 1.651-.306 2.507-.306.857 0 1.713.122 2.508.306 1.896-1.285 2.752-1.04 2.752-1.04.55 1.346.184 2.385.123 2.63a3.956 3.956 0 011.04 2.691c0 3.853-2.325 4.648-4.527 4.893.367.306.673.918.673 1.835v2.752c0 .245.184.55.673.49A9.98 9.98 0 0020 9.97C19.939 4.464 15.474 0 9.97 0z" })));
};

var Icon$1x = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1w = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$1v = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$1u = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1t = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$1s = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$1r = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M9 1.625c2.407 0 2.685.01 3.641.052.874.04 1.358.185 1.666.308.422.165.72.36 1.04.669.318.319.514.617.668 1.039.123.318.267.792.308 1.666.042.946.052 1.234.052 3.641s-.01 2.685-.052 3.641c-.04.874-.185 1.358-.308 1.666-.165.422-.36.72-.669 1.04a2.66 2.66 0 01-1.039.668c-.318.123-.792.267-1.666.308-.946.042-1.234.052-3.641.052s-2.685-.01-3.641-.052c-.874-.04-1.358-.185-1.666-.308a2.911 2.911 0 01-1.04-.669 2.659 2.659 0 01-.668-1.039c-.123-.318-.267-.792-.308-1.666-.042-.946-.052-1.234-.052-3.641s.01-2.685.052-3.641c.04-.874.185-1.358.308-1.666.165-.422.36-.72.669-1.04a2.658 2.658 0 011.039-.668c.318-.123.792-.267 1.666-.308.956-.042 1.234-.052 3.641-.052zM9 0C6.552 0 6.254.01 5.287.051c-.957.052-1.615.196-2.18.422a4.311 4.311 0 00-1.595 1.039A4.311 4.311 0 00.473 3.106c-.226.566-.37 1.224-.422 2.18C.011 6.255 0 6.553 0 9s.01 2.746.051 3.713c.042.957.196 1.615.422 2.18.226.597.535 1.091 1.039 1.595.504.504.998.813 1.594 1.039.576.226 1.224.37 2.18.422.957.04 1.266.051 3.714.051s2.746-.01 3.713-.051c.957-.042 1.615-.196 2.18-.422a4.311 4.311 0 001.595-1.039 4.311 4.311 0 001.039-1.594c.226-.576.37-1.224.422-2.18.04-.957.051-1.266.051-3.714s-.01-2.746-.051-3.713c-.042-.957-.196-1.615-.422-2.18a4.312 4.312 0 00-1.039-1.595A4.311 4.311 0 0014.894.473c-.576-.226-1.224-.37-2.18-.422C11.745.011 11.447 0 9 0z" }),
        React.createElement("path", { d: "M9 4.382a4.618 4.618 0 100 9.236 4.618 4.618 0 000-9.236zm0 7.621A3.007 3.007 0 015.997 9 3.007 3.007 0 019 5.997 3.007 3.007 0 0112.003 9 3.007 3.007 0 019 12.003zM13.803 5.277a1.08 1.08 0 100-2.16 1.08 1.08 0 000 2.16z" })));
};

var Icon$1p = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M1.1423 6.58983C1.049 7.04537 1 7.517 1 8C1 11.864 4.136 15 8 15L8.06193 14.9997C8.12656 14.4816 8.24075 13.9788 8.3996 13.4963C8.26762 13.5058 8.13436 13.5106 8 13.5106C4.96231 13.5106 2.48936 11.0377 2.48936 8C2.48936 4.96231 4.96231 2.48936 8 2.48936C11.0377 2.48936 13.5106 4.96231 13.5106 8C13.5106 8.13436 13.5058 8.26762 13.4963 8.3996C13.9788 8.24075 14.4816 8.12656 14.9997 8.06193L15 8C15 6.31095 14.4008 4.761 13.4035 3.55129C13.1174 3.20432 12.7986 2.88535 12.4518 2.5991C11.2417 1.60025 9.6905 1 8 1C7.11135 1 6.2612 1.16587 5.47885 1.46832C3.28464 2.31657 1.62372 4.23914 1.1423 6.58983Z" }),
        React__default.createElement("path", { d: "M8.00003 3.78014C7.58875 3.78014 7.25535 4.11355 7.25535 4.52482V4.84238C6.54327 5.03587 5.97957 5.61723 5.82913 6.36941C5.58337 7.59822 6.52324 8.74468 7.77638 8.74468H8.49648C8.77067 8.74468 8.99294 8.96695 8.99294 9.24113C8.99294 9.51532 8.77067 9.73759 8.49648 9.73759H7.6488C7.52936 9.73759 7.41227 9.70444 7.31055 9.64185L7.00024 9.45089C6.64998 9.23534 6.19129 9.34455 5.97574 9.69482C5.7602 10.0451 5.86941 10.5038 6.21967 10.7193L6.52998 10.9103C6.75353 11.0478 6.99954 11.1424 7.25535 11.1904V11.4752C7.25535 11.8865 7.58875 12.2199 8.00003 12.2199C8.4113 12.2199 8.74471 11.8865 8.74471 11.4752V11.2116C9.72431 11.0894 10.4823 10.2538 10.4823 9.24113C10.4823 8.1444 9.59322 7.25532 8.49648 7.25532H7.77638C7.4631 7.25532 7.22813 6.9687 7.28957 6.6615C7.33598 6.42945 7.53973 6.26241 7.77638 6.26241H8.20491C8.35304 6.26241 8.49509 6.32125 8.59984 6.426L8.71459 6.54075C9.00541 6.83157 9.47692 6.83157 9.76773 6.54075C10.0585 6.24994 10.0585 5.77843 9.76773 5.48762L9.65297 5.37286C9.39901 5.11889 9.08521 4.93852 8.74471 4.84547V4.52482C8.74471 4.11355 8.4113 3.78014 8.00003 3.78014Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 16.0002C9 12.1361 12.1291 9 15.9932 9C19.8643 9 23.0004 12.136 23.0004 16.0002C23.0004 19.8643 19.8643 23.0004 15.9932 23.0004C12.1291 23.0004 9 19.8643 9 16.0002ZM17.2607 13.1703C16.9706 12.2293 16.5425 11.3516 16.0002 10.5553C15.4579 11.3516 15.0297 12.2293 14.7397 13.1703H17.2607ZM11.2773 13.1703H13.2024C13.4143 12.3535 13.7122 11.5675 14.0961 10.8352C12.9095 11.2722 11.9193 12.0993 11.2773 13.1703ZM17.9043 10.8352C18.2882 11.5675 18.5861 12.3536 18.798 13.1703H20.7229C20.0808 12.1054 19.0906 11.2726 17.9043 10.8352ZM10.6593 14.6597C10.5544 15.09 10.4894 15.5389 10.4894 16.0002C10.4894 16.4615 10.5544 16.9104 10.6593 17.3407H12.9138C12.8614 16.8994 12.8228 16.4565 12.8228 16.0002C12.8228 15.5439 12.8614 15.1009 12.9138 14.6597H10.6593ZM14.4171 14.6597C14.3575 15.097 14.3122 15.5457 14.3122 16.0002C14.3122 16.4549 14.3575 16.8972 14.4171 17.3407H17.5832C17.6428 16.8972 17.6882 16.4549 17.6882 16.0002C17.6882 15.5457 17.6429 15.097 17.5833 14.6597H14.4171ZM19.0866 14.6597C19.139 15.1009 19.1776 15.5439 19.1776 16.0002C19.1776 16.4565 19.139 16.8994 19.0866 17.3407H21.341C21.446 16.9104 21.511 16.4615 21.511 16.0002C21.511 15.5389 21.446 15.09 21.341 14.6597H19.0866ZM13.2024 18.8301H11.2773C11.9193 19.9011 12.9095 20.7281 14.0961 21.1652C13.7122 20.4329 13.4143 19.6468 13.2024 18.8301ZM14.7397 18.8301C15.0297 19.7711 15.4579 20.6488 16.0002 21.4451C16.5425 20.6488 16.9706 19.7711 17.2607 18.8301H14.7397ZM17.9043 21.1652C19.0906 20.7278 20.0808 19.895 20.7229 18.8301H18.798C18.5861 19.6468 18.2882 20.4329 17.9043 21.1652Z" })));
};

var Icon$1o = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Icon$1n = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default.createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$1m = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default.createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$1l = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 23 21" }, props),
    React__default.createElement("path", { d: "M17.553 3.091v.001c0 .55.19 1.081.541 1.502l-3.68 7.364a2.346 2.346 0 00-.827.108L10.833 8.97c.14-.3.217-.63.22-.967h0v-.003a2.35 2.35 0 00-2.35-2.35 2.35 2.35 0 00-2.35 2.35V8c.004.499.165.984.465 1.384l-3.477 6.082A2.35 2.35 0 00.75 17.803a2.35 2.35 0 002.35 2.35 2.35 2.35 0 002.35-2.35V17.8a2.338 2.338 0 00-.464-1.384l3.472-6.081c.322.037.65.004.957-.098l2.751 3.096a2.38 2.38 0 00-.216.967v.002a2.352 2.352 0 002.34 2.36 2.352 2.352 0 002.36-2.342v0c0-.55-.19-1.086-.54-1.51l3.68-7.365A2.35 2.35 0 0022.25 3.1a2.347 2.347 0 00-4.697-.01z", stroke: "currentColor", strokeWidth: 0.5 }))); };

var Icon$1k = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$1j = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M10.3 8.09014C9.91 8.48014 9.91 9.10014 10.3 9.49014L12.2 11.3901H3C2.45 11.3901 2 11.8401 2 12.3901C2 12.9401 2.45 13.3901 3 13.3901H12.2L10.3 15.2901C9.91 15.6801 9.91 16.3001 10.3 16.6901C10.69 17.0801 11.31 17.0801 11.7 16.6901L15.29 13.1001C15.68 12.7101 15.68 12.0801 15.29 11.6901L11.7 8.09014C11.31 7.70014 10.69 7.70014 10.3 8.09014ZM20 19.3901H13C12.45 19.3901 12 19.8401 12 20.3901C12 20.9401 12.45 21.3901 13 21.3901H20C21.1 21.3901 22 20.4901 22 19.3901V5.39014C22 4.29014 21.1 3.39014 20 3.39014H13C12.45 3.39014 12 3.84014 12 4.39014C12 4.94014 12.45 5.39014 13 5.39014H20V19.3901Z" })));
};

var Icon$1i = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 60 60" }, props),
        React__default.createElement("title", null, "str_rounded"),
        React__default.createElement("defs", null,
            React__default.createElement("image", { width: "60", height: "60", id: "img1_str_rounded", href: "data:image/png;base64,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" })),
        React__default.createElement("style", null),
        React__default.createElement("use", { id: "Background", href: "#img1_str_rounded", x: "0", y: "0" })));
};

var Icon$1h = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear_logoround)" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_logoround", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#54DADE" }),
                React__default.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$1g = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z" })));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 1140 236" }, props),
        React__default.createElement("title", null, "logoWithText"),
        React__default.createElement("defs", null,
            React__default.createElement("image", { width: "1128", height: "167", id: "img1-logoWithText", href: "data:image/png;base64,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" }),
            React__default.createElement("image", { width: "236", height: "236", id: "img2-logoWithText", href: "data:image/png;base64,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" })),
        React__default.createElement("style", null),
        React__default.createElement("use", { id: "Background-logoWithText", href: "#img1-logoWithText", x: "12", y: "40" }),
        React__default.createElement("use", { id: "logoWithText", href: "#img2-logoWithText", transform: "matrix(1,0,0,1,0,0)" })));
};
var LogoWithTextIcon = React__default.memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$1f = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z", fill: "white" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30 0.416667H10C4.70727 0.416667 0.416667 4.70727 0.416667 10V30C0.416667 35.2927 4.70727 39.5833 10 39.5833H30C35.2927 39.5833 39.5833 35.2927 39.5833 30V10C39.5833 4.70727 35.2927 0.416667 30 0.416667ZM10 0C4.47715 0 0 4.47715 0 10V30C0 35.5228 4.47715 40 10 40H30C35.5228 40 40 35.5228 40 30V10C40 4.47715 35.5228 0 30 0H10Z", fill: "#E7E3EB" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.6906 18.2129C27.0383 17.5606 27.0383 16.503 27.6906 15.8508C28.3429 15.1985 29.4004 15.1985 30.0527 15.8508C30.705 16.503 30.705 17.5606 30.0527 18.2129C29.4004 18.8651 28.3429 18.8651 27.6906 18.2129ZM22.0806 23.8229C21.5914 23.3337 21.5914 22.5405 22.0806 22.0513C22.5698 21.5621 23.363 21.5621 23.8522 22.0513C24.3414 22.5405 24.3414 23.3337 23.8522 23.8229C23.363 24.3121 22.5698 24.3121 22.0806 23.8229ZM30.9385 20.8702C30.4493 20.381 30.4493 19.5879 30.9385 19.0987C31.4277 18.6094 32.2208 18.6094 32.7101 19.0987C33.1993 19.5879 33.1993 20.381 32.7101 20.8702C32.2208 21.3594 31.4277 21.3594 30.9385 20.8702ZM27.9859 23.8229C27.4966 23.3337 27.4966 22.5405 27.9859 22.0513C28.4751 21.5621 29.2682 21.5621 29.7574 22.0513C30.2466 22.5405 30.2466 23.3337 29.7574 23.8229C29.2682 24.3121 28.4751 24.3121 27.9859 23.8229ZM34.1864 23.5276C33.8602 23.2015 33.8602 22.6727 34.1864 22.3465C34.5125 22.0204 35.0413 22.0204 35.3674 22.3465C35.6936 22.6727 35.6936 23.2015 35.3674 23.5276C35.0413 23.8537 34.5125 23.8537 34.1864 23.5276ZM31.2337 26.4802C30.9076 26.1541 30.9076 25.6253 31.2337 25.2992C31.5599 24.973 32.0887 24.973 32.4148 25.2992C32.7409 25.6253 32.7409 26.1541 32.4148 26.4802C32.0887 26.8064 31.5599 26.8064 31.2337 26.4802ZM24.738 21.1655C24.0857 20.5132 24.0857 19.4557 24.738 18.8034C25.3902 18.1511 26.4478 18.1511 27.1001 18.8034C27.7523 19.4557 27.7523 20.5132 27.1001 21.1655C26.4478 21.8178 25.3902 21.8178 24.738 21.1655ZM24.738 15.2602C24.0857 14.608 24.0857 13.5504 24.738 12.8981C25.3902 12.2459 26.4478 12.2459 27.1001 12.8981C27.7523 13.5504 27.7523 14.608 27.1001 15.2602C26.4478 15.9125 25.3902 15.9125 24.738 15.2602ZM21.7853 18.2129C21.1331 17.5606 21.1331 16.503 21.7853 15.8508C22.4376 15.1985 23.4952 15.1985 24.1474 15.8508C24.7997 16.503 24.7997 17.5606 24.1474 18.2129C23.4952 18.8651 22.4376 18.8651 21.7853 18.2129ZM15.8526 18.2129C15.2004 17.5606 15.2004 16.503 15.8526 15.8508C16.5049 15.1985 17.5625 15.1985 18.2147 15.8508C18.867 16.503 18.867 17.5606 18.2147 18.2129C17.5625 18.8651 16.5049 18.8651 15.8526 18.2129ZM10.2427 23.8229C9.75345 23.3337 9.75345 22.5405 10.2427 22.0513C10.7319 21.5621 11.525 21.5621 12.0142 22.0513C12.5034 22.5405 12.5034 23.3337 12.0142 23.8229C11.525 24.3121 10.7319 24.3121 10.2427 23.8229ZM19.1005 20.8702C18.6113 20.381 18.6113 19.5879 19.1005 19.0987C19.5897 18.6094 20.3829 18.6094 20.8721 19.0987C21.3613 19.5879 21.3613 20.381 20.8721 20.8702C20.3829 21.3594 19.5897 21.3594 19.1005 20.8702ZM16.1479 23.8229C15.6587 23.3337 15.6587 22.5405 16.1479 22.0513C16.6371 21.5621 17.4303 21.5621 17.9195 22.0513C18.4087 22.5405 18.4087 23.3337 17.9195 23.8229C17.4303 24.3121 16.6371 24.3121 16.1479 23.8229ZM4.63267 23.5276C4.30653 23.2015 4.30653 22.6727 4.63267 22.3465C4.9588 22.0204 5.48758 22.0204 5.81372 22.3465C6.13985 22.6727 6.13985 23.2015 5.81372 23.5276C5.48758 23.8537 4.9588 23.8537 4.63267 23.5276ZM7.58529 26.4802C7.25915 26.1541 7.25915 25.6253 7.58529 25.2992C7.91143 24.973 8.4402 24.973 8.76634 25.2992C9.09248 25.6253 9.09248 26.1541 8.76634 26.4802C8.4402 26.8064 7.91143 26.8064 7.58529 26.4802ZM19.3958 26.4802C19.0697 26.1541 19.0697 25.6253 19.3958 25.2992C19.7219 24.973 20.2507 24.973 20.5768 25.2992C20.903 25.6253 20.903 26.1541 20.5768 26.4802C20.2507 26.8064 19.7219 26.8064 19.3958 26.4802ZM7.29003 20.8702C6.80082 20.381 6.80082 19.5879 7.29003 19.0987C7.77924 18.6094 8.5724 18.6094 9.0616 19.0987C9.55081 19.5879 9.55081 20.381 9.0616 20.8702C8.5724 21.3594 7.77924 21.3594 7.29003 20.8702ZM12.9 21.1655C12.2477 20.5132 12.2477 19.4557 12.9 18.8034C13.5523 18.1511 14.6098 18.1511 15.2621 18.8034C15.9144 19.4557 15.9144 20.5132 15.2621 21.1655C14.6098 21.8178 13.5523 21.8178 12.9 21.1655ZM12.9 15.2602C12.2477 14.608 12.2477 13.5504 12.9 12.8981C13.5523 12.2459 14.6098 12.2459 15.2621 12.8981C15.9144 13.5504 15.9144 14.608 15.2621 15.2602C14.6098 15.9125 13.5523 15.9125 12.9 15.2602ZM9.94739 18.2129C9.29512 17.5606 9.29512 16.503 9.94739 15.8508C10.5997 15.1985 11.6572 15.1985 12.3095 15.8508C12.9618 16.503 12.9618 17.5606 12.3095 18.2129C11.6572 18.8651 10.5997 18.8651 9.94739 18.2129Z", fill: "#1D222A" })));
};

var Icon$1e = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React__default.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React__default.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$1d = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$1c = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#0075EB" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#0075EB" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0075EB" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#0075EB" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0075EB" }),
        React__default.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React__default.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$1b = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React__default.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$1a = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#0075EB" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#0075EB" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#0075EB" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React__default.createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React__default.createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$19 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z", fill: "#E17726" }),
        React__default.createElement("path", { d: "M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z", fill: "#D5BFB2" }),
        React__default.createElement("path", { d: "M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z", fill: "#D5BFB2" }),
        React__default.createElement("path", { d: "M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z", fill: "#233447" }),
        React__default.createElement("path", { d: "M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z", fill: "#233447" }),
        React__default.createElement("path", { d: "M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z", fill: "#CC6228" }),
        React__default.createElement("path", { d: "M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z", fill: "#CC6228" }),
        React__default.createElement("path", { d: "M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z", fill: "#CC6228" }),
        React__default.createElement("path", { d: "M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z", fill: "#CC6228" }),
        React__default.createElement("path", { d: "M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z", fill: "#E27525" }),
        React__default.createElement("path", { d: "M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z", fill: "#E27525" }),
        React__default.createElement("path", { d: "M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z", fill: "#E27525" }),
        React__default.createElement("path", { d: "M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z", fill: "#E27525" }),
        React__default.createElement("path", { d: "M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z", fill: "#F5841F" }),
        React__default.createElement("path", { d: "M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z", fill: "#F5841F" }),
        React__default.createElement("path", { d: "M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z", fill: "#C0AC9D" }),
        React__default.createElement("path", { d: "M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z", fill: "#161616" }),
        React__default.createElement("path", { d: "M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z", fill: "#763E1A" }),
        React__default.createElement("path", { d: "M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z", fill: "#763E1A" }),
        React__default.createElement("path", { d: "M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z", fill: "#F5841F" }),
        React__default.createElement("path", { d: "M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z", fill: "#F5841F" }),
        React__default.createElement("path", { d: "M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z", fill: "#F5841F" })));
};

var Icon$18 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$17 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$16 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$15 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$14 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" })));
};

var Icon$13 = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5Z" }))); };

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 19 20" }, props),
        React.createElement("path", { d: "M9.853.8a1 1 0 00-1.706 0L4.43 6.882a1 1 0 00.853 1.522h7.434a1 1 0 00.853-1.522L9.853.8zm4.647 9.604c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zM0 16.904a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H2a2 2 0 00-2 2v4z" })));
};

var Icon$11 = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5ZM4.99999 15.5H8.99999V19.5H4.99999V15.5Z" }))); };

var Icon$10 = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#808080" : "#bdc2c4";
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default.createElement("g", { mask: "url(#A)" },
            React__default.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$$ = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$_ = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 236 236" }, props),
        React__default.createElement("title", null, "logo"),
        React__default.createElement("defs", null,
            React__default.createElement("image", { width: "236", height: "236", id: "img1-logo", href: "data:image/png;base64,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" })),
        React__default.createElement("style", null),
        React__default.createElement("use", { id: "Background-logo", href: "#img1-logo", x: "0", y: "0" })));
};

var Icon$Z = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear_pancakes)" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_pancakes", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#9F4A08" }),
                React__default.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$Y = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 19 19" }, props),
        React__default.createElement("path", { d: "M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" })));
};

var Icon$X = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$W = function (props) {
    var id = uniqueId("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React__default.createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React__default.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React__default.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React__default.createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React__default.createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React__default.createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React__default.createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React__default.createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React__default.createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React__default.createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React__default.createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React__default.createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React__default.createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: id },
                React__default.createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$V = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$U = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$T = function (props) {
    var id = uniqueId$1("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("g", { opacity: "0.5" },
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.9614 22.6577C22.1497 21.837 20.8799 22.1545 20.6502 23.2356C20.4793 24.0399 20.9887 24.8972 21.775 25.1283L26.8237 26.6119L25.8006 25.5283L22.9614 22.6577ZM17.0022 22.0363C17.8377 18.1041 22.4563 16.9493 25.4089 19.9345L28.2841 22.8415L34.1925 29.0996L28.1494 30.7189C27.8283 30.8049 27.4835 30.7985 27.1491 30.7002L21.0935 28.9207C18.2337 28.0803 16.3806 24.9621 17.0022 22.0363Z", fill: "#0075EB" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.5943 19.5405C34.887 18.4239 36.1454 18.064 36.8848 18.8854C37.435 19.4965 37.4224 20.4937 36.8571 21.0869L33.2266 24.8961L33.5708 23.4462L34.5943 19.5405ZM39.4444 16.0228C36.7547 13.0352 32.1775 14.3444 31.1131 18.4059L30.0766 22.3611L28.0888 30.735L34.132 29.1157C34.4531 29.0297 34.7485 28.8517 34.989 28.5994L39.3434 24.0306C41.3999 21.8728 41.4456 18.2458 39.4444 16.0228Z", fill: "#0075EB" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4563 42.0674L47.2386 34.6231L50.6382 47.3106C51.0042 48.6763 50.1937 50.08 48.828 50.4459L25.9913 56.565C24.6256 56.9309 23.2219 56.1205 22.8559 54.7548L19.4563 42.0674ZM49.0488 31.4878L53.111 46.648C53.8429 49.3793 52.222 52.1868 49.4906 52.9187L26.6538 59.0378C23.9225 59.7696 21.115 58.1487 20.3832 55.4174L16.321 40.2572L49.0488 31.4878Z", fill: "#0075EB" }),
                React__default.createElement("path", { d: "M36.1074 37.606L30.6528 39.0675L35.3736 56.686L40.8283 55.2244L36.1074 37.606Z", fill: "#0075EB" }),
                React__default.createElement("path", { d: "M17.9272 46.1213L19.5837 52.3033L52.3115 43.5339L50.6551 37.3519L17.9272 46.1213Z", fill: "#0075EB" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.2885 33.8966L45.9617 25.9456C46.6446 25.7627 47.3464 26.1679 47.5294 26.8507L48.4404 30.2508C48.6234 30.9336 48.2182 31.6355 47.5353 31.8185L17.8621 39.7694C17.1793 39.9524 16.4774 39.5471 16.2944 38.8643L15.3834 35.4642C15.2004 34.7814 15.6056 34.0795 16.2885 33.8966ZM45.2991 23.4729C47.3477 22.924 49.4533 24.1396 50.0022 26.1882L50.9132 29.5882C51.4621 31.6367 50.2464 33.7423 48.1979 34.2912L18.5247 42.2422C16.4762 42.7911 14.3706 41.5754 13.8217 39.5269L12.9106 36.1268C12.3617 34.0783 13.5774 31.9727 15.6259 31.4238L45.2991 23.4729Z", fill: "#0075EB" }),
                React__default.createElement("path", { d: "M33.2085 26.7876L27.7539 28.2492L30.6526 39.0675L36.1073 37.606L33.2085 26.7876Z", fill: "#0075EB" }),
                React__default.createElement("path", { d: "M47.6246 14.7703V14.3912C47.6246 13.8593 47.731 13.4137 47.9437 13.0547C48.1698 12.6956 48.4691 12.3431 48.8414 11.9974C49.1872 11.6649 49.5264 11.379 49.8588 11.1396C50.1913 10.9002 50.464 10.6475 50.6767 10.3815C50.8895 10.1155 50.9959 9.80299 50.9959 9.44391C50.9959 8.92524 50.8097 8.55951 50.4374 8.34672C50.0783 8.12063 49.4732 8.00759 48.622 8.00759C48.0634 8.00759 47.5115 8.08073 46.9662 8.22703C46.421 8.36002 45.9555 8.53291 45.5698 8.7457V6.05259C46.0619 5.81321 46.6404 5.62037 47.3054 5.47408C47.9836 5.32778 48.7217 5.25464 49.5197 5.25464C51.0624 5.25464 52.2394 5.59377 53.0507 6.27203C53.8619 6.937 54.2675 7.85465 54.2675 9.02498C54.2675 9.76974 54.1146 10.3749 53.8087 10.8403C53.5028 11.2925 53.0573 11.758 52.4721 12.2368C51.9801 12.649 51.5678 13.0081 51.2353 13.314C50.9028 13.6066 50.7366 14.0056 50.7366 14.5109V14.7703L47.6246 14.7703ZM47.4849 18.3012V15.9871L50.8563 15.9871V18.3012L47.4849 18.3012Z", fill: "#0075EB" }),
                React__default.createElement("path", { d: "M10.6586 50.2406L10.5388 50.0331C10.3706 49.7418 10.2881 49.4643 10.291 49.2004C10.3013 48.9324 10.3538 48.6448 10.4483 48.3378C10.5325 48.0465 10.6278 47.7827 10.7342 47.5466C10.8405 47.3104 10.9099 47.0859 10.9424 46.873C10.9748 46.6602 10.9342 46.4554 10.8207 46.2588C10.6568 45.9749 10.4393 45.8335 10.1681 45.8347C9.90008 45.8244 9.53305 45.9538 9.06706 46.2228C8.76126 46.3994 8.48221 46.6139 8.22993 46.8664C7.97344 47.1115 7.77325 47.3533 7.62936 47.5917L6.7781 46.1173C6.97184 45.8307 7.22761 45.5422 7.54542 45.252C7.87052 44.9575 8.2515 44.6841 8.68836 44.4319C9.53297 43.9443 10.2845 43.7579 10.9431 43.8728C11.5974 43.9804 12.1095 44.3546 12.4795 44.9954C12.7149 45.4031 12.8224 45.7827 12.8021 46.1343C12.7776 46.4785 12.6808 46.8742 12.5117 47.3213C12.3726 47.7025 12.2604 48.0294 12.1751 48.302C12.0855 48.5672 12.1206 48.8382 12.2804 49.1149L12.3624 49.2569L10.6586 50.2406ZM11.6982 52.2178L10.9668 50.9509L12.8125 49.8853L13.544 51.1522L11.6982 52.2178Z", fill: "#0075EB" }),
                React__default.createElement("path", { d: "M8.75569 24.6564L8.59567 24.3793C8.37108 23.9903 8.26079 23.6196 8.26479 23.2672C8.27852 22.9091 8.34854 22.5251 8.47485 22.115C8.58734 21.7259 8.71461 21.3737 8.85667 21.0582C8.99873 20.7428 9.09141 20.4429 9.13471 20.1586C9.17802 19.8743 9.12387 19.6008 8.97227 19.3382C8.7533 18.959 8.46275 18.7701 8.10061 18.7717C7.74259 18.758 7.25237 18.9308 6.62997 19.2902C6.22152 19.526 5.84882 19.8125 5.51186 20.1497C5.16928 20.4771 4.90189 20.8001 4.70971 21.1185L3.57272 19.1492C3.83148 18.7664 4.17311 18.3811 4.59759 17.9934C5.03181 17.6001 5.54066 17.235 6.12416 16.8981C7.25226 16.2468 8.2561 15.9979 9.13567 16.1514C10.0096 16.2951 10.6937 16.7949 11.1878 17.6507C11.5022 18.1953 11.6458 18.7023 11.6187 19.1718C11.5859 19.6316 11.4566 20.1601 11.2308 20.7573C11.0451 21.2665 10.8952 21.7031 10.7812 22.0671C10.6616 22.4215 10.7085 22.7834 10.9218 23.1529L11.0313 23.3426L8.75569 24.6564ZM10.1443 27.2974L9.16732 25.6052L11.6326 24.1819L12.6096 25.874L10.1443 27.2974Z", fill: "#0075EB" }))),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: "clip_present_0" },
                React__default.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$S = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("g", { opacity: "0.5" },
            React__default.createElement("g", { opacity: "0.7" },
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.4056 18.7282C25.9843 18.048 25.022 18.0595 24.6402 18.7492C24.3536 19.267 24.543 19.9348 25.0585 20.2242L28.5292 22.1722L28.3615 21.8862L26.4056 18.7282ZM21.3507 16.7681C23.1299 13.5535 27.6151 13.5002 29.5786 16.6703L31.5602 19.8696L35.5898 26.7422L29.3273 26.7422C28.996 26.7422 28.6685 26.6559 28.3751 26.4912L23.3004 23.6429C20.8974 22.2942 20.0147 19.1817 21.3507 16.7681Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.1027 18.7282C38.524 18.048 39.4863 18.0595 39.8681 18.7492C40.1547 19.267 39.9653 19.9348 39.4498 20.2242L35.9791 22.1722L36.1468 21.8862L38.1027 18.7282ZM43.1576 16.7681C41.3784 13.5535 36.8932 13.5002 34.9297 16.6703L32.9481 19.8696L28.9185 26.7422L35.181 26.7422C35.5123 26.7422 35.8398 26.6559 36.1332 26.4912L41.2079 23.6429C43.6109 22.2942 44.4936 19.1817 43.1576 16.7681Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.0715 34.3107L45.3455 34.3107L45.3455 44.3815C45.3455 45.7953 44.1994 46.9415 42.7855 46.9415L21.6315 46.9415C20.2176 46.9415 19.0715 45.7953 19.0715 44.3815L19.0715 34.3107ZM47.9055 31.7507L47.9055 44.3815C47.9055 47.2092 45.6132 49.5015 42.7855 49.5015L21.6315 49.5015C18.8038 49.5015 16.5115 47.2092 16.5115 44.3815L16.5115 31.7507L47.9055 31.7507Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { d: "M34.8555 33.9338L29.6231 33.9338L29.6231 49.4886L34.8555 49.4886L34.8555 33.9338Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { d: "M16.5422 36.9358L16.5422 42.3936L47.9363 42.3936L47.9363 36.9358L16.5422 36.9358Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2894 26.8808L46.1893 26.8808C46.8962 26.8808 47.4693 27.4539 47.4693 28.1608L47.4693 30.032C47.4693 30.7389 46.8962 31.312 46.1893 31.312L18.2894 31.312C17.5825 31.312 17.0094 30.7389 17.0094 30.032L17.0094 28.1608C17.0094 27.4539 17.5825 26.8808 18.2894 26.8808ZM46.1893 24.3208C48.3101 24.3208 50.0293 26.04 50.0293 28.1608L50.0293 30.032C50.0293 32.1528 48.3101 33.872 46.1893 33.872L18.2894 33.872C16.1686 33.872 14.4494 32.1528 14.4494 30.032L14.4494 28.1608C14.4494 26.04 16.1686 24.3208 18.2894 24.3208L46.1893 24.3208Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { d: "M34.8555 24.3828L29.6231 24.3828L29.6231 33.934L34.8555 33.934L34.8555 24.3828Z", fill: "#BDC2C4" })),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M51.8824 12.0828C51.4644 11.6649 51.0366 11.2628 50.5996 10.8766C39.5466 1.1084 22.6552 1.51047 12.0828 12.0828C1.51047 22.6552 1.1084 39.5466 10.8766 50.5996C11.2628 51.0366 11.6649 51.4644 12.0828 51.8824C12.5008 52.3004 12.9287 52.7025 13.3656 53.0886C24.4186 62.8569 41.31 62.4548 51.8824 51.8824C62.4548 41.31 62.8569 24.4186 53.0886 13.3656C52.7025 12.9287 52.3004 12.5008 51.8824 12.0828ZM48.1051 13.3711C38.4321 4.97437 23.7691 5.37461 14.5719 14.5719C5.37461 23.7691 4.97437 38.4321 13.3711 48.1051L48.1051 13.3711ZM15.8602 50.5941L50.5941 15.8602C58.9909 25.5331 58.5907 40.1961 49.3934 49.3934C40.1961 58.5907 25.5331 58.9909 15.8602 50.5941Z", fill: "#BDC2C4" }))));
};

var Icon$R = function (props) {
    var id = uniqueId("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#0075EB" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#0075EB" }),
            React__default.createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React__default.createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React__default.createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React__default.createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#0075EB" }),
            React__default.createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#0075EB" }),
            React__default.createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#0075EB" }),
            React__default.createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#0075EB" })),
            React__default.createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#0075EB" }),
            React__default.createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#0075EB" }),
            React__default.createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#0075EB" }))),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#53DEE9" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#0075EB" })),
            React__default.createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#53DEE9" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#0075EB" })),
            React__default.createElement("clipPath", { id: id },
                React__default.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$Q = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$P = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$O = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.99984 5.89661V6.27661C8.16984 5.94661 7.27984 5.77661 6.38984 5.77661C4.96985 5.77661 3.54985 6.20661 2.33985 7.06661C1.82985 7.42661 1.76985 8.15661 2.20985 8.59661L4.77985 11.1666H5.88984V12.2766C6.74984 13.1366 7.86984 13.5866 8.99984 13.6366V15.8966H6.99985C6.44984 15.8966 5.99985 16.3466 5.99985 16.8966V18.8966C5.99985 19.9966 6.89985 20.8966 7.99984 20.8966H17.9998C19.6598 20.8966 20.9998 19.5566 20.9998 17.8966V5.89661C20.9998 5.34661 20.5498 4.89661 19.9998 4.89661H9.99984C9.44984 4.89661 8.99984 5.34661 8.99984 5.89661ZM7.88984 11.3066V9.15661H5.60984L4.56985 8.11661C5.13985 7.89661 5.75985 7.77661 6.38984 7.77661C7.72984 7.77661 8.97985 8.29661 9.92984 9.23661L11.3398 10.6466L11.1398 10.8466C10.6298 11.3566 9.94984 11.6466 9.21984 11.6466C8.74985 11.6466 8.28984 11.5266 7.88984 11.3066ZM18.9998 17.8966C18.9998 18.4466 18.5498 18.8966 17.9998 18.8966C17.4498 18.8966 16.9998 18.4466 16.9998 17.8966V16.8966C16.9998 16.3466 16.5498 15.8966 15.9998 15.8966H10.9998V13.3066C11.5698 13.0766 12.0998 12.7366 12.5598 12.2766L12.7598 12.0766L15.5898 14.8966H16.9998V13.4866L10.9998 7.51661V6.89661H18.9998V17.8966Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.09 13.412c-.448.447-1.408.607-2.09.607-.682 0-1.642-.16-2.09-.607a.27.27 0 00-.383 0 .27.27 0 000 .383c.714.704 2.068.757 2.473.757.405 0 1.76-.053 2.473-.767a.27.27 0 000-.384.28.28 0 00-.383.01zM8.753 11.034c0-.576-.47-1.045-1.045-1.045-.576 0-1.045.47-1.045 1.045 0 .576.47 1.045 1.045 1.045.576 0 1.045-.47 1.045-1.045z" }),
        React.createElement("path", { d: "M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.467 10-10c-.01-5.522-4.478-10-10-10zm5.8 11.333c.02.138.032.287.032.437 0 2.25-2.612 4.062-5.832 4.062-3.22 0-5.832-1.813-5.832-4.062 0-.15.011-.299.032-.437A1.447 1.447 0 013.337 10 1.463 1.463 0 015.81 8.945c1.013-.736 2.41-1.194 3.966-1.237 0-.021.736-3.486.736-3.486 0-.064.042-.128.096-.16a.263.263 0 01.202-.043l2.42.523c.17-.342.523-.587.928-.587A1.04 1.04 0 0115.203 5a1.04 1.04 0 01-1.045 1.045 1.034 1.034 0 01-1.034-.992l-2.175-.469-.661 3.124c1.535.053 2.91.522 3.902 1.237a1.454 1.454 0 012.473 1.044 1.48 1.48 0 01-.863 1.344z" }),
        React.createElement("path", { d: "M12.292 10c-.576 0-1.045.47-1.045 1.045s.47 1.045 1.045 1.045c.576 0 1.045-.47 1.045-1.045A1.06 1.06 0 0012.292 10z" })));
};

var Icon$M = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var Icon$L = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$K = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.2624 20 13.2823 20.8973 12.5163 21.3564C12.512 21.359 12.5076 21.3616 12.5031 21.3642C12.4997 21.3662 12.4962 21.3682 12.4927 21.3702C12.1865 21.5436 11.8124 21.543 11.5073 21.3702C11.4993 21.3657 11.4915 21.3611 11.4837 21.3564C10.7177 20.8973 8.73758 20 7 20C5.08674 20 2.98922 20.322 2.19612 20.4806C1.90234 20.5393 1.5977 20.4633 1.36601 20.2733C1.13432 20.0834 1 19.7996 1 19.5V6.5C1 6.0911 1.24895 5.72339 1.62861 5.57152C2.52707 5.21214 4.82602 4.5 7 4.5C8.91267 4.5 10.8901 5.28809 12 5.85855C13.1099 5.28809 15.0873 4.5 17 4.5C19.174 4.5 21.4729 5.21214 22.3714 5.57152C22.751 5.72339 23 6.0911 23 6.5V19.5C23 19.7996 22.8657 20.0834 22.634 20.2733C22.4023 20.4633 22.0977 20.5393 21.8039 20.4806C21.0108 20.322 18.9133 20 17 20ZM9.76044 10.2492C8.91215 9.96324 7.98498 9.75 7.1484 9.75C6.13948 9.75 5.09021 9.84399 4.10409 9.98219C3.69389 10.0397 3.31475 9.75375 3.25726 9.34354C3.19977 8.93334 3.4857 8.5542 3.89591 8.49671C4.92996 8.35179 6.05141 8.25 7.1484 8.25C8.21288 8.25 9.31368 8.51566 10.2396 8.82775C10.6321 8.96006 10.843 9.38551 10.7107 9.77802C10.5784 10.1705 10.153 10.3815 9.76044 10.2492ZM9.76044 13.4799C8.91215 13.194 7.98498 12.9808 7.1484 12.9808C6.13948 12.9808 5.09021 13.0748 4.10409 13.213C3.69389 13.2705 3.31475 12.9845 3.25726 12.5743C3.19977 12.1641 3.4857 11.785 3.89591 11.7275C4.92996 11.5826 6.05141 11.4808 7.1484 11.4808C8.21288 11.4808 9.31368 11.7464 10.2396 12.0585C10.6321 12.1908 10.843 12.6163 10.7107 13.0088C10.5784 13.4013 10.153 13.6123 9.76044 13.4799ZM7.1484 16.2115C7.98498 16.2115 8.91215 16.4248 9.76044 16.7107C10.153 16.843 10.5784 16.6321 10.7107 16.2396C10.843 15.8471 10.6321 15.4216 10.2396 15.2893C9.31368 14.9772 8.21288 14.7115 7.1484 14.7115C6.05141 14.7115 4.92996 14.8133 3.89591 14.9583C3.4857 15.0157 3.19977 15.3949 3.25726 15.8051C3.31475 16.2153 3.69389 16.5012 4.10409 16.4437C5.09021 16.3055 6.13948 16.2115 7.1484 16.2115ZM15.4837 8.4949C14.8158 8.4949 14.312 9.10151 14.4346 9.75811L14.7247 11.3118C13.7418 11.7454 13 12.4942 13 13.4337V14.0051C13 14.7818 13.5138 15.4321 14.2322 15.8711C14.9562 16.3135 15.9355 16.5765 17 16.5765C18.0645 16.5765 19.0438 16.3135 19.7678 15.8711C20.4862 15.4321 21 14.7818 21 14.0051V13.4337C21 12.4892 20.2505 11.7375 19.2592 11.3048L19.548 9.75812C19.6707 9.10151 19.1668 8.4949 18.4989 8.4949C17.9094 8.4949 17.4316 8.97274 17.4316 9.56219V10.8768C17.2898 10.8672 17.1458 10.8623 17 10.8623C16.8483 10.8623 16.6985 10.8676 16.551 10.878V9.56219C16.551 8.97274 16.0732 8.4949 15.4837 8.4949Z" }))); };

var Icon$J = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M7.20816 9.75C7.724 9.75 8.32379 9.92663 8.90251 10.1849C9.28077 10.3537 9.72425 10.1839 9.89305 9.80565C10.0619 9.42739 9.89206 8.98391 9.5138 8.81511C8.84819 8.51806 8.02565 8.25 7.20816 8.25C6.41131 8.25 5.60257 8.34774 4.86317 8.48493C4.45591 8.5605 4.18702 8.95191 4.26258 9.35917C4.33815 9.76644 4.72956 10.0353 5.13682 9.95976C5.81429 9.83406 6.528 9.75 7.20816 9.75Z" }),
    React__default.createElement("path", { d: "M7.20816 12.75C7.724 12.75 8.32379 12.9266 8.90251 13.1849C9.28077 13.3537 9.72425 13.1839 9.89305 12.8056C10.0619 12.4274 9.89206 11.9839 9.5138 11.8151C8.84819 11.5181 8.02565 11.25 7.20816 11.25C6.41131 11.25 5.60257 11.3477 4.86317 11.4849C4.45591 11.5605 4.18702 11.9519 4.26258 12.3592C4.33815 12.7664 4.72956 13.0353 5.13682 12.9598C5.81429 12.8341 6.528 12.75 7.20816 12.75Z" }),
    React__default.createElement("path", { d: "M7.20816 15.75C7.724 15.75 8.32379 15.9266 8.90251 16.1849C9.28077 16.3537 9.72425 16.1839 9.89305 15.8056C10.0619 15.4274 9.89206 14.9839 9.5138 14.8151C8.84819 14.5181 8.02565 14.25 7.20816 14.25C6.41131 14.25 5.60257 14.3477 4.86317 14.4849C4.45591 14.5605 4.18702 14.9519 4.26258 15.3592C4.33815 15.7664 4.72956 16.0353 5.13682 15.9598C5.81429 15.8341 6.528 15.75 7.20816 15.75Z" }),
    React__default.createElement("path", { d: "M15.3057 10.1849C15.8844 9.92663 16.4842 9.75 17 9.75C17.6802 9.75 18.3939 9.83406 19.0713 9.95976C19.4786 10.0353 19.87 9.76644 19.9456 9.35917C20.0211 8.95191 19.7523 8.5605 19.345 8.48493C18.6056 8.34774 17.7969 8.25 17 8.25C16.1825 8.25 15.36 8.51806 14.6944 8.81511C14.3161 8.98391 14.1463 9.42739 14.3151 9.80565C14.4839 10.1839 14.9274 10.3537 15.3057 10.1849Z" }),
    React__default.createElement("path", { d: "M15.3057 13.1849C15.8844 12.9266 16.4842 12.75 17 12.75C17.6802 12.75 18.3939 12.8341 19.0713 12.9598C19.4786 13.0353 19.87 12.7664 19.9456 12.3592C20.0211 11.9519 19.7523 11.5605 19.345 11.4849C18.6056 11.3477 17.7969 11.25 17 11.25C16.1825 11.25 15.36 11.5181 14.6944 11.8151C14.3161 11.9839 14.1463 12.4274 14.3151 12.8056C14.4839 13.1839 14.9274 13.3537 15.3057 13.1849Z" }),
    React__default.createElement("path", { d: "M15.3057 16.1849C15.8844 15.9266 16.4842 15.75 17 15.75C17.6802 15.75 18.3939 15.8341 19.0713 15.9598C19.4786 16.0353 19.87 15.7664 19.9456 15.3592C20.0211 14.9519 19.7523 14.5605 19.345 14.4849C18.6056 14.3477 17.7969 14.25 17 14.25C16.1825 14.25 15.36 14.5181 14.6944 14.8151C14.3161 14.9839 14.1463 15.4274 14.3151 15.8056C14.4839 16.1839 14.9274 16.3537 15.3057 16.1849Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.85855C10.8901 5.28809 8.91267 4.5 7 4.5C4.82602 4.5 2.52707 5.21214 1.62861 5.57152C1.24895 5.72339 1 6.0911 1 6.5V19.5C1 19.7996 1.13432 20.0834 1.36601 20.2733C1.5977 20.4633 1.90234 20.5393 2.19612 20.4806C2.98922 20.322 5.08674 20 7 20C8.73758 20 10.7177 20.8973 11.4837 21.3564C11.4915 21.3611 11.4993 21.3657 11.5073 21.3702C11.8124 21.543 12.1865 21.5436 12.4927 21.3702C12.5007 21.3657 12.5085 21.3611 12.5163 21.3564C13.2823 20.8973 15.2624 20 17 20C18.9133 20 21.0108 20.322 21.8039 20.4806C22.0977 20.5393 22.4023 20.4633 22.634 20.2733C22.8657 20.0834 23 19.7996 23 19.5V6.5C23 6.0911 22.751 5.72339 22.3714 5.57152C21.4729 5.21214 19.174 4.5 17 4.5C15.0873 4.5 13.1099 5.28809 12 5.85855ZM7 18C8.42616 18 9.88831 18.4382 11 18.8976V7.59336C10.0573 7.12035 8.4448 6.5 7 6.5C5.55289 6.5 3.97492 6.89014 3 7.20499V18.318C4.08257 18.1605 5.576 18 7 18ZM13 7.59336V18.8976C14.1117 18.4382 15.5738 18 17 18C18.424 18 19.9174 18.1605 21 18.318V7.20499C20.0251 6.89014 18.4471 6.5 17 6.5C15.5552 6.5 13.9427 7.12035 13 7.59336Z" }))); };

var Icon$I = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M0 10C0 4.47715 4.47715 0 10 0L30 0C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30L0 10Z", fill: "white" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30 0.416667L10 0.416667C4.70727 0.416667 0.416667 4.70727 0.416667 10L0.416667 30C0.416667 35.2927 4.70727 39.5833 10 39.5833H30C35.2927 39.5833 39.5833 35.2927 39.5833 30V10C39.5833 4.70727 35.2927 0.416667 30 0.416667ZM10 0C4.47715 0 0 4.47715 0 10L0 30C0 35.5228 4.47715 40 10 40H30C35.5228 40 40 35.5228 40 30V10C40 4.47715 35.5228 0 30 0L10 0Z", fill: "#E7E3EB" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.011 17.9331H23.3104V21.0158H20.011V33.6838L19.1439 33.3587C18.7466 33.2142 18.0963 32.9613 17.3015 32.6L16.9283 32.4314V8.09489L20.2157 7.08337L23.3225 8.03468V11.3703L20.2157 10.4069L20.011 10.4671V17.9331ZM12.8823 21.016H8.67969V10.6601L15.965 8.40824V11.7197L11.7624 13.0203V17.9333H15.953V32.1788L15.0257 31.6972C12.1357 30.204 8.67969 27.6872 8.67969 24.1831V22.5333H11.7624V24.1831C11.7624 24.9056 12.1357 25.6762 12.8823 26.459V21.016ZM24.2498 8.33581V27.8677C26.3451 26.796 27.3325 25.5075 27.3325 25.5075V21.0159H31.7157V10.6358L24.2498 8.33581ZM28.633 17.9332H27.3325V12.5986L28.633 12.996V17.9332ZM21.3597 30.3243C24.9843 28.9636 28.633 26.6034 28.633 24.3997V22.5212H31.7157V24.3997C31.7157 29.6379 24.1173 32.6484 21.7932 33.4432L20.9503 33.7322V30.4809L21.3597 30.3243Z", fill: "black" })));
};

var Icon$H = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$G = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M21.9 9.78661L20.85 5.41661C20.63 4.51661 19.85 3.89661 18.94 3.89661H16.73H14.72H13H11H9.27999H7.25999H5.04999C4.14999 3.89661 3.35999 4.52661 3.14999 5.41661L2.09999 9.78661C1.85999 10.8066 2.07999 11.8466 2.71999 12.6666C2.79999 12.7766 2.90999 12.8566 2.99999 12.9566V19.8966C2.99999 20.9966 3.89999 21.8966 4.99999 21.8966H19C20.1 21.8966 21 20.9966 21 19.8966V12.9566C21.09 12.8666 21.2 12.7766 21.28 12.6766C21.92 11.8566 22.15 10.8066 21.9 9.78661ZM7.01999 5.89661L6.43999 10.7566C6.35999 11.4066 5.83999 11.8966 5.22999 11.8966C4.73999 11.8966 4.42999 11.6066 4.29999 11.4266C4.03999 11.0966 3.94999 10.6666 4.04999 10.2566L5.04999 5.89661H7.01999ZM18.91 5.88661L19.96 10.2566C20.06 10.6766 19.97 11.0966 19.71 11.4266C19.57 11.6066 19.27 11.8966 18.77 11.8966C18.16 11.8966 17.63 11.4066 17.56 10.7566L16.98 5.89661L18.91 5.88661ZM15.51 10.4166C15.56 10.8066 15.44 11.1966 15.18 11.4866C14.95 11.7466 14.63 11.8966 14.22 11.8966C13.55 11.8966 13 11.3066 13 10.5866V5.89661H14.96L15.51 10.4166ZM11 10.5866C11 11.3066 10.45 11.8966 9.70999 11.8966C9.36999 11.8966 9.05999 11.7466 8.81999 11.4866C8.56999 11.1966 8.44999 10.8066 8.48999 10.4166L9.03999 5.89661H11V10.5866ZM18 19.8966H5.99999C5.44999 19.8966 4.99999 19.4466 4.99999 18.8966V13.8666C5.07999 13.8766 5.14999 13.8966 5.22999 13.8966C6.09999 13.8966 6.88999 13.5366 7.46999 12.9466C8.06999 13.5466 8.86999 13.8966 9.77999 13.8966C10.65 13.8966 11.43 13.5366 12.01 12.9666C12.6 13.5366 13.4 13.8966 14.3 13.8966C15.14 13.8966 15.94 13.5466 16.54 12.9466C17.12 13.5366 17.91 13.8966 18.78 13.8966C18.86 13.8966 18.93 13.8766 19.01 13.8666V18.8966C19 19.4466 18.55 19.8966 18 19.8966Z" }))); };

var Icon$F = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 16.1162C17.24 16.1162 16.56 16.4162 16.04 16.8862L8.91 12.7362C8.96 12.5062 9 12.2762 9 12.0362C9 11.7962 8.96 11.5662 8.91 11.3362L15.96 7.22619C16.5 7.72619 17.21 8.03619 18 8.03619C19.66 8.03619 21 6.69619 21 5.03619C21 3.37619 19.66 2.03619 18 2.03619C16.34 2.03619 15 3.37619 15 5.03619C15 5.27619 15.04 5.50619 15.09 5.73619L8.04 9.84619C7.5 9.34619 6.79 9.03619 6 9.03619C4.34 9.03619 3 10.3762 3 12.0362C3 13.6962 4.34 15.0362 6 15.0362C6.79 15.0362 7.5 14.7262 8.04 14.2262L15.16 18.3862C15.11 18.5962 15.08 18.8162 15.08 19.0362C15.08 20.6462 16.39 21.9562 18 21.9562C19.61 21.9562 20.92 20.6462 20.92 19.0362C20.92 17.4262 19.61 16.1162 18 16.1162Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M12.327 13.27c0-.01-.003-.019-.004-.028l-.005-.036-.009-.033-.007-.03-.011-.032-.011-.03-.014-.028-.014-.03c-.005-.01-.01-.019-.016-.027l-.018-.03-.021-.028-.018-.024a.692.692 0 00-.044-.049.674.674 0 00-.049-.044l-.024-.018-.028-.02-.03-.018-.026-.016-.03-.015c-.01-.005-.02-.01-.03-.013l-.03-.011-.03-.011-.031-.008-.033-.008-.035-.006-.03-.004a.689.689 0 00-.065-.003H6.997a.667.667 0 000 1.333h3.057l-4.862 4.862a.667.667 0 10.943.943l4.862-4.862v3.057a.667.667 0 001.333 0v-4.666a.689.689 0 00-.003-.066zM19.862 4.195L15 9.057V6a.667.667 0 10-1.333 0v4.667c0 .022.001.044.003.065l.005.03.005.035.008.033.008.03.01.032.012.03.013.029.015.03.016.027.017.029.021.028.018.024a.692.692 0 00.093.093l.024.018.028.021.03.018.027.015.03.015.029.014.03.01.031.012.03.007.033.008.036.006.029.004a.688.688 0 00.066.003H19A.667.667 0 0019 10h-3.057l4.862-4.862a.667.667 0 00-.943-.943z" })));
};

var Icon$D = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z", fill: "black" })));
};

var Icon$C = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M10.037 6a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zM9.287 9.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM10.037 12a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.287 4a2 2 0 012-2h13a2 2 0 012 2v15c0 1.66-1.34 3-3 3h-14c-1.66 0-3-1.34-3-3v-2c0-.55.45-1 1-1h2V4zm0 16h11v-2h-12v1c0 .55.45 1 1 1zm14 0c.55 0 1-.45 1-1V4h-13v12h10c.55 0 1 .45 1 1v2c0 .55.45 1 1 1z" })));
};

var Icon$B = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z" })));
};

var Icon$A = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.17726 8.2193C9.10443 8.36687 8.96365 8.46916 8.80079 8.49282L3.49187 9.26425C3.08176 9.32385 2.918 9.82783 3.21476 10.1171L7.05633 13.8617C7.17418 13.9766 7.22795 14.1421 7.20013 14.3043L6.29326 19.5917C6.22321 20.0002 6.65192 20.3117 7.01873 20.1188L11.7672 17.6224C11.9128 17.5458 12.0869 17.5458 12.2325 17.6224L16.981 20.1188C17.3478 20.3117 17.7765 20.0002 17.7064 19.5917L16.7996 14.3043C16.7718 14.1421 16.8255 13.9766 16.9434 13.8617L20.7849 10.1171C21.0817 9.82783 20.9179 9.32385 20.5078 9.26425L15.1989 8.49282C15.0361 8.46916 14.8953 8.36687 14.8224 8.2193L12.4482 3.4086C12.2648 3.03698 11.7349 3.03698 11.5515 3.4086L9.17726 8.2193ZM16.2669 6.62701L14.2417 2.52347C13.3247 0.665354 10.675 0.665354 9.75801 2.52347L7.73279 6.62701L3.20427 7.28504C1.15372 7.583 0.334945 10.1029 1.81874 11.5493L5.09561 14.7434L4.32204 19.2537C3.97177 21.2959 6.11535 22.8533 7.94942 21.8891L11.9999 19.7597L16.0503 21.8891C17.8844 22.8533 20.0279 21.2959 19.6777 19.2537L18.9041 14.7434L22.181 11.5493C23.6648 10.1029 22.846 7.583 20.7954 7.28504L16.2669 6.62701Z" })));
};

var Icon$z = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M1.87 6.163a.75.75 0 01-1.06-1.06l2.608-2.61H1.694a.75.75 0 110-1.5h3.535a.75.75 0 01.75.75V5.28a.75.75 0 11-1.5 0V3.554L1.87 6.164zM13.072 1.976a5 5 0 01.421 9.983A6.505 6.505 0 008.09 6.555a5 5 0 014.982-4.579z" }),
        React.createElement("path", { d: "M12.072 12.976a5 5 0 10-10 0 5 5 0 0010 0zM19.26 14.213a.75.75 0 010 1.061l-2.61 2.609h1.726a.75.75 0 010 1.5H14.84a.75.75 0 01-.75-.75v-3.536a.75.75 0 011.5 0v1.725l2.609-2.609a.75.75 0 011.06 0z" })));
};

var Icon$x = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M21.2628 15.8306C21.5556 16.1235 21.5556 16.5983 21.2628 16.8912L18.654 19.5H20.3789C20.7931 19.5 21.1289 19.8358 21.1289 20.25C21.1289 20.6642 20.7931 21 20.3789 21L16.8433 21C16.4291 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.4291 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.2021 15.8306C20.495 15.5377 20.9699 15.5377 21.2628 15.8306Z" }),
        React__default.createElement("path", { d: "M2.81293 7.78034C3.10583 8.07323 3.5807 8.07323 3.87359 7.78034L6.48235 5.17158L6.48235 6.89645C6.48235 7.31067 6.81814 7.64645 7.23235 7.64645C7.64656 7.64645 7.98235 7.31067 7.98235 6.89645L7.98235 3.36092C7.98235 3.16201 7.90333 2.97124 7.76268 2.83059C7.62203 2.68994 7.43126 2.61092 7.23235 2.61092L3.69682 2.61092C3.2826 2.61092 2.94682 2.9467 2.94682 3.36092C2.94682 3.77513 3.2826 4.11092 3.69682 4.11092H5.42169L2.81293 6.71968C2.52004 7.01257 2.52004 7.48744 2.81293 7.78034Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.46203 20.5622C8.66377 20.5827 8.86846 20.5932 9.07561 20.5932C12.3893 20.5932 15.0756 17.9069 15.0756 14.5932C18.3893 14.5932 21.0756 11.9069 21.0756 8.59315C21.0756 5.69362 19.0189 3.27448 16.2847 2.71504C15.9185 2.64011 15.5402 2.59853 15.153 2.59363C15.1272 2.5933 15.1014 2.59314 15.0755 2.59314C11.7618 2.59314 9.07549 5.27943 9.07549 8.59314C5.76179 8.59314 3.07549 11.2794 3.07549 14.5931C3.07549 17.5962 5.28172 20.0839 8.16175 20.524C8.26107 20.5392 8.36118 20.5519 8.46203 20.5622ZM5.07549 14.5931C5.07549 12.384 6.86636 10.5931 9.07549 10.5931C9.19246 10.5931 9.30806 10.5981 9.42214 10.6079C10.0255 12.3008 11.3678 13.6431 13.0607 14.2465C13.0705 14.3606 13.0755 14.4762 13.0755 14.5931C13.0755 16.8023 11.2846 18.5931 9.07549 18.5931C6.86636 18.5931 5.07549 16.8023 5.07549 14.5931ZM11.0755 8.59314C11.0755 6.384 12.8664 4.59314 15.0755 4.59314C17.2846 4.59314 19.0755 6.384 19.0755 8.59314C19.0755 10.8023 17.2846 12.5931 15.0755 12.5931C12.8664 12.5931 11.0755 10.8023 11.0755 8.59314Z" })));
};

var Icon$w = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$v = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$u = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$t = function (props) {
    var id = uniqueId("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#0075EB" }),
            React__default.createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#0075EB" }),
            React__default.createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#0075EB" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React__default.createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React__default.createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React__default.createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#0075EB" }),
            React__default.createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#0075EB" }),
            React__default.createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#0075EB" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#0075EB" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React__default.createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React__default.createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React__default.createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React__default.createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: id },
                React__default.createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.478 0 0 4.478 0 9.99 0 15.511 4.478 20 10 20s10-4.488 10-10.01C20 4.477 15.522 0 10 0zm4.925 6.28c-.064.927-1.78 7.856-1.78 7.856s-.107.406-.48.416a.644.644 0 01-.49-.192c-.395-.33-1.29-.97-2.132-1.556a.953.953 0 01-.107.096c-.192.17-.48.416-.789.714a10.7 10.7 0 00-.373.352l-.01.01a2.214 2.214 0 01-.193.171c-.415.341-.458.053-.458-.096l.224-2.441v-.021l.01-.022c.011-.032.033-.043.033-.043s4.36-3.88 4.477-4.296c.01-.021-.021-.042-.074-.021-.288.096-5.31 3.273-5.864 3.625-.032.02-.128.01-.128.01l-2.441-.8s-.288-.117-.192-.383c.021-.053.053-.107.17-.181.544-.384 10-3.785 10-3.785s.267-.085.427-.032c.074.032.117.064.16.17.01.043.021.128.021.224 0 .054-.01.118-.01.224z" })));
};

var Icon$r = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React__default.createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$q = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$p = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.4144 13.4824L9.36944 5.52736L10.0765 6.23446C10.3694 6.52736 10.8443 6.52736 11.1372 6.23446C11.4301 5.94157 11.4301 5.4667 11.1372 5.1738L10.4301 4.4667L12.7281 2.16869C13.5092 1.38764 14.7755 1.38764 15.5565 2.16869L16.6173 3.22943C16.8125 3.42465 16.8125 3.74115 16.6173 3.93637C15.641 4.91268 15.641 6.49559 16.6173 7.4719C17.5936 8.44821 19.1765 8.44821 20.1528 7.4719C20.348 7.27669 20.6645 7.27669 20.8597 7.4719L21.9205 8.53265C22.7015 9.3137 22.7015 10.58 21.9205 11.3611L19.6224 13.6592L18.9153 12.9521C18.6224 12.6592 18.1475 12.6592 17.8546 12.9521C17.5617 13.245 17.5617 13.7198 17.8546 14.0127L18.5617 14.7198L10.6068 22.6748C9.82574 23.4558 8.55941 23.4558 7.77836 22.6748L6.7177 21.6141C6.52244 21.4189 6.52244 21.1023 6.7177 20.907C7.69401 19.9307 7.69401 18.3478 6.7177 17.3715C5.74139 16.3952 4.15848 16.3952 3.18217 17.3715C2.9869 17.5667 2.67032 17.5667 2.47506 17.3715L1.4144 16.3108C0.633351 15.5298 0.633351 14.2634 1.4144 13.4824ZM13.2584 7.29521C12.9655 7.00232 12.4907 7.00232 12.1978 7.29521C11.9049 7.5881 11.9049 8.06298 12.1978 8.35587L12.9049 9.06298C13.1978 9.35587 13.6727 9.35587 13.9655 9.06298C14.2584 8.77009 14.2584 8.29521 13.9655 8.00232L13.2584 7.29521ZM15.0262 10.1236C15.3191 9.83075 15.794 9.83074 16.0869 10.1236L16.794 10.8307C17.0869 11.1236 17.0869 11.5985 16.794 11.8914C16.5011 12.1843 16.0262 12.1843 15.7333 11.8914L15.0262 11.1843C14.7333 10.8914 14.7333 10.4165 15.0262 10.1236Z" })));
};

var Icon$o = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear_ticketround)" }),
        React__default.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_ticketround", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#54DADE" }),
                React__default.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$n = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$m = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M17.6755 13.1415V5.73914H3.98114C3.70355 5.73914 3.51849 5.92419 3.51849 6.20178V16.6576C3.51849 16.9352 3.70355 17.1203 3.98114 17.1203H9.25532V36.1814C9.25532 36.4589 9.44038 36.644 9.71797 36.644H18.3232C18.6008 36.644 18.7859 36.4589 18.7859 36.1814V13.1415H17.6755Z", fill: "#29AEFF" }),
        React__default.createElement("path", { d: "M27.2061 3.33337H23.875H14.8997C14.6221 3.33337 14.437 3.51843 14.437 3.79602V33.7756C14.437 34.0532 14.6221 34.2382 14.8997 34.2382H23.5049C23.7825 34.2382 23.9676 34.0532 23.9676 33.7756V26.1882H27.2986C33.5906 26.1882 38.6797 21.099 38.6797 14.807C38.6797 8.4225 33.4981 3.33337 27.2061 3.33337Z", fill: "#2761E7" })));
};

var Icon$l = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M3.87033 7.75941C3.57743 8.05231 3.10256 8.05231 2.80967 7.75941C2.51677 7.46652 2.51677 6.99165 2.80967 6.69875L5.41842 4.09L3.69355 4.09C3.27934 4.09 2.94355 3.75421 2.94355 3.34C2.94355 2.92578 3.27934 2.59 3.69355 2.59H7.22908C7.428 2.59 7.61876 2.66901 7.75941 2.80967C7.90007 2.95032 7.97908 3.14108 7.97908 3.34L7.97908 6.87553C7.97908 7.28974 7.6433 7.62553 7.22908 7.62553C6.81487 7.62553 6.47908 7.28974 6.47908 6.87553L6.47908 5.15066L3.87033 7.75941Z" }),
    React__default.createElement("path", { d: "M15.0722 3.57222C17.8337 3.57222 20.0722 5.81079 20.0722 8.57222C20.0722 11.1919 18.0576 13.341 15.4931 13.5548C15.0568 10.7797 12.8647 8.58763 10.0897 8.15139C10.3034 5.5869 12.4525 3.57222 15.0722 3.57222Z" }),
    React__default.createElement("path", { d: "M14.0721 14.5722C14.0721 11.8108 11.8335 9.57222 9.07212 9.57222C6.31069 9.57222 4.07212 11.8108 4.07212 14.5722C4.07212 17.3336 6.31069 19.5722 9.07212 19.5722C11.8335 19.5722 14.0721 17.3336 14.0721 14.5722Z" }),
    React__default.createElement("path", { d: "M21.2594 15.8096C21.5523 16.1025 21.5523 16.5774 21.2594 16.8703L18.6506 19.4791H20.3755C20.7897 19.4791 21.1255 19.8148 21.1255 20.2291C21.1255 20.6433 20.7897 20.9791 20.3755 20.9791H16.84C16.4257 20.9791 16.09 20.6433 16.09 20.2291L16.09 16.6935C16.09 16.2793 16.4257 15.9435 16.84 15.9435C17.2542 15.9435 17.59 16.2793 17.59 16.6935L17.59 18.4184L20.1987 15.8096C20.4916 15.5168 20.9665 15.5168 21.2594 15.8096Z", fill: "black" }))); };

var Icon$k = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M21.2627 15.8306C21.5556 16.1235 21.5556 16.5983 21.2627 16.8912L18.6539 19.5H20.3788C20.793 19.5 21.1288 19.8358 21.1288 20.25C21.1288 20.6642 20.793 21 20.3788 21L16.8433 21C16.429 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.429 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.202 15.8306C20.4949 15.5377 20.9698 15.5377 21.2627 15.8306Z" }),
    React__default.createElement("path", { d: "M2.81285 7.78034C3.10575 8.07323 3.58062 8.07323 3.87352 7.78034L6.48227 5.17158L6.48227 6.89645C6.48227 7.31067 6.81806 7.64645 7.23227 7.64645C7.64649 7.64645 7.98227 7.31067 7.98227 6.89645L7.98227 3.36092C7.98227 3.16201 7.90326 2.97124 7.7626 2.83059C7.62195 2.68994 7.43119 2.61092 7.23227 2.61092L3.69674 2.61092C3.28253 2.61092 2.94674 2.9467 2.94674 3.36092C2.94674 3.77513 3.28253 4.11092 3.69674 4.11092H5.42161L2.81285 6.71968C2.51996 7.01257 2.51996 7.48744 2.81285 7.78034Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.46195 20.5622C8.66369 20.5827 8.86838 20.5932 9.07553 20.5932C12.3892 20.5932 15.0755 17.9069 15.0755 14.5932C18.3892 14.5932 21.0755 11.9069 21.0755 8.59315C21.0755 5.69362 19.0188 3.27448 16.2846 2.71504C15.9185 2.64011 15.5401 2.59853 15.153 2.59363C15.1272 2.5933 15.1013 2.59314 15.0754 2.59314C11.7617 2.59314 9.07542 5.27943 9.07542 8.59314C5.76171 8.59314 3.07542 11.2794 3.07542 14.5931C3.07542 17.5962 5.28164 20.0839 8.16168 20.524C8.26099 20.5392 8.3611 20.5519 8.46195 20.5622ZM5.07542 14.5931C5.07542 12.384 6.86628 10.5931 9.07542 10.5931C9.19238 10.5931 9.30799 10.5981 9.42207 10.6079C10.0255 12.3008 11.3677 13.6431 13.0607 14.2465C13.0704 14.3606 13.0754 14.4762 13.0754 14.5931C13.0754 16.8023 11.2846 18.5931 9.07542 18.5931C6.86628 18.5931 5.07542 16.8023 5.07542 14.5931ZM11.0754 8.59314C11.0754 6.384 12.8663 4.59314 15.0754 4.59314C17.2846 4.59314 19.0754 6.384 19.0754 8.59314C19.0754 10.8023 17.2846 12.5931 15.0754 12.5931C12.8663 12.5931 11.0754 10.8023 11.0754 8.59314Z" }))); };

var Icon$j = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 21 11" }, props),
    React__default.createElement("path", { d: "M.504.591l8.09.002.043 10.19-4.09-.03-.001-6.113L.5 4.633.504.591zM11.652 4.535a2.042 2.042 0 100-4.083 2.042 2.042 0 000 4.083zM15.787.598L20.5.603l-4.27 10.105-4.663-.01L15.754.606l.033-.008z" }))); };

var Icon$i = function (props) { return (React.createElement(Svg, __assign({ viewBox: "0 0 18 20" }, props),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.95.446a1.5 1.5 0 00-1.11 1.808c.08.327.457 1.213.877 2.15H2c-1.1 0-2 .9-2 2v1c0 .319.03.63.087.931.401 2.111 2.142 3.738 4.303 4.009A5.01 5.01 0 008 15.304v2.1H5a1 1 0 100 2h8.006a1 1 0 00-.006-2h-3v-2.1a5.013 5.013 0 003.61-2.96c.309-.039.609-.105.898-.197C16.53 11.507 18 9.635 18 7.404v-1c0-1.1-.9-2-2-2h-3.718c.42-.937.798-1.823.877-2.15a1.5 1.5 0 00-2.918-.7l-.683 2.85H8.442l-.684-2.85A1.5 1.5 0 005.949.446zM16 7.404c0 1.3-.84 2.4-2 2.82v-3.82h2v1zm-12 2.82c-1.16-.42-2-1.52-2-2.82v-1h2v3.82z" }))); };

var Icon$h = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$g = function (props) { return (React.createElement(Svg, __assign({ viewBox: "0 0 19 17" }, props),
    React.createElement("path", { d: "M16.5 2h-2a2 2 0 00-2-2h-6a2 2 0 00-2 2h-2c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 008.5 12.9V15h-3a1 1 0 100 2h8a1 1 0 100-2h-3v-2.1a5.01 5.01 0 003.61-2.96C16.58 9.63 18.5 7.55 18.5 5V4c0-1.1-.9-2-2-2zm-14 3V4h2v3.82C3.34 7.4 2.5 6.3 2.5 5zm7 6c-1.65 0-3-1.35-3-3V2h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V4h2v1z" }))); };

var Icon$f = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { opacity: "0.9", d: "M19.9959 4.8377L20.7771 3.82105C20.5523 3.64825 20.2766 3.55457 19.9931 3.55457C19.7095 3.55457 19.4339 3.64825 19.209 3.82105L19.9959 4.8377ZM33.425 8.7837H34.7059C34.7081 8.61378 34.6767 8.44509 34.6134 8.28737C34.5502 8.12965 34.4563 7.98603 34.3372 7.8648C34.2181 7.74358 34.0762 7.64714 33.9196 7.58107C33.763 7.515 33.5949 7.4806 33.425 7.47985V8.7837ZM19.9959 36.2161L19.2837 37.2845C19.4936 37.425 19.7405 37.5 19.9931 37.5C20.2457 37.5 20.4925 37.425 20.7024 37.2845L19.9959 36.2161ZM6.57841 8.7837V7.49709C6.40847 7.49783 6.24036 7.53223 6.0838 7.5983C5.92723 7.66437 5.7853 7.76081 5.66621 7.88204C5.54712 8.00326 5.45322 8.14688 5.38995 8.3046C5.32667 8.46232 5.29526 8.63101 5.29754 8.80093L6.57841 8.7837ZM19.2148 5.84861C25.0275 10.3518 31.6846 10.0646 33.4307 10.0646V7.49709C31.6214 7.49709 25.8259 7.72684 20.7943 3.82105L19.2148 5.84861ZM32.1499 8.76073C32.0522 14.7113 31.7995 18.91 31.317 22.0174C30.8345 25.1248 30.1682 26.9399 29.2894 28.238C28.4106 29.5361 27.2848 30.3804 25.6364 31.3626C23.9879 32.3448 21.8799 33.4361 19.2837 35.1535L20.7312 37.2845C23.1895 35.6475 25.2343 34.6021 26.9747 33.5625C28.7284 32.6075 30.2502 31.2779 31.4319 29.6682C32.5806 27.9451 33.3675 25.6475 33.873 22.408C34.3785 19.1685 34.6369 14.809 34.7346 8.80093L32.1499 8.76073ZM20.7312 35.1535C18.1522 33.4304 16.05 32.362 14.413 31.3684C12.776 30.3747 11.6502 29.582 10.7656 28.238C9.8811 26.8939 9.16312 25.1076 8.66915 22.0174C8.17519 18.9273 7.95692 14.7113 7.85928 8.76073L5.29754 8.80093C5.39518 14.809 5.6594 19.18 6.15911 22.408C6.65882 25.636 7.42275 27.9336 8.59448 29.6682C9.77051 31.2788 11.2888 32.6088 13.0402 33.5625C14.7633 34.6021 16.8254 35.6475 19.2837 37.2845L20.7312 35.1535ZM6.57841 10.0646C8.30155 10.0646 14.9644 10.3518 20.7771 5.84861L19.209 3.82105C14.166 7.72684 8.37048 7.49709 6.57266 7.49709L6.57841 10.0646Z", fill: "#3688EB" })));
};

var Icon$e = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React__default.createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 15" }, props),
        React.createElement("path", { d: "M5.659 15c6.79 0 10.507-5.766 10.507-10.763 0-.16 0-.32-.01-.49A7.578 7.578 0 0018 1.79c-.663.3-1.376.5-2.127.6a3.824 3.824 0 001.63-2.1c-.713.44-1.503.75-2.352.92A3.6 3.6 0 0012.46 0C10.419 0 8.76 1.699 8.76 3.787c0 .3.039.58.098.86-3.064-.15-5.786-1.669-7.61-3.957A3.858 3.858 0 00.75 2.598c0 1.31.654 2.469 1.64 3.148a3.638 3.638 0 01-1.669-.47v.05c0 1.83 1.278 3.368 2.956 3.708-.312.09-.634.13-.976.13-.234 0-.468-.02-.692-.07.468 1.509 1.834 2.598 3.453 2.628a7.284 7.284 0 01-4.585 1.62c-.293 0-.595-.01-.878-.05A10.206 10.206 0 005.659 15z" })));
};

var Icon$c = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$b = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 6.49999C14.76 6.49999 17 8.73999 17 11.5C17 12.01 16.9 12.5 16.76 12.96L19.82 16.02C21.21 14.79 22.31 13.25 23 11.49C21.27 7.10999 17 3.99999 12 3.99999C10.73 3.99999 9.51 4.19999 8.36 4.56999L10.53 6.73999C11 6.59999 11.49 6.49999 12 6.49999ZM2.71 3.15999C2.32 3.54999 2.32 4.17999 2.71 4.56999L4.68 6.53999C3.06 7.82999 1.77 9.52999 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.97 18.7 16.31 18.18L19.03 20.9C19.42 21.29 20.05 21.29 20.44 20.9C20.83 20.51 20.83 19.88 20.44 19.49L4.13 3.15999C3.74 2.76999 3.1 2.76999 2.71 3.15999ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 10.73 7.18 9.99999 7.49 9.35999L9.06 10.93C9.03 11.11 9 11.3 9 11.5C9 13.16 10.34 14.5 12 14.5C12.2 14.5 12.38 14.47 12.57 14.43L14.14 16C13.49 16.32 12.77 16.5 12 16.5ZM14.97 11.17C14.82 9.76999 13.72 8.67999 12.33 8.52999L14.97 11.17Z" })));
};

var Icon$a = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" })));
};

var Icon$9 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$8 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$7 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M2 21.8966H12C12.55 21.8966 13 22.3466 13 22.8966C13 23.4466 12.55 23.8966 12 23.8966H2C1.45 23.8966 1 23.4466 1 22.8966C1 22.3466 1.45 21.8966 2 21.8966ZM5.24 8.96661L8.07 6.13661L20.8 18.8666C21.58 19.6466 21.58 20.9166 20.8 21.6966C20.02 22.4766 18.75 22.4766 17.97 21.6966L5.24 8.96661ZM13.73 3.30661L16.56 6.13661C17.34 6.91661 17.34 8.18661 16.56 8.96661L15.14 10.3866L9.49 4.72661L10.9 3.31661C11.68 2.52661 12.95 2.52661 13.73 3.30661ZM3.83 10.3766L9.49 16.0366L8.08 17.4466C7.3 18.2266 6.03 18.2266 5.25 17.4466L2.42 14.6166C1.64 13.8366 1.64 12.5666 2.42 11.7866L3.83 10.3766Z" })));
};

var Icon$6 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$5 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z", fill: "#3389FB" })));
};

var Icon$4 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 236 236" }, props),
        React__default.createElement("title", null, "logo-with-profile"),
        React__default.createElement("defs", null,
            React__default.createElement("image", { width: "236", height: "236", id: "img1-logo-with-profile", href: "data:image/png;base64,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" })),
        React__default.createElement("style", null),
        React__default.createElement("use", { id: "Background-logo-with-profile", href: "#img1-logo-with-profile", x: "0", y: "0" })));
};

var Icon$3 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M17.5 12.323C17.5 13.1514 16.8284 13.823 16 13.823C15.1716 13.823 14.5 13.1514 14.5 12.323C14.5 11.4946 15.1716 10.823 16 10.823C16.8284 10.823 17.5 11.4946 17.5 12.323Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 5.323V7.603C21.59 7.953 22 8.583 22 9.323V15.323C22 16.063 21.59 16.693 21 17.043V19.323C21 20.423 20.1 21.323 19 21.323H5C3.89 21.323 3 20.423 3 19.323V5.323C3 4.223 3.89 3.323 5 3.323H19C20.1 3.323 21 4.223 21 5.323ZM13 15.323H20V9.323H13V15.323ZM5 5.323V19.323H19V17.323H13C11.9 17.323 11 16.423 11 15.323V9.323C11 8.223 11.9 7.323 13 7.323H19V5.323H5Z" })));
};

var Icon$2 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AccountFilledIcon: Icon$2h,
    AccountIcon: Icon$2g,
    AddIcon: Icon$2f,
    ArrowBackIcon: Icon$2e,
    ArrowDownIcon: Icon$2d,
    ArrowDropDownIcon: Icon$2c,
    ArrowDropUpIcon: Icon$2b,
    ArrowFirstIcon: Icon$2a,
    ArrowForwardIcon: Icon$29,
    ArrowLastIcon: Icon$28,
    ArrowUpIcon: Icon$27,
    ArrowUpDownIcon: Icon$26,
    AutoRenewIcon: Icon$25,
    BinanceChainIcon: Icon$24,
    BinanceIcon: Icon$23,
    BlockIcon: Icon$2j,
    BnbUsdtPairTokenIcon: Icon$22,
    BscScanIcon: Icon$21,
    BunnyCardsIcon: Icon$20,
    BunnyPlaceholderIcon: Icon$1$,
    CalculateIcon: Icon$1_,
    CameraIcon: Icon$1Z,
    Cards: Icon$1Y,
    CardViewIcon: Icon$1X,
    ChartDisableIcon: Icon$1W,
    ChartIcon: Icon$1V,
    CheckmarkCircleFillIcon: Icon$1U,
    CheckmarkCircleIcon: Icon$2l,
    CheckmarkIcon: Icon$1T,
    ChevronDownIcon: Icon$1S,
    ChevronLeftIcon: Icon$1R,
    ChevronRightIcon: Icon$1Q,
    ChevronUpIcon: Icon$1P,
    CircleOutlineIcon: Icon$1O,
    CloseIcon: Icon$1N,
    CogIcon: Icon$1M,
    Coin98Icon: Icon$1L,
    CommunityFilledIcon: Icon$1K,
    CommunityIcon: Icon$1J,
    CopyIcon: Icon$1I,
    CrownIcon: Icon$1H,
    CurrencyIcon: Icon$1G,
    DiscordIcon: Icon$1F,
    EarnFilledIcon: Icon$1E,
    EarnFillIcon: Icon$1D,
    EarnIcon: Icon$1C,
    EllipsisIcon: Icon$1B,
    ErrorIcon: Icon$2k,
    ExpandIcon: Icon$1A,
    FarmIcon: Icon$1z,
    GithubIcon: Icon$1y,
    GroupsIcon: Icon$1x,
    HamburgerCloseIcon: Icon$1w,
    HamburgerIcon: Icon$1v,
    HelpIcon: Icon$1u,
    HistoryIcon: Icon$1t,
    HomeIcon: Icon$1s,
    IfoIcon: Icon$1r,
    InfoIcon: Icon$2i,
    InstagramIcon: Icon$1q,
    LanguageCurrencyIcon: Icon$1p,
    LanguageIcon: Icon$1o,
    LaurelLeftIcon: Icon$1n,
    LaurelRightIcon: Icon$1m,
    LineGraphIcon: Icon$1l,
    ListViewIcon: Icon$1k,
    LoginIcon: Icon$1j,
    LogoIcon: Icon$1i,
    LogoRoundIcon: Icon$1h,
    LogoutIcon: Icon$1g,
    LogoWithTextIcon: LogoWithTextIcon,
    MathWalletIcon: Icon$1f,
    MedalBronzeIcon: Icon$1e,
    MedalGoldIcon: Icon$1d,
    MedalPurpleIcon: Icon$1c,
    MedalSilverIcon: Icon$1b,
    MedalTealIcon: Icon$1a,
    MetamaskIcon: Icon$19,
    MinusIcon: Icon$18,
    MoonIcon: Icon$17,
    MoreHorizontalIcon: Icon$16,
    MoreIcon: Icon$15,
    MoreVerticalIcon: Icon$14,
    NftFilledIcon: Icon$13,
    NftFillIcon: Icon$12,
    NftIcon: Icon$11,
    NoProfileAvatarIcon: Icon$10,
    OpenNewIcon: Icon$$,
    PancakeRoundIcon: Icon$_,
    PancakesIcon: Icon$Z,
    PencilIcon: Icon$Y,
    PlayCircleOutlineIcon: Icon$X,
    PocketWatchIcon: Icon$W,
    PoolIcon: Icon$V,
    PredictionsIcon: Icon$U,
    PresentCheckIcon: Icon$T,
    PresentNoneIcon: Icon$S,
    PresentWonIcon: Icon$R,
    PrizeIcon: Icon$Q,
    ProgressBunny: Icon$P,
    ProposalIcon: Icon$O,
    RedditIcon: Icon$N,
    RefreshIcon: Icon$M,
    RemoveIcon: Icon$L,
    ResourcesFilledIcon: Icon$K,
    ResourcesIcon: Icon$J,
    SafePalIcon: Icon$I,
    SearchIcon: Icon$H,
    SellIcon: Icon$G,
    ShareIcon: Icon$F,
    ShrinkIcon: Icon$E,
    SmallDotIcon: Icon$D,
    SmartContractIcon: Icon$C,
    StarFillIcon: Icon$B,
    StarLineIcon: Icon$A,
    SunIcon: Icon$z,
    SwapFillIcon: Icon$y,
    SwapIcon: Icon$x,
    SwapVertIcon: Icon$w,
    SyncAltIcon: Icon$v,
    TeamBattleIcon: Icon$u,
    TeamPlayerIcon: Icon$t,
    TelegramIcon: Icon$s,
    TestnetIcon: Icon$r,
    Ticket: Icon$q,
    TicketFillIcon: Icon$p,
    TicketIcon: Icon$q,
    TicketRound: Icon$o,
    TimerIcon: Icon$n,
    TokenPocketIcon: Icon$m,
    TradeFilledIcon: Icon$l,
    TradeIcon: Icon$k,
    TradingViewIcon: Icon$j,
    TrophyFillIcon: Icon$i,
    TrophyGoldIcon: Icon$h,
    TrophyIcon: Icon$g,
    TrustWalletIcon: Icon$f,
    TuneIcon: Icon$e,
    TwitterIcon: Icon$d,
    VerifiedIcon: Icon$c,
    VisibilityOff: Icon$b,
    VisibilityOn: Icon$a,
    VolumeOffIcon: Icon$9,
    VolumeUpIcon: Icon$8,
    VoteIcon: Icon$7,
    WaitIcon: Icon$6,
    WalletConnectIcon: Icon$5,
    WalletFilledIcon: Icon$4,
    WalletIcon: Icon$3,
    WarningIcon: Icon$2,
    Svg: Svg
});

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default.createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React__default.createElement(Icon$1P, { color: "invertedContrast" }) : React__default.createElement(Icon$1S, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default.createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React__default.createElement(Icon$1P, { color: "primary" }) : React__default.createElement(Icon$1S, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled.div(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$13;

var Flex = styled(Box)(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$12;

var variants$5 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$5.INFO : _b;
    switch (variant) {
        case variants$5.DANGER:
            return theme.colors.failure;
        case variants$5.WARNING:
            return theme.colors.warning;
        case variants$5.SUCCESS:
            return theme.colors.success;
        case variants$5.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$5.INFO; }
    switch (variant) {
        case variants$5.DANGER:
            return Icon$2j;
        case variants$5.WARNING:
            return Icon$2k;
        case variants$5.SUCCESS:
            return Icon$2l;
        case variants$5.INFO:
        default:
            return Icon$2i;
    }
};
var IconLabel = styled.div(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default.createElement(StyledAlert, null,
        React__default.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default.createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default.createElement(Details, { hasHandler: !!onClick },
            React__default.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default.createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default.createElement(CloseHandler, null,
            React__default.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default.createElement(Icon$1N, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$11, templateObject_2$w, templateObject_3$e, templateObject_4$b;

var Grid = styled(Box)(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n  display: grid;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  ", "\n  ", "\n"])), flexbox, grid);
var templateObject_1$10;

var scales$7 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b;
    switch (scale) {
        case scales$7.SM:
            return "32px";
        case scales$7.LG:
            return "48px";
        case scales$7.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$$ || (templateObject_1$$ = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$7.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$$;

var SwitchUnitsButton = styled(IconButton)(templateObject_1$_ || (templateObject_1$_ = __makeTemplateObject(["\n  width: 16px;\n"], ["\n  width: 16px;\n"])));
var UnitContainer = styled(Text)(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"], ["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var StyledBalanceInput = styled(Box)(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled(Input$1)(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var _b = _a.textAlign, textAlign = _b === void 0 ? "right" : _b;
    return textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$_, templateObject_2$v, templateObject_3$d, templateObject_4$a;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, innerRef = _a.innerRef, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, unit = _a.unit, switchEditingUnits = _a.switchEditingUnits, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "innerRef", "isWarning", "decimals", "unit", "switchEditingUnits"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React__default.createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React__default.createElement(Flex, { justifyContent: "flex-end" },
            React__default.createElement(Box, null,
                React__default.createElement(Flex, { alignItems: "center" },
                    React__default.createElement(StyledInput$1, __assign({ pattern: "^[0-9]*[.,]?[0-9]{0," + decimals + "}$", inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder, ref: innerRef }, inputProps)),
                    unit && React__default.createElement(UnitContainer, null, unit)),
                currencyValue && (React__default.createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))),
            switchEditingUnits && (React__default.createElement(Flex, { alignItems: "center", pl: "12px" },
                React__default.createElement(SwitchUnitsButton, { scale: "sm", variant: "text", onClick: switchEditingUnits },
                    React__default.createElement(Icon$w, { color: "textSubtle" })))))));
};

var Textfield = function (_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, onUserInput = _a.onUserInput, inputProps = _a.inputProps, _b = _a.isWarning, isWarning = _b === void 0 ? false : _b;
    var handleOnChange = function (e) {
        onUserInput(e.target.value);
    };
    return (React__default.createElement(StyledBalanceInput, { isWarning: isWarning },
        React__default.createElement(Text, { fontSize: "14px" }, label),
        React__default.createElement(StyledInput$1, __assign({ value: value, onChange: handleOnChange, placeholder: placeholder, textAlign: "left" }, inputProps))));
};

var Separator = styled.div(templateObject_1$Z || (templateObject_1$Z = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryBright;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default.createElement(Icon$1Q, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$Z, templateObject_2$u;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$6.SUBTLE ? "input" : "tertiary"];
};
var getBorderColor$1 = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$6.SUBTLE ? "inputSecondary" : "disabled"];
};
var StyledButtonMenu = styled.div(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: ", ";\n  border: 1px solid ", ";\n  width: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: ", ";\n  border: 1px solid ", ";\n  width: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ",
    "\n  ", "\n"])), getBackgroundColor, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, getBorderColor$1, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? 1 : "auto");
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, variant = _a.variant;
    if (disabled) {
        return "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: " + (variant === variants$6.PRIMARY ? theme.colors.primary : theme.colors.textSubtle) + ";\n        }\n    ";
    }
    return "";
}, space);
var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$8.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$6.PRIMARY : _d, onItemClick = _a.onItemClick, disabled = _a.disabled, children = _a.children, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "disabled", "children", "fullWidth"]);
    return (React__default.createElement(StyledButtonMenu, __assign({ disabled: disabled, variant: variant, fullWidth: fullWidth }, props), Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
            disabled: disabled,
        });
    })));
};
var templateObject_1$Y;

var InactiveButton = styled(Button)(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$6.PRIMARY ? theme.colors.primary : theme.colors.textSubtle);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$6.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React__default.createElement(InactiveButton, __assign({ forwardedAs: as, variant: variant }, props));
    }
    return React__default.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$X;

var useOnClickOutside = function (ref, handler) {
    useEffect(function () {
        var listener = function (event) {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return function () {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, 
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]);
};

/**
 * Use this hook when you want to animate something when it appears on the screen (e.g. when some prop set to true)
 * but when its not on the screen you want it to be fully unmounted and not just hidden or height 0.
 * This is especially useful when you have a table of 100s rows and each row has expandable element that appears on click.
 * If you just set the expanding animation while keeping inactive elements mounted all those 100 elements will load the DOM,
 * and if they all receive updates via props you're looking at 100 DOM updates for hidden elements.
 * This hook "shows" element immediately when the isMounted is true
 * but keeps element mounted for delayTime to let unmounting animation happen, after which you unmount element completely.
 * delayTime should be the same as animation time in most cases.
 */
var useDelayedUnmount = function (isMounted, delayTime) {
    var _a = useState(false), shouldRender = _a[0], setShouldRender = _a[1];
    useEffect(function () {
        var timeoutId;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        }
        else if (!isMounted && shouldRender) {
            timeoutId = setTimeout(function () { return setShouldRender(false); }, delayTime);
        }
        return function () { return clearTimeout(timeoutId); };
    }, [isMounted, delayTime, shouldRender]);
    return shouldRender;
};

var MountAnimation = keyframes(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n    0% {\n      bottom: ", "px;\n    }\n    100% {\n      bottom: ", "px\n    }\n  "], ["\n    0% {\n      bottom: ", "px;\n    }\n    100% {\n      bottom: ", "px\n    }\n  "])), -window.innerHeight, -window.innerHeight * 0.01);
var UnmountAnimation = keyframes(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n    0% {\n      bottom: ", "px\n    }\n    100% {\n      bottom: ", "px;\n    }\n  "], ["\n    0% {\n      bottom: ", "px\n    }\n    100% {\n      bottom: ", "px;\n    }\n  "])), -window.innerHeight * 0.01, -window.innerHeight);
var DrawerContainer = styled.div(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: fixed;\n  animation: ", " 350ms ease forwards;\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n  z-index: 21;\n  ", "\n"], ["\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: fixed;\n  animation: ", " 350ms ease forwards;\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n  z-index: 21;\n  ",
    "\n"])), window.innerHeight * 0.81, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, MountAnimation, function (_a) {
    var isUnmounting = _a.isUnmounting;
    return isUnmounting && css(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n      animation: ", " 350ms ease forwards;\n    "], ["\n      animation: ", " 350ms ease forwards;\n    "])), UnmountAnimation);
});
var templateObject_1$W, templateObject_2$t, templateObject_3$c, templateObject_4$9;

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1200,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    xxl: "@media screen and (min-width: " + breakpointMap.xxl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #0075EB, 0px 0px 0px 4px #96536D99",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
    tooltip: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "24px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return __assign(__assign({}, state), { isMobile: state.isXs || state.isSm, isTablet: state.isMd || state.isLg, isDesktop: state.isXl || state.isXxl });
};

var StyledOverlay = styled(Box)(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  backdrop-filter: blur(2px);\n  z-index: 20;\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  backdrop-filter: blur(2px);\n  z-index: 20;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text + "99";
});
var BodyLock = function () {
    useEffect(function () {
        document.body.style.overflow = "hidden";
        return function () {
            document.body.style.overflow = "visible";
        };
    }, []);
    return null;
};
var Overlay = function (props) {
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(BodyLock, null),
        React__default.createElement(StyledOverlay, __assign({ role: "presentation" }, props))));
};
var templateObject_1$V;

var portalRoot$2 = document.getElementById("portal-root");
var BottomDrawer = function (_a) {
    var content = _a.content, isOpen = _a.isOpen, setIsOpen = _a.setIsOpen;
    var ref = useRef(null);
    var shouldRender = useDelayedUnmount(isOpen, 350);
    var isMobile = useMatchBreakpoints().isMobile;
    useOnClickOutside(ref, function () { return setIsOpen(false); });
    if (!shouldRender || !isMobile) {
        return null;
    }
    return (React__default.createElement(React__default.Fragment, null, createPortal(React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Overlay, null),
        React__default.createElement(DrawerContainer, { ref: ref, isUnmounting: !isOpen },
            React__default.createElement(Box, { position: "absolute", right: "16px", top: "0" },
                React__default.createElement(IconButton, { variant: "text", onClick: function () { return setIsOpen(false); } },
                    React__default.createElement(Icon$1N, null))),
            content)), portalRoot$2 !== null && portalRoot$2 !== void 0 ? portalRoot$2 : document.body)));
};

var PromotedGradient = keyframes(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"], ["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"])));
/**
 * Priority: Warning --> Success --> Active
 */
var getBorderColor = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, borderBackground = _a.borderBackground, theme = _a.theme;
    if (borderBackground) {
        return borderBackground;
    }
    if (isWarning) {
        return theme.colors.warning;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    if (isActive) {
        return "linear-gradient(180deg, " + theme.colors.primaryBright + ", " + theme.colors.secondary + ")";
    }
    return theme.colors.cardBorder;
};
var StyledCard = styled.div(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ",
    "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"])), getBorderColor, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, function (_a) {
    var isActive = _a.isActive;
    return isActive && css(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "], ["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "])), PromotedGradient);
}, space);
var StyledCardInner = styled(Box)(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"])), function (_a) {
    var hasCustomBorder = _a.hasCustomBorder;
    return (hasCustomBorder ? "initial" : "inherit");
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background !== null && background !== void 0 ? background : theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
});
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$U, templateObject_2$s, templateObject_3$b, templateObject_4$8;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, background = _a.background, props = __rest(_a, ["ribbon", "children", "background"]);
    return (React__default.createElement(StyledCard, __assign({}, props),
        React__default.createElement(StyledCardInner, { background: background, hasCustomBorder: !!props.borderBackground },
            ribbon,
            children)));
};

var CardBody = styled.div(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$T;

var CardHeader = styled.div(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card + " " + theme.radii.card + " 0 0";
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$S;

var CardFooter = styled.div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$R;

var StyledCardRibbon = styled.div(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  z-index: 10;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  z-index: 10;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
    ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition, props = __rest(_a, ["variantColor", "text", "ribbonPosition"]);
    return (React__default.createElement(StyledCardRibbon, __assign({ variantColor: variantColor, ribbonPosition: ribbonPosition }, props),
        React__default.createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$Q;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$P, templateObject_2$r, templateObject_3$a, templateObject_4$7, templateObject_5$5;

var PriceLink = styled.a(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd, _b = _a.color, color = _b === void 0 ? "textSubtle" : _b;
    return cakePriceUsd ? (React__default.createElement(PriceLink, { href: "https://optimuswap.io/swap?outputCurrency=0xDFE29AFdF5A7D0bb92A01A56Adabfa87D652E0E7", target: "_blank" },
        React__default.createElement(Icon$_, { width: "24px", mr: "8px" }),
        React__default.createElement(Text, { color: color, bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default.createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React__default.memo(CakePrice);
var templateObject_1$O;

var scales$6 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$6.SM:
            return "24px";
        case scales$6.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$6.MD,
};
var templateObject_1$N;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$1 = styled.div(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default.createElement(Container$1, null,
        target,
        React__default.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$M, templateObject_2$q;

var bunnyFall = keyframes(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React__default.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default.createElement(Icon$1i, { width: size, height: size }))); });
    return React__default.createElement("div", null, bunnies);
};
var templateObject_1$L, templateObject_2$p;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$5 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[scales$5.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[scales$5.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[scales$5.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[scales$5.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$K;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var StyledWrapper = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"], ["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"])), function (_a) {
    var $height = _a.$height;
    return $height;
}, function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $width = _a.$width, $height = _a.$height;
    return ($height / $width) * 100;
}, space);
var Wrapper$3 = forwardRef(function (_a, ref) {
    var width = _a.width, height = _a.height, props = __rest(_a, ["width", "height"]);
    return React__default.createElement(StyledWrapper, __assign({ ref: ref, "$width": width, "$height": height }, props));
});
var templateObject_1$J;

var Placeholder = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var templateObject_1$I;

var StyledBackgroundImage = styled(Wrapper$3)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  background-repeat: no-repeat;\n  background-size: contain;\n"], ["\n  background-repeat: no-repeat;\n  background-size: contain;\n"])));
var BackgroundImage = function (_a) {
    var loadingPlaceholder = _a.loadingPlaceholder, src = _a.src, width = _a.width, height = _a.height, props = __rest(_a, ["loadingPlaceholder", "src", "width", "height"]);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var ref = useRef(null);
    var placeholder = loadingPlaceholder || React__default.createElement(Placeholder, null);
    useEffect(function () {
        var observer;
        if (ref.current) {
            var div_1 = ref.current;
            observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        if (src) {
                            // Load the image via an image element so we can show a placeholder until the image is downloaded
                            var img = document.createElement("img");
                            img.onload = function () {
                                div_1.style.backgroundImage = "url(\"" + src + "\")";
                                setIsLoaded(true);
                            };
                            img.src = src;
                        }
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(div_1);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src, setIsLoaded]);
    return (React__default.createElement(StyledBackgroundImage, __assign({ ref: ref, width: width, height: height }, props), !isLoaded && placeholder));
};
var templateObject_1$H;

var StyledImage = styled.img(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, props = __rest(_a, ["src", "alt", "width", "height"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var observer;
        if (imgRef.current) {
            observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        setIsLoaded(true);
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(imgRef.current);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src]);
    return (React__default.createElement(Wrapper$3, __assign({ ref: imgRef, height: height, width: width }, props), isLoaded ? React__default.createElement(StyledImage, { src: src, alt: alt }) : React__default.createElement(Placeholder, null)));
};
var templateObject_1$G;

var TokenImage = styled(Image)(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: \"\";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n"], ["\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: \"\";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n"])));
var templateObject_1$F;

var variants$4 = {
    DEFAULT: "default",
    INVERTED: "inverted",
};

var _a$2, _b$2;
var StyledPrimaryImage = styled(TokenImage)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  position: absolute;\n  width: ", "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ", "\n"], ["\n  position: absolute;\n  width: ",
    "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ",
    "\n"])), function (_a) {
    var variant = _a.variant;
    return variant === variants$4.DEFAULT ? "92%" : "82%";
}, variant$1({
    variants: (_a$2 = {},
        _a$2[variants$4.DEFAULT] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _a$2[variants$4.INVERTED] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _a$2),
}));
var StyledSecondaryImage = styled(TokenImage)(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  position: absolute;\n  width: 50%;\n\n  ", "\n"], ["\n  position: absolute;\n  width: 50%;\n\n  ",
    "\n"])), variant$1({
    variants: (_b$2 = {},
        _b$2[variants$4.DEFAULT] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _b$2[variants$4.INVERTED] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _b$2),
}));
var templateObject_1$E, templateObject_2$o;

var TokenPairImage = function (_a) {
    var primarySrc = _a.primarySrc, secondarySrc = _a.secondarySrc, width = _a.width, height = _a.height, _b = _a.variant, variant = _b === void 0 ? variants$4.DEFAULT : _b, _c = _a.primaryImageProps, primaryImageProps = _c === void 0 ? {} : _c, _d = _a.secondaryImageProps, secondaryImageProps = _d === void 0 ? {} : _d, props = __rest(_a, ["primarySrc", "secondarySrc", "width", "height", "variant", "primaryImageProps", "secondaryImageProps"]);
    var secondaryImageSize = Math.floor(width / 2);
    return (React__default.createElement(Wrapper$3, __assign({ position: "relative", width: width, height: height }, props),
        React__default.createElement(StyledPrimaryImage, __assign({ variant: variant, src: primarySrc, width: width, height: height }, primaryImageProps)),
        React__default.createElement(StyledSecondaryImage, __assign({ variant: variant, src: secondarySrc, width: secondaryImageSize, height: secondaryImageSize }, secondaryImageProps))));
};

var StyledProfileAvatar = styled(BackgroundImage)(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  border-radius: 50%;\n"], ["\n  border-radius: 50%;\n"])));
var StyledBunnyPlaceholder = styled(Icon$1$)(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"])));
var ProfileAvatar = function (props) { return (React__default.createElement(StyledProfileAvatar, __assign({ loadingPlaceholder: React__default.createElement(StyledBunnyPlaceholder, null) }, props))); };
var templateObject_1$D, templateObject_2$n;

var getPadding$1 = function (scale, hasIcon) {
    if (!hasIcon) {
        return "16px";
    }
    switch (scale) {
        case scales$7.SM:
            return "32px";
        case scales$7.LG:
            return "56px";
        case scales$7.MD:
        default:
            return "48px";
    }
};
var StyledInputGroup = styled(Box)(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"], ["\n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"])), Input$1, function (_a) {
    var hasStartIcon = _a.hasStartIcon, scale = _a.scale;
    return getPadding$1(scale, hasStartIcon);
}, function (_a) {
    var hasEndIcon = _a.hasEndIcon, scale = _a.scale;
    return getPadding$1(scale, hasEndIcon);
});
var InputIcon = styled.div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ",
    "\n"])), function (_a) {
    var isEndIcon = _a.isEndIcon, scale = _a.scale;
    return isEndIcon
        ? "\n    right: " + (scale === scales$7.SM ? "8px" : "16px") + ";\n  "
        : "\n    left: " + (scale === scales$7.SM ? "8px" : "16px") + ";\n  ";
});
var InputGroup = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b, startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["scale", "startIcon", "endIcon", "children"]);
    return (React__default.createElement(StyledInputGroup, __assign({ scale: scale, width: "100%", position: "relative", hasStartIcon: !!startIcon, hasEndIcon: !!endIcon }, props),
        startIcon && React__default.createElement(InputIcon, { scale: scale }, startIcon),
        cloneElement(children, { scale: scale }),
        endIcon && (React__default.createElement(InputIcon, { scale: scale, isEndIcon: true }, endIcon))));
};
var templateObject_1$C, templateObject_2$m;

var GridLayout$1 = styled(Grid)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$B;

var GridLayout = styled(GridLayout$1)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$A;

var StyledLink$1 = styled(Text)(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$z;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default.createElement(Link, __assign({ external: true }, props),
        children,
        React__default.createElement(Icon$$, { color: props.color ? props.color : "primary", ml: "4px" })));
};

var variants$3 = {
    warning: {
        background: "#FFB23719",
        borderColor: "warning",
    },
    danger: {
        background: "#ED4B9E19",
        borderColor: "failure",
    },
};

var Icons$2 = {
    warning: Icon$2,
    danger: Icon$2k,
};
var MessageContainer = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ", "\n  ",
    "\n"])), space, variant$1({
    variants: variants$3,
}));
var Message = function (_a) {
    var children = _a.children, variant = _a.variant, icon = _a.icon, props = __rest(_a, ["children", "variant", "icon"]);
    var Icon = Icons$2[variant];
    return (React__default.createElement(MessageContainer, __assign({ variant: variant }, props),
        React__default.createElement(Box, { mr: "12px" }, icon !== null && icon !== void 0 ? icon : React__default.createElement(Icon, { color: variants$3[variant].borderColor, width: "24px" })),
        children));
};
var templateObject_1$y;

var NotificationDotRoot = styled.span(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "failure" : _c, children = _a.children, props = __rest(_a, ["show", "color", "children"]);
    return (React__default.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) { return cloneElement(child, props); }),
        React__default.createElement(Dot, { show: show, color: color })));
};
var templateObject_1$x, templateObject_2$l;

var scales$4 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "14px",
        travelDistance: "14px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "24px",
        travelDistance: "24px",
        toggleHeight: "32px",
        toggleWidth: "56px",
        pancakeThickness: "1.5px",
        pancakeTwoOffset: "-1px",
        pancakeThreeOffset: "-6px",
        butterTop: "5px",
        butterLeft: "13px",
        butterWidth: "10px",
        butterHeight: "8px",
        butterThickness: "0.75px",
        butterRadius: "3px",
        butterSmearOneTop: "15px",
        butterSmearOneLeft: "3.75px",
        butterSmearTwoTop: "16px",
        butterSmearTwoRight: "3.75px",
    },
    lg: {
        pancakeSize: "31px",
        travelDistance: "31px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$4.LG : _b;
        return scaleKeyValues$1[scale][property];
    };
};
var PancakeStack = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    position: absolute;\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    position: absolute;\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled.input(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled.label(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$w, templateObject_2$k, templateObject_3$9;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$4.LG : _b, props = __rest(_a, ["checked", "scale"]);
    return (React__default.createElement(PancakeStack, { scale: scale },
        React__default.createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React__default.createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React__default.createElement("div", { className: "pancakes" },
                React__default.createElement("div", { className: "pancake" }),
                React__default.createElement("div", { className: "pancake" }),
                React__default.createElement("div", { className: "pancake" }),
                React__default.createElement("div", { className: "butter" })))));
};

var baseColors = {
    failure: "#ED4B9E",
    primary: "#0075EB",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#0075EB",
    success: "#31D0AA",
    warning: "#FFB237",
};
var additionalColors = {
    binance: "#F0B90B",
    overlay: "#452a7a",
    gold: "#FFC700",
    silver: "#B2B2B2",
    bronze: "#E7974D",
};
var lightColors = __assign(__assign(__assign({}, baseColors), additionalColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", backgroundAlt: "#FFFFFF", backgroundAlt2: "#D2D2D2", cardBorder: "#E7E3EB", contrast: "#191326", dropdown: "#F6F6F6", dropdownDeep: "#EEEEEE", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#280D5F", textDisabled: "#BDC2C4", textSubtle: "#0075EB", disabled: "#E9EAEB", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
        cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
        violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
        gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), additionalColors), { secondary: "#0075EB", background: "#08060B", backgroundDisabled: "#3c3742", backgroundAlt: "#27262c", backgroundAlt2: "#D2D2D2", cardBorder: "#383241", contrast: "#FFFFFF", dropdown: "#1E1D20", dropdownDeep: "#100C18", invertedContrast: "#191326", input: "#372F47", inputSecondary: "#262130", primaryDark: "#0098A1", tertiary: "#353547", text: "#F4EEFF", textDisabled: "#666171", textSubtle: "#808080", disabled: "#524B63", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
        cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
        blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
        violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
        violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
        gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    } });

var light$7 = {
    background: lightColors.backgroundAlt,
};
var dark$7 = {
    background: darkColors.backgroundAlt,
};

var light$6 = {
    background: lightColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: lightColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: darkColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.backgroundAlt,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.backgroundAlt,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$4 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$3 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$3 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$2 = {
    background: lightColors.backgroundAlt,
};
var dark$2 = {
    background: darkColors.backgroundAlt,
};

var light$1 = {
    background: lightColors.backgroundAlt,
};
var dark$1 = {
    background: darkColors.backgroundAlt,
};

var light = {
    background: darkColors.backgroundAlt,
    text: darkColors.text,
    boxShadow: shadows.tooltip,
};
var dark = {
    background: lightColors.backgroundAlt,
    text: lightColors.text,
    boxShadow: shadows.tooltip,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

var variants$2 = {
    ROUND: "round",
    FLAT: "flat",
};
var scales$3 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b$1;
var styleVariants$1 = (_a$1 = {},
    _a$1[variants$2.ROUND] = {
        borderRadius: "32px",
    },
    _a$1[variants$2.FLAT] = {
        borderRadius: 0,
    },
    _a$1);
var styleScales = (_b$1 = {},
    _b$1[scales$3.MD] = {
        height: "16px",
    },
    _b$1[scales$3.SM] = {
        height: "8px",
    },
    _b$1);

var Bar = styled.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ",
    ";\n  height: 100%;\n  transition: width 200ms ease;\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark, primary = _a.primary, $background = _a.$background;
    if ($background)
        return $background;
    if ($useDark)
        return primary ? theme.colors.secondary : theme.colors.secondary + "80";
    return primary ? lightColors.secondary : lightColors.secondary + "80";
});
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark;
    return ($useDark ? theme.colors.input : lightColors.input);
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$2.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$2.FLAT ? "0" : "32px");
}, variant$1({
    variants: styleVariants$1,
}), variant$1({
    prop: "scale",
    variants: styleScales,
}), space);
var templateObject_1$v, templateObject_2$j;

var ProgressBunnyWrapper = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$u;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$2.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales$3.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f, _g = _a.useDark, useDark = _g === void 0 ? true : _g, children = _a.children;
    return (React__default.createElement(StyledProgress, { "$useDark": useDark, variant: variant, scale: scale }, children || (React__default.createElement(React__default.Fragment, null,
        showProgressBunny && (React__default.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default.createElement(Icon$P, null))),
        React__default.createElement(Bar, { "$useDark": useDark, primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default.createElement(Bar, { "$useDark": useDark, style: { width: stepGuard(secondaryStep) + "%" } }) : null))));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$t;

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%230075EB%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%230075EB%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%230075EB%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_main%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_main%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230075EB%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%230075EB%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%230075EB%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%230075EB%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_max%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_max%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230075EB%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%230075EB%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%230075EB%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(" + (isMax ? bunnyHeadMax : bunnyHeadMain) + ");\n  background-color: transparent;\n  border: 0;\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 32px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled(Text)(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled.input(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$s, templateObject_2$i, templateObject_3$8, templateObject_4$6, templateObject_5$4, templateObject_6$2, templateObject_7$1;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = progressPercentage + 0.5 + "%";
    }
    else if (progressPercentage >= 90) {
        progressWidth = progressPercentage - 4 + "%";
    }
    else if (progressPercentage >= 60) {
        progressWidth = progressPercentage - 2.5 + "%";
    }
    else {
        progressWidth = progressPercentage + "%";
    }
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React__default.createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React__default.createElement(BunnyButt, { disabled: disabled }),
        React__default.createElement(BunnySlider, null,
            React__default.createElement(BarBackground, { disabled: disabled }),
            React__default.createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React__default.createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React__default.createElement(SliderLabelContainer, null,
            React__default.createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var Icon$1 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 236 236" }, props),
        React__default.createElement("title", null, "logo-spinner"),
        React__default.createElement("defs", null,
            React__default.createElement("image", { width: "236", height: "236", id: "img1-logo-spinner", href: "data:image/png;base64,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" })),
        React__default.createElement("style", null),
        React__default.createElement("use", { id: "Background-logo-spinner", href: "#img1-logo-spinner", x: "0", y: "0" })));
};

var Icon = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default.createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default.createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React__default.createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
styled(Icon)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var FloatingPanIcon = styled(Icon$1)(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default.createElement(Container, null,
        React__default.createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$r, templateObject_2$h, templateObject_3$7, templateObject_4$5, templateObject_5$3;

var StepperWrapper = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React__default.Children.count(children);
    return (React__default.createElement(StepperWrapper, null, React__default.Children.map(children, function (child) {
        if (React__default.isValidElement(child)) {
            return React__default.cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$q;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var StyledStep = styled(Flex)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Connector = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: calc(50% + 20px);\n  ", "\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: calc(50% + 20px);\n  ",
    "\n  left: calc(50% - 2px);\n  background-color: ",
    ";\n"])), function (_a) {
    var $isFirstStep = _a.$isFirstStep, $isLastStep = _a.$isLastStep, $isFirstPart = _a.$isFirstPart;
    if ($isFirstStep)
        return "top: 50%;";
    if ($isLastStep)
        return "top: 0;";
    return $isFirstPart ? "top:0;" : "top:50%;";
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" || status === "current" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled(Box)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled(ChildrenWrapper)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled(ChildrenWrapper)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 5;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 5;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, statusFirstPart = _a.statusFirstPart, statusSecondPart = _a.statusSecondPart, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    var isFirst = index === 0;
    var isLast = index === numberOfSteps - 1;
    return (React__default.createElement(StyledStep, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React__default.createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React__default.createElement(Wrapper$2, null,
            React__default.createElement(StepNumber, { status: statusFirstPart }, index + 1),
            React__default.createElement(Connector, { "$isFirstStep": isFirst, "$isLastStep": isLast, status: statusFirstPart, "$isFirstPart": true }),
            !isFirst && !isLast && React__default.createElement(Connector, { "$isFirstStep": isFirst, "$isLastStep": isLast, status: statusSecondPart })),
        React__default.createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$p, templateObject_2$g, templateObject_3$6, templateObject_4$4, templateObject_5$2, templateObject_6$1, templateObject_7;

var InlineMenuContainer = styled(Box)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.tooltip;
});
var SubMenuContainer = styled(Flex)(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme;
    return "1px solid " + theme.colors.inputSecondary;
});
var ClickableElementContainer = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-flex;\n"], ["\n  cursor: pointer;\n  display: inline-flex;\n"])));
var SubMenuItem = styled.button(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var templateObject_1$o, templateObject_2$f, templateObject_3$5, templateObject_4$3;

var portalRoot$1 = document.getElementById("portal-root");
var BaseMenu = function (_a) {
    var _b, _c, _d;
    var component = _a.component, options = _a.options, children = _a.children, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), menuElement = _g[0], setMenuElement = _g[1];
    var placement = (_b = options === null || options === void 0 ? void 0 : options.placement) !== null && _b !== void 0 ? _b : "bottom";
    var offset = (_c = options === null || options === void 0 ? void 0 : options.offset) !== null && _c !== void 0 ? _c : [0, 10];
    var padding = (_d = options === null || options === void 0 ? void 0 : options.padding) !== null && _d !== void 0 ? _d : { left: 16, right: 16 };
    var _h = useState(isOpen), isMenuOpen = _h[0], setIsMenuOpen = _h[1];
    var toggle = function () {
        setIsMenuOpen(function (prev) { return !prev; });
    };
    var open = function () {
        setIsMenuOpen(true);
    };
    var close = function () {
        setIsMenuOpen(false);
    };
    // Allow for component to be controlled
    useEffect(function () {
        setIsMenuOpen(isOpen);
    }, [isOpen, setIsMenuOpen]);
    useEffect(function () {
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (menuElement !== null &&
                    targetElement !== null &&
                    !menuElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setIsMenuOpen(false);
                }
            }
        };
        if (menuElement !== null) {
            document.addEventListener("click", handleClickOutside);
        }
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuElement, targetElement]);
    var _j = usePopper(targetElement, menuElement, {
        placement: placement,
        modifiers: [
            { name: "offset", options: { offset: offset } },
            { name: "preventOverflow", options: { padding: padding } },
        ],
    }), styles = _j.styles, attributes = _j.attributes;
    var menu = (React__default.createElement("div", __assign({ ref: setMenuElement, style: styles.popper }, attributes.popper), typeof children === "function" ? children({ toggle: toggle, open: open, close: close }) : children));
    var renderMenu = portalRoot$1 ? createPortal(menu, portalRoot$1) : menu;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(ClickableElementContainer, { ref: setTargetElement, onClick: toggle }, component),
        isMenuOpen && renderMenu));
};

var InlineMenu = function (_a) {
    var children = _a.children, component = _a.component, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "isOpen"]);
    return (React__default.createElement(BaseMenu, { options: { placement: "bottom" }, component: component, isOpen: isOpen },
        React__default.createElement(InlineMenuContainer, __assign({}, props), children)));
};

var SubMenu = function (_a) {
    var children = _a.children, component = _a.component, options = _a.options, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "options", "isOpen"]);
    return (React__default.createElement(BaseMenu, { component: component, options: options, isOpen: isOpen },
        React__default.createElement(SubMenuContainer, __assign({}, props), children)));
};

var StyledMenuItemContainer = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  position: relative;\n\n  ", ";\n"], ["\n  position: relative;\n\n  ",
    ";\n"])), function (_a) {
    var $isActive = _a.$isActive, $variant = _a.$variant, theme = _a.theme;
    return $isActive &&
        $variant === "subMenu" &&
        "\n      &:after{\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        height: 4px;\n        width: 100%;\n        background-color: " + theme.colors.primary + ";\n        border-radius: 2px 2px 0 0;\n      }\n    ";
});
var StyledMenuItem = styled.a(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  font-size: 16px;\n  font-weight: ", ";\n\n  ", "\n\n  ", "\n\n  &:hover {\n    background: ", ";\n    ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  font-size: 16px;\n  font-weight: ", ";\n\n  ",
    "\n\n  ",
    "\n\n  &:hover {\n    background: ", ";\n    ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, $isActive = _a.$isActive;
    return ($isActive ? theme.colors.secondary : theme.colors.textSubtle);
}, function (_a) {
    var $isActive = _a.$isActive;
    return ($isActive ? "600" : "400");
}, function (_a) {
    var $statusColor = _a.$statusColor, theme = _a.theme;
    return $statusColor &&
        "\n    &:after {\n      content: \"\";\n      border-radius: 100%;\n      background: " + theme.colors[$statusColor] + ";\n      height: 8px;\n      width: 8px;\n      margin-left: 12px;\n    }\n  ";
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "default"
        ? "\n    padding: 0 16px;\n    height: 48px;\n  "
        : "\n    padding: 4px 4px 0px 4px;\n    height: 42px;\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "default" && "border-radius: 16px;";
});
var templateObject_1$n, templateObject_2$e;

var MenuItem = function (_a) {
    var children = _a.children, href = _a.href, _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "default" : _c, statusColor = _a.statusColor, props = __rest(_a, ["children", "href", "isActive", "variant", "statusColor"]);
    var itemLinkProps = href
        ? {
            as: Link$1,
            to: href,
        }
        : {
            as: "div",
        };
    return (React__default.createElement(StyledMenuItemContainer, { "$isActive": isActive, "$variant": variant },
        React__default.createElement(StyledMenuItem, __assign({}, itemLinkProps, { "$isActive": isActive, "$variant": variant, "$statusColor": statusColor }, props), children)));
};

var Icons$1 = IconModule;
var IconComponent = function (_a) {
    var iconName = _a.iconName, props = __rest(_a, ["iconName"]);
    var IconElement = Icons$1[iconName + "Icon"];
    return IconElement ? React__default.createElement(IconElement, __assign({}, props)) : null;
};

var StyledSubMenuItems = styled(Flex)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  ", " {\n    ", ";\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  ", " {\n    ", ";\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var $isMobileOnly = _a.$isMobileOnly;
    return ($isMobileOnly ? "display:none" : "");
}, function (_a) {
    var theme = _a.theme;
    return "" + theme.colors.backgroundAlt2;
});
var templateObject_1$m;

var SubMenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, _c = _a.isMobileOnly, isMobileOnly = _c === void 0 ? false : _c, props = __rest(_a, ["items", "activeItem", "isMobileOnly"]);
    return (React__default.createElement(StyledSubMenuItems, __assign({ justifyContent: [isMobileOnly ? "flex-end" : "start", null, "center"] }, props, { pl: ["12px", null, "0px"], "$isMobileOnly": isMobileOnly }), items.map(function (_a) {
        var label = _a.label, href = _a.href, iconName = _a.iconName;
        return label && (React__default.createElement(Box, { key: label, mr: "20px" },
            React__default.createElement(MenuItem, { href: href, isActive: href === activeItem, variant: "subMenu" },
                iconName && (React__default.createElement(IconComponent, { color: href === activeItem ? "secondary" : "textSubtle", iconName: iconName, mr: "4px" })),
                label)));
    })));
};

var Td = styled.td(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  padding: 16px;\n  vertical-align: middle;\n\n  ", "\n"], ["\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  padding: 16px;\n  vertical-align: middle;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, typography);
var Th = styled(Td).attrs({ as: "th" })(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n  text-transform: uppercase;\n"], ["\n  color: ", ";\n  font-size: 12px;\n  text-transform: uppercase;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
});
var templateObject_1$l, templateObject_2$d;

var Table = styled.table(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  max-width: 100%;\n  width: 100%;\n\n  tbody tr:last-child {\n    ", " {\n      border-bottom: 0;\n    }\n  }\n\n  ", "\n"], ["\n  max-width: 100%;\n  width: 100%;\n\n  tbody tr:last-child {\n    ", " {\n      border-bottom: 0;\n    }\n  }\n\n  ", "\n"])), Td, space);
var templateObject_1$k;

var byTextAscending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA < upperB) {
            return -1;
        }
        if (upperA > upperB) {
            return 1;
        }
        return 0;
    };
};
var byTextDescending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA > upperB) {
            return -1;
        }
        if (upperA < upperB) {
            return 1;
        }
        return 0;
    };
};

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () {
    return function (state, action) {
        var rows = [];
        var nextPage = 0;
        var prevPage = 0;
        var isAscending = null;
        var sortedRows = [];
        var columnCopy = [];
        var filteredRows = [];
        var selectedRowsById = {};
        var stateCopy = __assign({}, state);
        var rowIds = {};
        switch (action.type) {
            case "SET_ROWS":
                rows = __spreadArray([], action.data);
                // preserve sorting if a sort is already enabled when data changes
                if (state.sortColumn) {
                    rows = sortByColumn(action.data, state.sortColumn, state.columns);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                columnCopy = state.columns.map(function (column) {
                    if (state.sortColumn === column.name) {
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: column.sorted.asc,
                            } });
                    }
                    return column;
                });
                return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
            case "NEXT_PAGE":
                nextPage = state.pagination.page + 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
            case "PREV_PAGE":
                prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
            case "TOGGLE_SORT":
                if (!(action.columnName in state.columnsByName)) {
                    throw new Error("Invalid column, " + action.columnName + " not found");
                }
                // loop through all columns and set the sort parameter to off unless
                // it's the specified column (only one column at a time for )
                columnCopy = state.columns.map(function (column) {
                    // if the row was found
                    if (action.columnName === column.name) {
                        if (action.isAscOverride !== undefined) {
                            // force the sort order
                            isAscending = action.isAscOverride;
                        }
                        else {
                            // if it's undefined, start by setting to ascending, otherwise toggle
                            isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                        }
                        if (column.sort) {
                            sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                            // default to sort by string
                        }
                        else {
                            sortedRows = isAscending
                                ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                                : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                        }
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: isAscending,
                            } });
                    }
                    // set sorting to false for all other columns
                    return __assign(__assign({}, column), { sorted: {
                            on: false,
                            asc: false,
                        } });
                });
                return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
            case "GLOBAL_FILTER":
                filteredRows = action.filter(state.originalRows);
                selectedRowsById = {};
                state.selectedRows.forEach(function (row) {
                    var _a;
                    selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
                });
                return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                        return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                    }), filterOn: true });
            case "SELECT_ROW":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
                stateCopy.toggleAllState =
                    stateCopy.selectedRows.length === stateCopy.rows.length
                        ? (stateCopy.toggleAllState = true)
                        : (stateCopy.toggleAllState = false);
                return stateCopy;
            case "SEARCH_STRING":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                    return (row.cells.filter(function (cell) {
                        if (cell.value.includes(action.searchString)) {
                            return true;
                        }
                        return false;
                    }).length > 0);
                });
                return stateCopy;
            case "TOGGLE_ALL":
                if (state.selectedRows.length < state.rows.length) {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = true;
                        return __assign(__assign({}, row), { selected: true });
                    });
                    stateCopy.toggleAllState = true;
                }
                else {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = false;
                        return __assign(__assign({}, row), { selected: false });
                    });
                    stateCopy.toggleAllState = false;
                }
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
                return stateCopy;
            default:
                throw new Error("Invalid reducer action");
        }
    };
};
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "26px",
        handleWidth: "26px",
        handleLeft: "3px",
        handleTop: "3px",
        checkedLeft: "calc(100% - 30px)",
        toggleHeight: "32px",
        toggleWidth: "56px",
    },
    lg: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$1.LG : _b;
        return scaleKeyValues[scale][property];
    };
};
var Handle = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, $checked = _a.$checked, $checkedColor = _a.$checkedColor, $defaultColor = _a.$defaultColor;
    return theme.colors[$checked ? $checkedColor : $defaultColor];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$j, templateObject_2$c, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.defaultColor, defaultColor = _b === void 0 ? "input" : _b, _c = _a.checkedColor, checkedColor = _c === void 0 ? "success" : _c, _d = _a.scale, scale = _d === void 0 ? scales$1.LG : _d, startIcon = _a.startIcon, endIcon = _a.endIcon, props = __rest(_a, ["checked", "defaultColor", "checkedColor", "scale", "startIcon", "endIcon"]);
    var isChecked = !!checked;
    return (React__default.createElement(StyledToggle, { "$checked": isChecked, "$checkedColor": checkedColor, "$defaultColor": defaultColor, scale: scale },
        React__default.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        startIcon && endIcon ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Handle, { scale: scale },
                React__default.createElement(Flex, { height: "100%", alignItems: "center", justifyContent: "center" }, checked ? endIcon(checked) : startIcon(!checked))),
            React__default.createElement(Flex, { width: "100%", height: "100%", justifyContent: "space-around", alignItems: "center" },
                startIcon(),
                endIcon()))) : (React__default.createElement(Handle, { scale: scale }))));
};

var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React__default.createElement(Toggle, { checked: isDark, defaultColor: "textDisabled", checkedColor: "textDisabled", onChange: function () { return toggleTheme(!isDark); }, scale: "md", startIcon: function (isActive) {
            if (isActive === void 0) { isActive = false; }
            return React__default.createElement(IconComponent, { iconName: "Sun", color: isActive ? "warning" : "backgroundAlt" });
        }, endIcon: function (isActive) {
            if (isActive === void 0) { isActive = false; }
            return React__default.createElement(IconComponent, { iconName: "Moon", color: isActive ? "secondary" : "backgroundAlt" });
        } }));
};
var ThemeSwitcher$1 = React__default.memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Wrapper$1 = styled(Flex)(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var Inner$1 = styled(Flex)(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default.createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React__default.createElement(Inner$1, null, Children.map(children, function (child, index) {
            var isActive = activeIndex === index;
            return cloneElement(child, {
                isActive: isActive,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                color: isActive ? "backgroundAlt" : "textSubtle",
                backgroundColor: isActive ? "textSubtle" : "input",
            });
        }))));
};
var templateObject_1$i, templateObject_2$b;

var getBorderRadius = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "16px 16px 0 0" : "24px 24px 0 0");
};
var getPadding = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "8px" : "16px");
};
var Tab = styled.button(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"])), getPadding, getBorderRadius, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, color);
Tab.defaultProps = {
    scale: "md",
};
var templateObject_1$h;

var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    WARNING: "warning",
};
var scales = {
    MD: "md",
    SM: "sm",
};

var _a, _b;
var scaleVariants = (_a = {},
    _a[scales.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a[scales.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a);
var styleVariants = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants$1.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants$1.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants$1.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants$1.FAILURE] = {
        backgroundColor: "failure",
    },
    _b[variants$1.WARNING] = {
        backgroundColor: "warning",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants$1.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: " + theme.colors.background + ";\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n\n  ", "\n"])), function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), space, typography, getOutlineStyles);
var templateObject_1$g;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default.createElement(StyledTag, __assign({}, props),
        React__default.isValidElement(startIcon) &&
            React__default.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default.isValidElement(endIcon) &&
            React__default.cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales.MD,
    outline: false,
};

var isTouchDevice = function () {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

var Arrow = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$f, templateObject_2$a;

var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeout = useRef();
    var hideTooltip = useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React__default.createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React__default.createElement(ThemeProvider, { theme: invertTheme }, content),
        React__default.createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var InfoTooltip = function (_a) {
    var text = _a.text, _b = _a.iconColor, iconColor = _b === void 0 ? "textSubtle" : _b, props = __rest(_a, ["text", "iconColor"]);
    var _c = useTooltip(text, {}), targetRef = _c.targetRef, tooltip = _c.tooltip, tooltipVisible = _c.tooltipVisible;
    return (React__default.createElement(Flex, __assign({}, props, { alignItems: "center" }),
        tooltipVisible && tooltip,
        React__default.createElement(Flex, { ref: targetRef, alignItems: "center" },
            React__default.createElement(IconComponent, { iconName: "Info", color: iconColor }))));
};

var TimelineContainer = styled.ul(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n"], ["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n"])));
var TimelineEvent = styled.li(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  margin-bottom: 14px;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: 9px;\n    top: 26px;\n    width: 2px;\n    height: 10px;\n    background-color: ", ";\n  }\n\n  &:last-child:after {\n    display: none;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  margin-bottom: 14px;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: 9px;\n    top: 26px;\n    width: 2px;\n    height: 10px;\n    background-color: ", ";\n  }\n\n  &:last-child:after {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark;
    return ($useDark ? theme.colors.textSubtle : lightColors.textSubtle);
});
var templateObject_1$e, templateObject_2$9;

var getTextColor$1 = function (_a) {
    var eventStatus = _a.eventStatus, useDark = _a.useDark;
    if (eventStatus === "upcoming")
        return useDark ? "textDisabled" : lightColors.textDisabled;
    if (eventStatus === "live")
        return "success";
    return useDark ? "textSubtle" : lightColors.textSubtle;
};
var Timeline = function (_a) {
    var events = _a.events, _b = _a.useDark, useDark = _b === void 0 ? true : _b;
    return (React__default.createElement(TimelineContainer, null, events.map(function (_a) {
        var text = _a.text, status = _a.status, altText = _a.altText, infoText = _a.infoText;
        var isUpcoming = status === "upcoming";
        var isLive = status === "live";
        var isPast = status === "past";
        return (React__default.createElement(TimelineEvent, { key: text, "$useDark": useDark },
            React__default.createElement(Flex, { mr: "10px", alignItems: "center" },
                isUpcoming && (React__default.createElement(IconComponent, { iconName: "CircleOutline", color: useDark ? "textDisabled" : lightColors.textDisabled })),
                isLive && React__default.createElement(IconComponent, { iconName: "Logo" }),
                isPast && (React__default.createElement(IconComponent, { iconName: "CheckmarkCircleFill", color: useDark ? "textSubtle" : lightColors.textSubtle }))),
            React__default.createElement(Text, { color: getTextColor$1({ eventStatus: status, useDark: useDark }), bold: true }, text),
            altText && (React__default.createElement(Text, { color: "warning", ml: "2px", bold: true }, altText)),
            infoText && (React__default.createElement(InfoTooltip, { text: infoText, ml: "10px", iconColor: useDark ? "textSubtle" : lightColors.textSubtle }))));
    })));
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var ModalHeader = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var ModalTitle = styled(Flex)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled(Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n"], ["\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React__default.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React__default.createElement(Icon$1N, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React__default.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React__default.createElement(Icon$2e, { color: "primary" })));
};
var ModalContainer = styled(Box)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  max-height: 100vh;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  max-height: 100vh;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$d, templateObject_2$8, templateObject_3$3, templateObject_4$2;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    var theme = useTheme();
    return (React__default.createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React__default.createElement(ModalHeader, { background: getThemeValue("colors." + headerBackground, headerBackground)(theme) },
            React__default.createElement(ModalTitle, null,
                onBack && React__default.createElement(ModalBackButton, { onBack: onBack }),
                React__default.createElement(Heading, null, title)),
            !hideCloseButton && React__default.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default.createElement(ModalBody, { p: bodyPadding }, children)));
};

var ModalWrapper = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: function () { return null; },
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(""), nodeId = _d[0], setNodeId = _d[1];
    var _e = useState(true), closeOnOverlayClick = _e[0], setCloseOnOverlayClick = _e[1];
    var handlePresent = function (node, newNodeId) {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default.createElement(Context.Provider, { value: {
            isOpen: isOpen,
            nodeId: nodeId,
            modalNode: modalNode,
            setModalNode: setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default.createElement(ModalWrapper, null,
            React__default.createElement(Overlay, { onClick: handleOverlayDismiss }),
            React__default.isValidElement(modalNode) &&
                React__default.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$c;

var useModal = function (modal, closeOnOverlayClick, updateOnPropsChange, modalId) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    if (updateOnPropsChange === void 0) { updateOnPropsChange = false; }
    if (modalId === void 0) { modalId = "defaultNodeId"; }
    var _a = useContext(Context), isOpen = _a.isOpen, nodeId = _a.nodeId, modalNode = _a.modalNode, setModalNode = _a.setModalNode, onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal, modalId);
    }, [modal, modalId, onPresent]);
    // Updates the "modal" component if props are changed
    // Use carefully since it might result in unnecessary rerenders
    // Typically if modal is staic there is no need for updates, use when you expect props to change
    useEffect(function () {
        // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            var modalProps = get(modal, "props");
            var oldModalProps = get(modalNode, "props");
            // Note: I tried to use lodash isEqual to compare props but it is giving false-negatives too easily
            // For example ConfirmSwapModal in exchange has ~500 lines prop object that stringifies to same string
            // and online diff checker says both objects are identical but lodash isEqual thinks they are different
            // Do not try to replace JSON.stringify with isEqual, high risk of infinite rerenders
            // TODO: Find a good way to handle modal updates, this whole flow is just backwards-compatible workaround,
            // would be great to simplify the logic here
            if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
                setModalNode(modal);
            }
        }
    }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var StyledIconContainer = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ",
    ";\n"])), function (_a) {
    var activeBackgroundColor = _a.activeBackgroundColor, theme = _a.theme;
    return activeBackgroundColor ? theme.colors[activeBackgroundColor] : "transparent";
});
var StyledAnimatedIconComponent = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  position: relative;\n  ", ";\n  ", ";\n\n  div:first-child {\n    ", ";\n    ", ";\n    z-index: 0;\n  }\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  ", ";\n  ", ";\n\n  div:first-child {\n    ", ";\n    ", ";\n    z-index: 0;\n  }\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var height = _a.height;
    return height && "height: " + height;
}, function (_a) {
    var width = _a.width;
    return "width: " + (width || "100%");
}, function (_a) {
    var height = _a.height;
    return height && "height: " + height;
}, function (_a) {
    var width = _a.width;
    return "width: " + (width || "100%");
}, function (_a) {
    var hasFillIcon = _a.hasFillIcon;
    return hasFillIcon &&
        "\n    div, svg {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      overflow:hidden;\n    }\n\n    div:last-child {\n      height: 0;\n      z-index: 5;\n      transition: height 0.25s ease;\n    }\n  ";
}, function (_a) {
    var isActive = _a.isActive, height = _a.height, width = _a.width, hasFillIcon = _a.hasFillIcon;
    return isActive &&
        "\n    div:last-child {\n      " + (height && hasFillIcon && "height:" + height) + ";\n      " + ("width: " + (width || "100%")) + ";\n    }\n  ";
});
var templateObject_1$b, templateObject_2$7;

var Icons = IconModule;
var AnimatedIconComponent = function (_a) {
    var iconName = _a.iconName, _b = _a.color, color = _b === void 0 ? "textSubtle" : _b, _c = _a.activeColor, activeColor = _c === void 0 ? "secondary" : _c, activeBackgroundColor = _a.activeBackgroundColor, _d = _a.isActive, isActive = _d === void 0 ? false : _d, props = __rest(_a, ["iconName", "color", "activeColor", "activeBackgroundColor", "isActive"]);
    var IconElement = Icons[iconName + "Icon"];
    var IconElementFill = Icons[iconName + "FillIcon"];
    var hasFillIcon = IconElementFill !== undefined;
    return IconElement ? (React__default.createElement(StyledAnimatedIconComponent, __assign({ isActive: isActive, hasFillIcon: hasFillIcon }, props),
        React__default.createElement(StyledIconContainer, { activeBackgroundColor: activeBackgroundColor },
            React__default.createElement(IconElement, { color: color })),
        hasFillIcon && (React__default.createElement(StyledIconContainer, __assign({ activeBackgroundColor: activeBackgroundColor }, props),
            React__default.createElement(IconElementFill, { color: activeColor }))))) : null;
};

var StyledBottomNavItem = styled.button(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: block;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  height: 44px;\n  padding: 4px 12px;\n  &:hover {\n    border-radius: 16px;\n  }\n  &:hover,\n  &:hover div {\n    background: ", ";\n  }\n"], ["\n  display: block;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  height: 44px;\n  padding: 4px 12px;\n  &:hover {\n    border-radius: 16px;\n  }\n  &:hover,\n  &:hover div {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var StyledBottomNavText = styled(Text)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: -webkit-box;\n  overflow: hidden;\n  user-select: none;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n"], ["\n  display: -webkit-box;\n  overflow: hidden;\n  user-select: none;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n"])));
var templateObject_1$a, templateObject_2$6;

var BottomNavItem = function (_a) {
    var label = _a.label, iconName = _a.iconName, href = _a.href, _b = _a.showItemsOnMobile, showItemsOnMobile = _b === void 0 ? false : _b, _c = _a.isActive, isActive = _c === void 0 ? false : _c, props = __rest(_a, ["label", "iconName", "href", "showItemsOnMobile", "isActive"]);
    var bottomNavItemContent = (React__default.createElement(Flex, { flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" },
        iconName && (React__default.createElement(AnimatedIconComponent, { iconName: iconName, height: "22px", width: "21px", color: isActive ? "secondary" : "textSubtle", isActive: isActive, activeBackgroundColor: "backgroundAlt" })),
        React__default.createElement(StyledBottomNavText, { color: isActive ? "text" : "textSubtle", fontWeight: isActive ? "600" : "400", fontSize: "10px" }, label)));
    return showItemsOnMobile ? (React__default.createElement(StyledBottomNavItem, __assign({ type: "button" }, props), bottomNavItemContent)) : (React__default.createElement(StyledBottomNavItem, __assign({ as: Link$1, to: href }, props), bottomNavItemContent));
};

var StyledBottomNav = styled(Flex)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 5px 8px;\n  background: ", ";\n  border-top: 1px solid ", ";\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n  z-index: 20;\n"], ["\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 5px 8px;\n  background: ", ";\n  border-top: 1px solid ", ";\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n  z-index: 20;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var templateObject_1$9;

var getTextColor = function (_a) {
    var $isActive = _a.$isActive, disabled = _a.disabled, theme = _a.theme;
    if (disabled)
        return theme.colors.textDisabled;
    if ($isActive)
        return theme.colors.secondary;
    return theme.colors.textSubtle;
};
var DropdownMenuItem = styled.button(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  font-weight: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  font-weight: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled, $isActive = _a.$isActive;
    return getTextColor({ theme: theme, disabled: disabled, $isActive: $isActive });
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var _b = _a.$isActive, $isActive = _b === void 0 ? false : _b;
    return ($isActive ? "600" : "400");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var StyledDropdownMenuItemContainer = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"], ["\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"])), DropdownMenuItem, DropdownMenuItem);
var DropdownMenuDivider = styled.hr(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var StyledDropdownMenu = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: ", ";\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: ", ";\n  visibility: visible;\n  z-index: 1001;\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var $isBottomNav = _a.$isBottomNav;
    return ($isBottomNav ? "calc(100% - 32px)" : "280px");
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return !$isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n  ";
});
var LinkStatus = styled(Text)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var templateObject_1$8, templateObject_2$5, templateObject_3$2, templateObject_4$1, templateObject_5$1;

var DropdownMenuItemType;
(function (DropdownMenuItemType) {
    DropdownMenuItemType[DropdownMenuItemType["INTERNAL_LINK"] = 0] = "INTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["EXTERNAL_LINK"] = 1] = "EXTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["BUTTON"] = 2] = "BUTTON";
    DropdownMenuItemType[DropdownMenuItemType["DIVIDER"] = 3] = "DIVIDER";
})(DropdownMenuItemType || (DropdownMenuItemType = {}));

var DropdownMenu = function (_a) {
    var children = _a.children, _b = _a.isBottomNav, isBottomNav = _b === void 0 ? false : _b, _c = _a.showItemsOnMobile, showItemsOnMobile = _c === void 0 ? false : _c, _d = _a.activeItem, activeItem = _d === void 0 ? "" : _d, _e = _a.items, items = _e === void 0 ? [] : _e, index = _a.index, setMenuOpenByIndex = _a.setMenuOpenByIndex, props = __rest(_a, ["children", "isBottomNav", "showItemsOnMobile", "activeItem", "items", "index", "setMenuOpenByIndex"]);
    var _f = useState(false), isOpen = _f[0], setIsOpen = _f[1];
    var _g = useState(null), targetRef = _g[0], setTargetRef = _g[1];
    var _h = useState(null), tooltipRef = _h[0], setTooltipRef = _h[1];
    var hasItems = items.length > 0;
    var _j = usePopper(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: isBottomNav ? "top" : "bottom-start",
        modifiers: [{ name: "offset", options: { offset: [0, isBottomNav ? 6 : 0] } }],
    }), styles = _j.styles, attributes = _j.attributes;
    var isMenuShow = isOpen && ((isBottomNav && showItemsOnMobile) || !isBottomNav);
    useEffect(function () {
        var showDropdownMenu = function () {
            setIsOpen(true);
        };
        var hideDropdownMenu = function (evt) {
            var target = evt.target;
            return target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target)) && setIsOpen(false);
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showDropdownMenu);
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu);
        return function () {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showDropdownMenu);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [targetRef, tooltipRef, setIsOpen, isBottomNav]);
    useEffect(function () {
        if (setMenuOpenByIndex && index !== undefined) {
            setMenuOpenByIndex(function (prevValue) {
                var _a;
                return (__assign(__assign({}, prevValue), (_a = {}, _a[index] = isMenuShow, _a)));
            });
        }
    }, [isMenuShow, setMenuOpenByIndex, index]);
    useOnClickOutside({
        current: targetRef,
    }, function () {
        setIsOpen(false);
    });
    return (React__default.createElement(Box, __assign({ ref: setTargetRef }, props),
        React__default.createElement(Box, { onPointerDown: function () {
                setIsOpen(function (s) { return !s; });
            } }, children),
        hasItems && (React__default.createElement(StyledDropdownMenu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { "$isBottomNav": isBottomNav, "$isOpen": isMenuShow }), items
            .filter(function (item) { return !item.isMobileOnly; })
            .map(function (_a, itemItem) {
            var _b = _a.type, type = _b === void 0 ? DropdownMenuItemType.INTERNAL_LINK : _b, label = _a.label, _c = _a.href, href = _c === void 0 ? "/" : _c, status = _a.status, itemProps = __rest(_a, ["type", "label", "href", "status"]);
            var MenuItemContent = (React__default.createElement(React__default.Fragment, null,
                label,
                status && (React__default.createElement(LinkStatus, { color: status.color, fontSize: "14px" }, status.text))));
            var isActive = href === activeItem;
            return (React__default.createElement(StyledDropdownMenuItemContainer, { key: itemItem },
                type === DropdownMenuItemType.BUTTON && (React__default.createElement(DropdownMenuItem, __assign({ "$isActive": isActive, type: "button" }, itemProps), MenuItemContent)),
                type === DropdownMenuItemType.INTERNAL_LINK && (React__default.createElement(DropdownMenuItem, __assign({ "$isActive": isActive, as: Link$1, to: href, onClick: function () {
                        setIsOpen(false);
                    } }, itemProps), MenuItemContent)),
                type === DropdownMenuItemType.EXTERNAL_LINK && (React__default.createElement(DropdownMenuItem, __assign({ "$isActive": isActive, as: "a", href: href, target: "_blank", onClick: function () {
                        setIsOpen(false);
                    } }, itemProps),
                    React__default.createElement(Flex, { alignItems: "center", justifyContent: "space-between", width: "100%" },
                        label,
                        React__default.createElement(IconComponent, { iconName: "Logout" })))),
                type === DropdownMenuItemType.DIVIDER && React__default.createElement(DropdownMenuDivider, null)));
        })))));
};

var BottomNav = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.activeItem, activeItem = _c === void 0 ? "" : _c, _d = _a.activeSubItem, activeSubItem = _d === void 0 ? "" : _d, props = __rest(_a, ["items", "activeItem", "activeSubItem"]);
    var _e = useState({}), menuOpenByIndex = _e[0], setMenuOpenByIndex = _e[1];
    var isBottomMenuOpen = Object.values(menuOpenByIndex).reduce(function (acc, value) { return acc || value; }, false);
    return (React__default.createElement(React__default.Fragment, null,
        isBottomMenuOpen && React__default.createElement(Overlay, null),
        React__default.createElement(StyledBottomNav, __assign({ justifyContent: "space-around" }, props), items.map(function (_a, index) {
            var _b, _c;
            var label = _a.label, menuItems = _a.items, href = _a.href, icon = _a.icon, _d = _a.showOnMobile, showOnMobile = _d === void 0 ? true : _d, _e = _a.showItemsOnMobile, showItemsOnMobile = _e === void 0 ? true : _e;
            var statusColor = (_c = (_b = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function (menuItem) { return menuItem.status !== undefined; })) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.color;
            return (showOnMobile && (React__default.createElement(DropdownMenu, { key: label, items: menuItems, isBottomNav: true, activeItem: activeSubItem, showItemsOnMobile: showItemsOnMobile, setMenuOpenByIndex: setMenuOpenByIndex, index: index },
                React__default.createElement(Box, null,
                    React__default.createElement(NotificationDot, { show: !!statusColor, color: statusColor },
                        React__default.createElement(BottomNavItem, { href: href, isActive: href === activeItem, label: label, iconName: icon, showItemsOnMobile: showItemsOnMobile }))))));
        }))));
};

var MenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, props = __rest(_a, ["items", "activeItem", "activeSubItem"]);
    return (React__default.createElement(Flex, __assign({}, props), items.map(function (_a) {
        var _b, _c;
        var label = _a.label, _d = _a.items, menuItems = _d === void 0 ? [] : _d, href = _a.href, _e = _a.icon, icon = _e === void 0 ? "" : _e;
        var statusColor = (_c = (_b = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function (menuItem) { return menuItem.status !== undefined; })) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.color;
        var isActive = activeItem === href;
        var linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href: href };
        return (React__default.createElement(DropdownMenu, { key: label + "#" + href + "#" + icon, items: menuItems, py: 1, activeItem: activeSubItem },
            React__default.createElement(MenuItem, __assign({}, linkProps, { isActive: isActive, statusColor: statusColor }), label || React__default.createElement(IconComponent, { iconName: icon, color: isActive ? "secondary" : "textSubtle" }))));
    })));
};

var blink = keyframes(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"], ["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"])));
var StyledLink = styled(Link$1)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: block;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: block;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var Logo = function (_a) {
    var isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(LogoWithTextIcon, { className: "desktop-icon", isDark: isDark })));
    return (React__default.createElement(Flex, null, isAbsoluteUrl ? (React__default.createElement(StyledLink, { as: "a", href: href, "aria-label": "Optimus home page" }, innerLogo)) : (React__default.createElement(StyledLink, { to: href, "aria-label": "Optimus home page" }, innerLogo))));
};
var Logo$1 = React__default.memo(Logo, function (prev, next) { return prev.isDark === next.isDark; });
var templateObject_1$7, templateObject_2$4;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Trade",
        href: "/swap",
        icon: "Swap",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.optimuswap.io",
            },
            {
                label: "Liquidity",
                href: "https://exchange.optimuswap.io/#/pool",
            },
            {
                label: "Charts",
                href: "https://exchange.optimuswap.io/#/charts",
                iconName: "Chart",
                isMobileOnly: true,
            },
        ],
    },
    {
        label: "Earn",
        href: "/",
        icon: "Earn",
        items: [
            {
                label: "Earn",
                href: "/",
            },
            {
                label: "Yield Farms",
                href: "/",
            },
            {
                label: "Syrup pools",
                href: "/",
            },
        ],
    },
    {
        label: "Win",
        href: "/",
        icon: "Trophy",
        items: [
            {
                label: "Win",
                href: "/",
            },
            {
                label: "Predictions",
                href: "/",
                status: status.LIVE,
            },
            {
                label: "Lottery",
                href: "/",
            },
        ],
    },
    {
        label: "",
        href: "/",
        icon: "More",
        items: [
            {
                label: "Info & Analytics",
                href: "/",
            },
            {
                label: "IFO Token Sales",
                href: "/",
                status: status.SOON,
            },
            {
                type: DropdownMenuItemType.DIVIDER,
            },
            {
                label: "NFT Collectibles",
                href: "/",
            },
            {
                label: "Team Leaderboard",
                href: "/",
            },
            {
                type: DropdownMenuItemType.DIVIDER,
            },
            {
                label: "Blog",
                href: "/",
            },
            {
                label: "Docs & Guides",
                href: "/",
                type: DropdownMenuItemType.EXTERNAL_LINK,
            },
        ],
    },
];
[
    {
        label: "Wallet",
        onClick: noop$1,
        type: DropdownMenuItemType.BUTTON,
    },
    {
        label: "Transactions",
        type: DropdownMenuItemType.BUTTON,
    },
    {
        type: DropdownMenuItemType.DIVIDER,
    },
    {
        type: DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Dashboard",
    },
    {
        type: DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Portfolio",
    },
    {
        label: "Profile",
        href: "/profile",
    },
    {
        type: DropdownMenuItemType.EXTERNAL_LINK,
        href: "https://optimuswap.io",
        label: "Link",
    },
    {
        type: DropdownMenuItemType.DIVIDER,
    },
    {
        type: DropdownMenuItemType.BUTTON,
        onClick: noop$1,
        label: "Disconnect",
    },
];
var MENU_HEIGHT = 56;
var TOP_BANNER_HEIGHT = 70;
var TOP_BANNER_HEIGHT_MOBILE = 84;

var Wrapper = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  transform: translate3d(0, 0, 0);\n\n  padding-left: 16px;\n  padding-right: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  transform: translate3d(0, 0, 0);\n\n  padding-left: 16px;\n  padding-right: 16px;\n"])), MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var FixedContainer = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  height: ", ";\n  width: 100%;\n  z-index: 20;\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  height: ", ";\n  width: 100%;\n  z-index: 20;\n"])), function (_a) {
    var showMenu = _a.showMenu, height = _a.height;
    return (showMenu ? 0 : "-" + height + "px");
}, function (_a) {
    var height = _a.height;
    return height + "px";
});
var TopBannerContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: ", ";\n  min-height: ", ";\n  max-height: ", ";\n  width: 100%;\n"], ["\n  height: ", ";\n  min-height: ", ";\n  max-height: ", ";\n  width: 100%;\n"])), function (_a) {
    var height = _a.height;
    return height + "px";
}, function (_a) {
    var height = _a.height;
    return height + "px";
}, function (_a) {
    var height = _a.height;
    return height + "px";
});
var BodyWrapper = styled(Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"], ["\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"])));
var Menu$1 = function (_a) {
    var _b;
    var userMenu = _a.userMenu, banner = _a.banner, globalMenu = _a.globalMenu, isDark = _a.isDark; _a.toggleTheme; _a.currentLang; _a.setLang; var cakePriceUsd = _a.cakePriceUsd, links = _a.links, subLinks = _a.subLinks; _a.footerLinks; var activeItem = _a.activeItem, activeSubItem = _a.activeSubItem; _a.langs; _a.buyCakeLabel; var children = _a.children;
    var isMobile = useMatchBreakpoints().isMobile;
    var _c = useState(true), showMenu = _c[0], setShowMenu = _c[1];
    var refPrevOffset = useRef(window.pageYOffset);
    var topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;
    var totalTopMenuHeight = banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [totalTopMenuHeight]);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    var subLinksWithoutMobile = subLinks === null || subLinks === void 0 ? void 0 : subLinks.filter(function (subLink) { return !subLink.isMobileOnly; });
    var subLinksMobileOnly = subLinks === null || subLinks === void 0 ? void 0 : subLinks.filter(function (subLink) { return subLink.isMobileOnly; });
    return (React__default.createElement(Wrapper, null,
        React__default.createElement(FixedContainer, { showMenu: showMenu, height: totalTopMenuHeight },
            banner && React__default.createElement(TopBannerContainer, { height: topBannerHeight }, banner),
            React__default.createElement(StyledNav, null,
                React__default.createElement(Flex, null,
                    React__default.createElement(Logo$1, { isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
                    !isMobile && React__default.createElement(MenuItems, { items: links, activeItem: activeItem, activeSubItem: activeSubItem, ml: "24px" })),
                React__default.createElement(Flex, { alignItems: "center", height: "100%" },
                    !isMobile && (React__default.createElement(Box, { mr: "12px" },
                        React__default.createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd }))),
                    globalMenu,
                    " ",
                    userMenu))),
        subLinks && (React__default.createElement(Flex, { justifyContent: "space-around" },
            React__default.createElement(SubMenuItems, { items: subLinksWithoutMobile, mt: totalTopMenuHeight + 1 + "px", activeItem: activeSubItem }),
            (subLinksMobileOnly === null || subLinksMobileOnly === void 0 ? void 0 : subLinksMobileOnly.length) > 0 && (React__default.createElement(SubMenuItems, { items: subLinksMobileOnly, mt: totalTopMenuHeight + 1 + "px", activeItem: activeSubItem, isMobileOnly: true })))),
        React__default.createElement(BodyWrapper, { mt: !subLinks ? totalTopMenuHeight + 1 + "px" : "0" },
            React__default.createElement(Inner, { isPushed: false, showMenu: showMenu }, children)),
        isMobile && React__default.createElement(BottomNav, { items: links, activeItem: activeItem, activeSubItem: activeSubItem })));
};
var templateObject_1$6, templateObject_2$3, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6;

var variants = {
    DEFAULT: "default",
    WARNING: "warning",
    DANGER: "danger",
    PENDING: "pending",
};

var MenuIconWrapper = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 16px\n  border-style: solid;\n  border-width: 2px;\n  display: inline-flex;\n  height: 32px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  width: 32px;\n  z-index: 102;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 16px\n  border-style: solid;\n  border-width: 2px;\n  display: inline-flex;\n  height: 32px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  width: 32px;\n  z-index: 102;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return theme.colors[borderColor];
});
var ProfileIcon = styled(Image)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  left: 0;\n  position: absolute;\n  top: -4px;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"], ["\n  left: 0;\n  position: absolute;\n  top: -4px;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])));
var NoProfileMenuIcon = function () { return (React__default.createElement(MenuIconWrapper, { borderColor: "primary" },
    React__default.createElement(Icon$4, { color: "primary", width: "32px" }))); };
var PendingMenuIcon = function () { return (React__default.createElement(MenuIconWrapper, { borderColor: "secondary" },
    React__default.createElement(Icon$M, { color: "secondary", width: "32px", spin: true }))); };
var WarningMenuIcon = function () { return (React__default.createElement(MenuIconWrapper, { borderColor: "warning" },
    React__default.createElement(Icon$2, { color: "warning", width: "32px" }))); };
var DangerMenuIcon = function () { return (React__default.createElement(MenuIconWrapper, { borderColor: "failure" },
    React__default.createElement(Icon$2, { color: "failure", width: "32px" }))); };
var MenuIcon = function (_a) {
    var avatarSrc = _a.avatarSrc, variant = _a.variant;
    if (variant === variants.DANGER) {
        return React__default.createElement(DangerMenuIcon, null);
    }
    if (variant === variants.WARNING) {
        return React__default.createElement(WarningMenuIcon, null);
    }
    if (variant === variants.PENDING) {
        return React__default.createElement(PendingMenuIcon, null);
    }
    if (!avatarSrc) {
        return React__default.createElement(NoProfileMenuIcon, null);
    }
    return React__default.createElement(ProfileIcon, { src: avatarSrc, height: 40, width: 40 });
};
var templateObject_1$5, templateObject_2$2;

var UserMenuDivider = styled.hr(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var UserMenuItem = styled.button(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "textSubtle"];
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var templateObject_1$4, templateObject_2$1;

var StyledUserMenu = styled(Flex)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 40px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 40px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var LabelText = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  display: none;\n  font-weight: 600;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"], ["\n  color: ", ";\n  display: none;\n  font-weight: 600;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Menu = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n\n  ", ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ", ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ",
    "\n\n  ", ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ", ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var isOpen = _a.isOpen;
    return !isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n  ";
}, UserMenuItem, UserMenuItem);
var UserMenu = function (_a) {
    var account = _a.account, text = _a.text, avatarSrc = _a.avatarSrc, _b = _a.variant, variant = _b === void 0 ? variants.DEFAULT : _b, children = _a.children, props = __rest(_a, ["account", "text", "avatarSrc", "variant", "children"]);
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(null), targetRef = _d[0], setTargetRef = _d[1];
    var _e = useState(null), tooltipRef = _e[0], setTooltipRef = _e[1];
    var accountEllipsis = account ? account.substring(0, 2) + "..." + account.substring(account.length - 4) : null;
    var _f = usePopper(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: "bottom-end",
        modifiers: [{ name: "offset", options: { offset: [0, 0] } }],
    }), styles = _f.styles, attributes = _f.attributes;
    useEffect(function () {
        var showDropdownMenu = function () {
            setIsOpen(true);
        };
        var hideDropdownMenu = function (evt) {
            var target = evt.target;
            if (target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target))) {
                setIsOpen(false);
                evt.stopPropagation();
            }
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showDropdownMenu);
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu);
        return function () {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showDropdownMenu);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [targetRef, tooltipRef, setIsOpen]);
    return (React__default.createElement(Flex, __assign({ alignItems: "center", height: "100%", ref: setTargetRef }, props),
        React__default.createElement(StyledUserMenu, { onTouchStart: function () {
                setIsOpen(function (s) { return !s; });
            } },
            React__default.createElement(MenuIcon, { avatarSrc: avatarSrc, variant: variant }),
            React__default.createElement(LabelText, { title: text || account }, text || accountEllipsis),
            React__default.createElement(Icon$1S, { color: "text", width: "24px" })),
        React__default.createElement(Menu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { isOpen: isOpen }),
            React__default.createElement(Box, { onClick: function () { return setIsOpen(false); } }, children))));
};
var templateObject_1$3, templateObject_2, templateObject_3;

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$19,
        connectorId: ConnectorNames.Injected,
        priority: 1,
    },
    {
        title: "WalletConnect",
        icon: Icon$5,
        connectorId: ConnectorNames.WalletConnect,
        priority: 2,
    },
    {
        title: "Trust Wallet",
        icon: Icon$f,
        connectorId: ConnectorNames.Injected,
        priority: 3,
    },
    {
        title: "MathWallet",
        icon: Icon$1f,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "TokenPocket",
        icon: Icon$m,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Binance Chain",
        icon: Icon$24,
        connectorId: ConnectorNames.BSC,
        priority: 999,
    },
    {
        title: "SafePal",
        icon: Icon$I,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Coin98",
        icon: Icon$1L,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
];
var connectorLocalStorageKey = "connectorIdv2";
var walletLocalStorageKey = "wallet";

var WalletButton = styled(Button).attrs({ width: "100%", variant: "text", py: "16px" })(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"])));
var MoreWalletCard = function (_a) {
    var t = _a.t, props = __rest(_a, ["t"]);
    return (React__default.createElement(WalletButton, __assign({ variant: "tertiary" }, props),
        React__default.createElement(Icon$16, { width: "40px", mb: "8px", color: "textSubtle" }),
        React__default.createElement(Text, { fontSize: "14px" }, t("More"))));
};
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default.createElement(WalletButton, { variant: "tertiary", onClick: function () {
            var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            // Since iOS does not support Trust Wallet we fall back to WalletConnect
            if (walletConfig.title === "Trust Wallet" && isIOS) {
                login(ConnectorNames.WalletConnect);
            }
            else {
                login(walletConfig.connectorId);
            }
            localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default.createElement(Icon, { width: "40px", mb: "8px" }),
        React__default.createElement(Text, { fontSize: "14px" }, title)));
};
var templateObject_1$2;

var WalletWrapper = styled(Box)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
var getPreferredConfig = function (walletConfig) {
    var preferredWalletName = localStorage.getItem(walletLocalStorageKey);
    var sortedConfig = walletConfig.sort(function (a, b) { return a.priority - b.priority; });
    if (!preferredWalletName) {
        return sortedConfig;
    }
    var preferredWallet = sortedConfig.find(function (sortedWalletConfig) { return sortedWalletConfig.title === preferredWalletName; });
    if (!preferredWallet) {
        return sortedConfig;
    }
    return __spreadArray([
        preferredWallet
    ], sortedConfig.filter(function (sortedWalletConfig) { return sortedWalletConfig.title !== preferredWalletName; }));
};
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, _c = _a.displayCount, displayCount = _c === void 0 ? 3 : _c, t = _a.t;
    var _d = useState(false), showMore = _d[0], setShowMore = _d[1];
    var theme = useTheme();
    var sortedConfig = getPreferredConfig(connectors);
    var displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);
    return (React__default.createElement(ModalContainer, { minWidth: "320px" },
        React__default.createElement(ModalHeader, { background: getThemeValue("colors.gradients.bubblegum")(theme) },
            React__default.createElement(ModalTitle, null,
                React__default.createElement(Heading, null, t("Connect Wallet"))),
            React__default.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default.createElement(ModalBody, { width: ["320px", null, "340px"] },
            React__default.createElement(WalletWrapper, { py: "24px", maxHeight: "453px", overflowY: "auto" },
                React__default.createElement(Grid, { gridTemplateColumns: "1fr 1fr" },
                    displayListConfig.map(function (wallet) { return (React__default.createElement(Box, { key: wallet.title },
                        React__default.createElement(WalletCard, { walletConfig: wallet, login: login, onDismiss: onDismiss }))); }),
                    !showMore && React__default.createElement(MoreWalletCard, { t: t, onClick: function () { return setShowMore(true); } }))),
            React__default.createElement(Box, { p: "24px" },
                React__default.createElement(Text, { textAlign: "center", color: "textSubtle", as: "p", mb: "16px" }, t("Haven’t got a crypto wallet yet?")),
                React__default.createElement(Button, __assign({ as: "a", href: "https://docs.optimuswap.io/get-started/connection-guide", variant: "subtle", width: "100%" }, getExternalLinkProps()), t("Learn How to Connect"))))));
};
var templateObject_1$1;

var useWalletModal = function (login, logout, t) {
    var onPresentConnectModal = useModal(React__default.createElement(ConnectModal, { login: login, t: t }))[0];
    return { onPresentConnectModal: onPresentConnectModal };
};

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

export { Icon$2h as AccountFilledIcon, Icon$2g as AccountIcon, Icon$2f as AddIcon, Alert, Icon$2e as ArrowBackIcon, Icon$2d as ArrowDownIcon, Icon$2c as ArrowDropDownIcon, Icon$2b as ArrowDropUpIcon, Icon$2a as ArrowFirstIcon, Icon$29 as ArrowForwardIcon, Icon$28 as ArrowLastIcon, Icon$26 as ArrowUpDownIcon, Icon$27 as ArrowUpIcon, Icon$25 as AutoRenewIcon, BackgroundImage, BalanceInput, GridLayout$1 as BaseLayout, BaseMenu, Icon$24 as BinanceChainIcon, Icon$23 as BinanceIcon, Icon$2j as BlockIcon, Icon$22 as BnbUsdtPairTokenIcon, BottomDrawer, Box, Breadcrumbs, Icon$21 as BscScanIcon, Icon$20 as BunnyCardsIcon, Icon$1$ as BunnyPlaceholderIcon, Button, ButtonMenu$1 as ButtonMenu, ButtonMenuItem, CakePrice$1 as CakePrice, Icon$1_ as CalculateIcon, Icon$1Z as CameraIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$1X as CardViewIcon, Icon$1Y as Cards, GridLayout as CardsLayout, Icon$1W as ChartDisableIcon, Icon$1V as ChartIcon, Checkbox, Icon$1U as CheckmarkCircleFillIcon, Icon$2l as CheckmarkCircleIcon, Icon$1T as CheckmarkIcon, Icon$1S as ChevronDownIcon, Icon$1R as ChevronLeftIcon, Icon$1Q as ChevronRightIcon, Icon$1P as ChevronUpIcon, Icon$1O as CircleOutlineIcon, ClickableElementContainer, Icon$1N as CloseIcon, Icon$1M as CogIcon, Icon$1L as Coin98Icon, Icon$1K as CommunityFilledIcon, Icon$1J as CommunityIcon, ConnectorNames, Icon$1I as CopyIcon, Icon$1H as CrownIcon, Icon$1G as CurrencyIcon, Icon$1F as DiscordIcon, Dropdown, DropdownMenuItemType, Icon$1D as EarnFillIcon, Icon$1E as EarnFilledIcon, Icon$1C as EarnIcon, Icon$1B as EllipsisIcon, Icon$2k as ErrorIcon, Icon$1A as ExpandIcon, ExpandableButton, ExpandableLabel, FallingBunnies, Icon$1z as FarmIcon, Flex, Icon$1y as GithubIcon, Grid, Icon$1x as GroupsIcon, Icon$1w as HamburgerCloseIcon, Icon$1v as HamburgerIcon, Heading, Icon$1u as HelpIcon, Icon$1t as HistoryIcon, Icon$1s as HomeIcon, IconButton, Icon$1r as IfoIcon, Image, Icon$2i as InfoIcon, InlineMenu, InlineMenuContainer, Input$1 as Input, InputGroup, Icon$1q as InstagramIcon, Icon$1p as LanguageCurrencyIcon, Icon$1o as LanguageIcon, Icon$1n as LaurelLeftIcon, Icon$1m as LaurelRightIcon, Icon$1l as LineGraphIcon, Link, LinkExternal, Icon$1k as ListViewIcon, Icon$1j as LoginIcon, Icon$1i as LogoIcon, Icon$1h as LogoRoundIcon, LogoWithTextIcon, Icon$1g as LogoutIcon, Icon$1f as MathWalletIcon, Icon$1e as MedalBronzeIcon, Icon$1d as MedalGoldIcon, Icon$1c as MedalPurpleIcon, Icon$1b as MedalSilverIcon, Icon$1a as MedalTealIcon, Menu$1 as Menu, Message, Icon$19 as MetamaskIcon, Icon$18 as MinusIcon, Modal, ModalBackButton, ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalProvider, ModalTitle, Icon$17 as MoonIcon, Icon$16 as MoreHorizontalIcon, Icon$15 as MoreIcon, Icon$14 as MoreVerticalIcon, Icon$12 as NftFillIcon, Icon$13 as NftFilledIcon, Icon$11 as NftIcon, Icon$10 as NoProfileAvatarIcon, NotificationDot, Icon$$ as OpenNewIcon, Overlay, Icon$_ as PancakeRoundIcon, PancakeToggle, Icon$Z as PancakesIcon, Icon$Y as PencilIcon, Icon$X as PlayCircleOutlineIcon, Icon$W as PocketWatchIcon, Icon$V as PoolIcon, Icon$U as PredictionsIcon, Icon$T as PresentCheckIcon, Icon$S as PresentNoneIcon, Icon$R as PresentWonIcon, Icon$Q as PrizeIcon, ProfileAvatar, Progress, Bar as ProgressBar, Icon$P as ProgressBunny, Icon$O as ProposalIcon, Radio, Icon$N as RedditIcon, Icon$M as RefreshIcon, Icon$L as RemoveIcon, ResetCSS, Icon$K as ResourcesFilledIcon, Icon$J as ResourcesIcon, Icon$I as SafePalIcon, Icon$H as SearchIcon, Icon$G as SellIcon, Icon$F as ShareIcon, Icon$E as ShrinkIcon, Skeleton, Slider, Icon$D as SmallDotIcon, Icon$C as SmartContractIcon, Spinner, Icon$B as StarFillIcon, Icon$A as StarLineIcon, Step, Stepper, SubMenu, SubMenuContainer, SubMenuItem, SubMenuItems, Icon$z as SunIcon, Svg, Icon$y as SwapFillIcon, Icon$x as SwapIcon, Icon$w as SwapVertIcon, Icon$v as SyncAltIcon, Tab, ButtonMenu as TabMenu, Table, Tag, Td, Icon$u as TeamBattleIcon, Icon$t as TeamPlayerIcon, Icon$s as TelegramIcon, Icon$r as TestnetIcon, Text, Textfield as TextField, Th, ThemeSwitcher$1 as ThemeSwitcher, Icon$q as Ticket, Icon$p as TicketFillIcon, Icon$q as TicketIcon, Icon$o as TicketRound, Timeline, Icon$n as TimerIcon, Toggle, TokenImage, TokenPairImage, Icon$m as TokenPocketIcon, TooltipText, Icon$l as TradeFilledIcon, Icon$k as TradeIcon, Icon$j as TradingViewIcon, Icon$i as TrophyFillIcon, Icon$h as TrophyGoldIcon, Icon$g as TrophyIcon, Icon$f as TrustWalletIcon, Icon$e as TuneIcon, Icon$d as TwitterIcon, UserMenu, UserMenuDivider, UserMenuItem, Icon$c as VerifiedIcon, Icon$b as VisibilityOff, Icon$a as VisibilityOn, Icon$9 as VolumeOffIcon, Icon$8 as VolumeUpIcon, Icon$7 as VoteIcon, Icon$6 as WaitIcon, Icon$5 as WalletConnectIcon, Icon$4 as WalletFilledIcon, Icon$3 as WalletIcon, Icon$2 as WarningIcon, variants$5 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, status as menuStatus, useDelayedUnmount, useKonamiCheatCode, useMatchBreakpoints, useModal, useOnClickOutside, useParticleBurst, useTable, useTooltip, useWalletModal };
