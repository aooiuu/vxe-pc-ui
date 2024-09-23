import { VxeUI, setConfig, setIcon } from '@vxe-ui/core'
import { dynamicApp } from '../dynamics'
import { getFuncText } from './src/utils'
import { warnLog } from './src/log'

import { VxeGlobalConfig } from '../../types'

export const version = process.env.VUE_APP_VXE_VERSION as string
VxeUI.version = version

VxeUI.uiVersion = version
VxeUI.tableVersion = ''
VxeUI.t = VxeUI.getI18n
VxeUI._t = getFuncText

VxeUI.dynamicApp = dynamicApp

export function config (options?: VxeGlobalConfig) {
  if (process.env.VUE_APP_VXE_ENV === 'development') {
    warnLog('vxe.error.delFunc', ['config', 'setConfig'])
  }
  return setConfig(options)
}

export function setup (options?: VxeGlobalConfig) {
  if (process.env.VUE_APP_VXE_ENV === 'development') {
    warnLog('vxe.error.delFunc', ['setup', 'setConfig'])
  }
  return setConfig(options)
}

VxeUI.config = config
VxeUI.setup = setup

setConfig({
  alert: {},
  anchor: {},
  anchorLink: {},
  breadcrumb: {
    separator: '/'
  },
  breadcrumbItem: {},
  button: {
    trigger: 'hover'
  },
  buttonGroup: {},
  calendar: {
    minDate: new Date(1900, 0, 1),
    maxDate: new Date(2100, 0, 1),
    startDay: 1,
    selectDay: 1
  },
  card: {
    border: true,
    padding: true
  },
  carousel: {
    height: 200,
    loop: true,
    interval: 5000
  },
  carouselItem: {},
  checkbox: {},
  checkboxGroup: {},
  col: {},
  collapse: {},
  collapsePane: {},
  countdown: {},
  datePicker: {
    // size: null,
    // transfer: false
    // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
    // labelFormat: '',
    // valueFormat: '',
    startDate: new Date(1900, 0, 1),
    endDate: new Date(2100, 0, 1),
    startDay: 1,
    selectDay: 1
  },
  drawer: {
    // size: null,
    position: 'right',
    showHeader: true,
    lockView: true,
    mask: true,
    showTitleOverflow: true,
    showClose: true,
    padding: true
  },
  form: {
    // preventSubmit: false,
    // size: null,
    // colon: false,
    validConfig: {
      showMessage: true,
      autoPos: true
    },
    tooltipConfig: {
      enterable: true
    },
    titleAsterisk: true,
    titleOverflow: false,
    padding: true
  },
  formDesign: {
    height: 400,
    showHeader: true,
    showPc: true
  },
  formGather: {},
  formGroup: {},
  formItem: {},
  formView: {},
  icon: {},
  iconPicker: {
    icons: ['home', 'company', 'comment', 'setting', 'send', 'envelope', 'envelope-open', 'bell', 'search', 'print', 'pc', 'goods', 'chart-line', 'edit', 'delete', 'save', 'folder', 'microphone', 'flag', 'link', 'location', 'sunny', 'rmb', 'usd', 'user', 'add-user', 'add-users', 'star', 'unlock', 'time', 'text', 'feedback', 'calendar', 'association-form', 'cloud-download', 'cloud-upload', 'file', 'subtable', 'chart-bar-x', 'chart-bar-y', 'chart-line', 'chart-pie', 'chart-radar']
  },
  image: {
    showPreview: true,
    showPrintButton: true
  },
  imageGroup: {
    showPreview: true,
    showPrintButton: true
  },
  imagePreview: {
    showPrintButton: true
  },
  input: {
    // size: null,
    // transfer: false
    // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
    // labelFormat: '',
    // valueFormat: '',
    startDate: new Date(1900, 0, 1),
    endDate: new Date(2100, 0, 1),
    startDay: 1,
    selectDay: 1,
    digits: 2,
    controls: true
  },
  layoutAside: {},
  layoutBody: {},
  layoutContainer: {},
  layoutFooter: {},
  layoutHeader: {},
  link: {
    underline: true
  },
  listDesign: {
    height: 400,
    showPc: true
  },
  listView: {},
  list: {
    // size: null,
    scrollY: {
      enabled: true,
      gt: 100
      // oSize: 0
    }
  },
  loading: {
    showIcon: true,
    showText: true
  },
  modal: {
    // size: null,
    top: 16,
    showHeader: true,
    minWidth: 340,
    minHeight: 140,
    lockView: true,
    mask: true,
    duration: 3000,
    marginSize: 0,
    dblclickZoom: true,
    showTitleOverflow: true,
    animat: true,
    showClose: true,
    padding: true,
    draggable: true,
    showConfirmButton: null,
    zoomConfig: {
      minimizeMaxSize: 10,
      minimizeVerticalOffset: {
        top: -24,
        left: 0
      },
      minimizeHorizontalOffset: {
        top: 0,
        left: 32
      }
    },
    // storage: false,
    storageKey: 'VXE_MODAL_POSITION'
  },
  numberInput: {
    // size: null,
    // transfer: false
    digits: 2,
    controls: true
  },
  optgroup: {},
  option: {},
  pager: {
    pageSizePlacement: 'top'
    // size: null,
    // autoHidden: false,
    // perfect: true,
    // pageSize: 10,
    // pagerCount: 7,
    // pageSizes: [10, 15, 20, 50, 100],
    // layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
  },
  print: {},
  passwordInput: {
    controls: true
  },
  printPageBreak: {},
  pulldown: {},
  radio: {
    strict: true
  },
  radioButton: {
    strict: true
  },
  radioGroup: {
    strict: true
  },
  row: {},
  select: {
    multiCharOverflow: 8
  },
  switch: {},
  tabPane: {},
  tabs: {},
  tag: {},
  text: {},
  textarea: {
    resize: 'none'
  },
  tip: {},
  tooltip: {
    // size: null,
    trigger: 'hover',
    theme: 'dark',
    enterDelay: 500,
    leaveDelay: 300
  },
  tree: {
    indent: 20,
    minHeight: 60,
    radioConfig: {
      strict: true
    }
  },
  treeSelect: {
    treeConfig: {
      radioConfig: {},
      checkboxConfig: {}
    }
  },
  upload: {
    mode: 'all',
    imageTypes: ['jpg', 'jpeg', 'png', 'gif'],
    showList: true,
    showUploadButton: true,
    showButtonText: true,
    showRemoveButton: true,
    showButtonIcon: true,
    showPreview: true,
    imageStyle: {}
  },

  table: {},
  colgroup: {},
  column: {},
  toolbar: {},
  grid: {}
})

