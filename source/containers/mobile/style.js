/**
 * Based on onsen ui modal but with small changes.
 *
 * @link https://onsen.io/v2/api/css.html
 */
const styles = `
    .alert-dialog {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        line-height: normal;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 17px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 270px;
        margin: auto auto;
        background-color: #f4f4f4;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        overflow: visible;
        max-width: 95%;
        color: #1f1f21;
    }
    .alert-dialog-container {
        height: inherit;
        padding-top: 16px;
        overflow: hidden;
    }
    .alert-dialog-title {
        font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 17px;
        font-weight: 500;
        padding: 0px 8px 0px 8px;
        text-align: center;
        color: #1f1f21;
    }
    .alert-dialog-content {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 4px 12px 8px 12px;
        font-size: 14px;
        min-height: 36px;
        text-align: center;
        color: #1f1f21;
    }
    .alert-dialog-footer {
        width: 100%;
    }
    .alert-dialog-button {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        line-height: normal;
        font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 17px;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;
        letter-spacing: 0;
        vertical-align: middle;
        border: none;
        border-top: 1px solid #ddd;
        font-size: 16px;
        padding: 0 8px;
        margin: 0;
        display: block;
        width: 100%;
        background-color: transparent;
        text-align: center;
        height: 44px;
        line-height: 44px;
        outline: none;
        color: rgba(24, 103, 194, 0.81);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .alert-dialog-button {
            border-top: none;
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: top;
            background-image: -webkit-linear-gradient(270deg, #ddd, #ddd 50%, transparent 50%);
            background-image: -webkit-gradient(linear, left top, left bottom, from(#ddd), color-stop(50%, #ddd), color-stop(50%, transparent));
            background-image: -webkit-linear-gradient(top, #ddd, #ddd 50%, transparent 50%);
            background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%);
        }
    }
    .alert-dialog-button:active {
        background-color: rgba(0, 0, 0, 0.05);
    }
    .alert-dialog-button--primal {
        font-weight: 500;
    }
    .alert-dialog-footer--one {
        white-space: nowrap;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    .alert-dialog-button--one {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        width: 100%;
        border-left: 1px solid #ddd;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .alert-dialog-button--one {
            border-top: none;
            border-left: none;
            background-size: 100% 1px, 1px 100%;
            background-repeat: no-repeat;
            background-position: top, left;
            background-image: -webkit-linear-gradient(90deg, transparent, transparent 50%, #ddd 50%), -webkit-linear-gradient(0deg, transparent, transparent 50%, #ddd 50%);
            background-image: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(50%, transparent), color-stop(50%, #ddd)), -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, transparent), color-stop(50%, #ddd));
            background-image: -webkit-linear-gradient(bottom, transparent, transparent 50%, #ddd 50%), -webkit-linear-gradient(left, transparent, transparent 50%, #ddd 50%);
            background-image: linear-gradient(0deg, transparent, transparent 50%, #ddd 50%), linear-gradient(90deg, transparent, transparent 50%, #ddd 50%);
        }
    }
    .alert-dialog-button--one:first-child {
        border-left: none;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .alert-dialog-button--one:first-child {
            border-top: none;
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: top, left;
            background-image: -webkit-linear-gradient(90deg, transparent, transparent 50%, #ddd 50%);
            background-image: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(50%, transparent), color-stop(50%, #ddd));
            background-image: -webkit-linear-gradient(bottom, transparent, transparent 50%, #ddd 50%);
            background-image: linear-gradient(0deg, transparent, transparent 50%, #ddd 50%);
        }
    }
    .alert-dialog-mask {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        line-height: normal;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
    }
    
    .material .alert-dialog {
        -webkit-border-radius: 2px;
        border-radius: 2px;
        background-color: #fff;
    }
    .material .alert-dialog-container {
        padding-top: 22px;
        -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
    }
    .material .alert-dialog-title {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
        text-align: left;
        font-size: 20px;
        font-weight: 500;
        padding: 0 24px;
        color: #212121;
    }
    .material .alert-dialog-content {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
        text-align: left;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        padding: 0 24px;
        margin: 24px 0 10px 0;
        min-height: 0;
        color: #727272;
    }
    .material .alert-dialog-footer {
        display: inline-block;
        padding: 0px 8px 0px 24px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .material .alert-dialog-button {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
        text-transform: uppercase;
        display: inline-block;
        width: auto;
        min-width: 70px;
        float: right;
        background: none;
        border-top: none;
        font-size: 14px;
        font-weight: 500;
        outline: none;
        color: #009688;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .material .alert-dialog-button {
            background: none;
        }
    }
    .material .alert-dialog-button:active {
        background-color: initial;
    }
    .material .alert-dialog-button--one,
    .material .alert-dialog-button--one:first-child {
        border: 0;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .material .alert-dialog-button--one,
        .material .alert-dialog-button--one:first-child {
            background: none;
        }
    }
    .material .alert-dialog-button--primal {
        font-weight: 500;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .material .alert-dialog-button--primal {
            background: none;
        }
    }
    .material .alert-dialog-mask {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

export default function() {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styles;
    document.body.appendChild(style);
}