const iconPrefix = 'vxe-icon-'

setIcon({
  // loading
  LOADING: iconPrefix + 'spinner roll vxe-loading--default-icon',

  // button
  BUTTON_DROPDOWN: iconPrefix + 'arrow-down',
  BUTTON_LOADING: iconPrefix + 'spinner roll',

  // menu
  MENU_ITEM_EXPAND_OPEN: iconPrefix + 'arrow-down rotate180',
  MENU_ITEM_EXPAND_CLOSE: iconPrefix + 'arrow-down',

  // select
  SELECT_LOADED: iconPrefix + 'spinner roll',
  SELECT_OPEN: iconPrefix + 'caret-down rotate180',
  SELECT_CLOSE: iconPrefix + 'caret-down',

  // icon-picker
  ICON_PICKER_OPEN: iconPrefix + 'caret-down rotate180',
  ICON_PICKER_CLOSE: iconPrefix + 'caret-down',

  // pager
  PAGER_HOME: iconPrefix + 'home-page',
  PAGER_END: iconPrefix + 'end-page',
  PAGER_JUMP_PREV: iconPrefix + 'arrow-double-left',
  PAGER_JUMP_NEXT: iconPrefix + 'arrow-double-right',
  PAGER_PREV_PAGE: iconPrefix + 'arrow-left',
  PAGER_NEXT_PAGE: iconPrefix + 'arrow-right',
  PAGER_JUMP_MORE: iconPrefix + 'ellipsis-h',

  // radio
  RADIO_CHECKED: iconPrefix + 'radio-checked-fill',
  RADIO_UNCHECKED: iconPrefix + 'radio-unchecked',

  // checkbox
  CHECKBOX_INDETERMINATE: iconPrefix + 'checkbox-indeterminate-fill',
  CHECKBOX_CHECKED: iconPrefix + 'checkbox-checked-fill',
  CHECKBOX_UNCHECKED: iconPrefix + 'checkbox-unchecked',

  // input
  INPUT_CLEAR: iconPrefix + 'error-circle-fill',
  INPUT_SEARCH: iconPrefix + 'search',

  // number-picker
  NUMBER_INPUT_PREV_NUM: iconPrefix + 'caret-up',
  NUMBER_INPUT_NEXT_NUM: iconPrefix + 'caret-down',

  // date-picker
  DATE_PICKER_DATE: iconPrefix + 'calendar',

  // password-input
  PASSWORD_INPUT_SHOW_PWD: iconPrefix + 'eye-fill-close',
  PASSWORD_INPUT_HIDE_PWD: iconPrefix + 'eye-fill',

  // modal
  MODAL_ZOOM_MIN: iconPrefix + 'minus',
  MODAL_ZOOM_REVERT: iconPrefix + 'recover',
  MODAL_ZOOM_IN: iconPrefix + 'square',
  MODAL_ZOOM_OUT: iconPrefix + 'maximize',
  MODAL_CLOSE: iconPrefix + 'close',
  MODAL_INFO: iconPrefix + 'info-circle-fill',
  MODAL_SUCCESS: iconPrefix + 'success-circle-fill',
  MODAL_WARNING: iconPrefix + 'warning-circle-fill',
  MODAL_ERROR: iconPrefix + 'error-circle-fill',
  MODAL_QUESTION: iconPrefix + 'question-circle-fill',
  MODAL_LOADING: iconPrefix + 'spinner roll',

  // drawer
  DRAWER_CLOSE: iconPrefix + 'close',

  // form
  FORM_PREFIX: iconPrefix + 'question-circle-fill',
  FORM_SUFFIX: iconPrefix + 'question-circle-fill',
  FORM_FOLDING: iconPrefix + 'arrow-up rotate180',
  FORM_UNFOLDING: iconPrefix + 'arrow-up',

  // form-design
  FORM_DESIGN_STYLE_SETTING: iconPrefix + 'layout',
  FORM_DESIGN_PROPS_PC: iconPrefix + 'pc',
  FORM_DESIGN_PROPS_MOBILE: iconPrefix + 'mobile',
  FORM_DESIGN_PROPS_ADD: iconPrefix + 'add',
  FORM_DESIGN_PROPS_EDIT: iconPrefix + 'edit',
  FORM_DESIGN_WIDGET_ADD: iconPrefix + 'square-plus-fill',
  FORM_DESIGN_WIDGET_COPY: iconPrefix + 'copy',
  FORM_DESIGN_WIDGET_DELETE: iconPrefix + 'delete',
  FORM_DESIGN_WIDGET_SWAP_LR: iconPrefix + 'swap',
  FORM_DESIGN_WIDGET_OPTION_DELETE: iconPrefix + 'delete',
  FORM_DESIGN_WIDGET_OPTION_EXPAND_OPEN: iconPrefix + 'square-plus',
  FORM_DESIGN_WIDGET_OPTION_EXPAND_CLOSE: iconPrefix + 'square-minus',

  // list-design
  LIST_DESIGN_FIELD_SETTING: iconPrefix + 'custom-column',
  LIST_DESIGN_LIST_SETTING: iconPrefix + 'menu',
  LIST_DESIGN_LIST_SETTING_SEARCH_DELETE: iconPrefix + 'delete',
  LIST_DESIGN_LIST_SETTING_ACTIVE_DELETE: iconPrefix + 'delete',

  // upload
  UPLOAD_FILE_ERROR: iconPrefix + 'warning-circle-fill',
  UPLOAD_FILE_ADD: iconPrefix + 'upload',
  UPLOAD_FILE_REMOVE: iconPrefix + 'delete',
  UPLOAD_FILE_DOWNLOAD: iconPrefix + 'download',
  UPLOAD_IMAGE_RE_UPLOAD: iconPrefix + 'repeat',
  UPLOAD_IMAGE_ADD: iconPrefix + 'add',
  UPLOAD_IMAGE_REMOVE: iconPrefix + 'close',
  UPLOAD_LOADING: iconPrefix + 'spinner roll vxe-loading--default-icon',
  UPLOAD_FILE_TYPE_DEFAULT: iconPrefix + 'file',
  UPLOAD_FILE_TYPE_XLSX: iconPrefix + 'file-excel',
  UPLOAD_FILE_TYPE_XLS: iconPrefix + 'file-excel',
  UPLOAD_FILE_TYPE_PDF: iconPrefix + 'file-pdf',
  UPLOAD_FILE_TYPE_PNG: iconPrefix + 'file-image',
  UPLOAD_FILE_TYPE_GIF: iconPrefix + 'file-image',
  UPLOAD_FILE_TYPE_JPG: iconPrefix + 'file-image',
  UPLOAD_FILE_TYPE_JPEG: iconPrefix + 'file-image',
  UPLOAD_FILE_TYPE_MD: iconPrefix + 'file-markdown',
  UPLOAD_FILE_TYPE_PPD: iconPrefix + 'file-ppt',
  UPLOAD_FILE_TYPE_DOCX: iconPrefix + 'file-word',
  UPLOAD_FILE_TYPE_DOC: iconPrefix + 'file-word',
  UPLOAD_FILE_TYPE_ZIP: iconPrefix + 'file-zip',
  UPLOAD_FILE_TYPE_TXT: iconPrefix + 'file-txt',

  // image-preview
  IMAGE_PREVIEW_CLOSE: iconPrefix + 'close',
  IMAGE_PREVIEW_PREVIOUS: iconPrefix + 'arrow-left',
  IMAGE_PREVIEW_NEXT: iconPrefix + 'arrow-right',
  IMAGE_PREVIEW_PCT_FULL: iconPrefix + 'pct-full',
  IMAGE_PREVIEW_PCT_1_1: iconPrefix + 'pct-1-1',
  IMAGE_PREVIEW_ZOOM_OUT: iconPrefix + 'search-zoom-out',
  IMAGE_PREVIEW_ZOOM_IN: iconPrefix + 'search-zoom-in',
  IMAGE_PREVIEW_ROTATE_LEFT: iconPrefix + 'rotate-left',
  IMAGE_PREVIEW_ROTATE_RIGHT: iconPrefix + 'rotate-right',
  IMAGE_PREVIEW_PRINT: iconPrefix + 'print',
  IMAGE_PREVIEW_DOWNLOAD: iconPrefix + 'download',

  // alert
  ALERT_CLOSE: iconPrefix + 'close',
  ALERT_INFO: iconPrefix + 'info-circle-fill',
  ALERT_SUCCESS: iconPrefix + 'success-circle-fill',
  ALERT_WARNING: iconPrefix + 'warning-circle-fill',
  ALERT_ERROR: iconPrefix + 'error-circle-fill',

  // tree
  TREE_NODE_OPEN: iconPrefix + 'caret-right rotate90',
  TREE_NODE_CLOSE: iconPrefix + 'caret-right',
  TREE_NODE_LOADED: iconPrefix + 'spinner roll',

  // tree-select
  TREE_SELECT_LOADED: iconPrefix + 'spinner roll',
  TREE_SELECT_OPEN: iconPrefix + 'caret-down rotate180',
  TREE_SELECT_CLOSE: iconPrefix + 'caret-down',

  // tabs
  TABS_TAB_BUTTON_LEFT: iconPrefix + 'arrow-left',
  TABS_TAB_BUTTON_RIGHT: iconPrefix + 'arrow-right',
  TABS_TAB_CLOSE: iconPrefix + 'close',
  TABS_TAB_REFRESH: iconPrefix + 'refresh',
  TABS_TAB_REFRESH_LOADING: iconPrefix + 'refresh roll',

  // text
  TEXT_COPY: iconPrefix + 'copy',
  TEXT_LOADING: iconPrefix + 'spinner roll',

  // carousel
  CAROUSEL_HORIZONTAL_PREVIOUS: iconPrefix + 'arrow-left',
  CAROUSEL_HORIZONTAL_NEXT: iconPrefix + 'arrow-right',
  CAROUSEL_VERTICAL_PREVIOUS: iconPrefix + 'arrow-up',
  CAROUSEL_VERTICAL_NEXT: iconPrefix + 'arrow-down'

})

export * from '@vxe-ui/core'
export default VxeUI
