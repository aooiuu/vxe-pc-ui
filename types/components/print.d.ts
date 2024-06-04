import { RenderFunction, SetupContext, Ref, ComponentPublicInstance, DefineComponent } from 'vue'
import { defineVxeComponent, VxeComponentBaseOptions, VxeComponentEventParams, ValueOf, VxeComponentSlotType, VxeComponentAlignType } from '@vxe-ui/core'

/* eslint-disable no-use-before-define,@typescript-eslint/ban-types */

export declare const VxePrint: defineVxeComponent<VxePrintProps, VxePrintEventProps>
export type VxePrintComponent = DefineComponent<VxePrintProps, VxePrintEmits>

export type VxePrintInstance = ComponentPublicInstance<VxePrintProps, VxePrintConstructor>

export interface VxePrintConstructor extends VxeComponentBaseOptions, VxePrintMethods {
  props: VxePrintProps
  context: SetupContext<VxePrintEmits>
  reactData: PrintReactData
  getRefMaps(): PrintPrivateRef
  getComputeMaps(): PrintPrivateComputed
  renderVN: RenderFunction
}

export interface PrintPrivateRef {
  refElem: Ref<HTMLDivElement | undefined>
}
export interface VxePrintPrivateRef extends PrintPrivateRef { }

export namespace VxePrintPropTypes {
  export type Align = VxeComponentAlignType
  export type Title = string
  export type HeaderAlign = VxeComponentAlignType
  export type Content = string
  export type Html = string
  export type CustomLayout = boolean
  export type FooterAlign = VxeComponentAlignType
  export type PageBreaks = VxePrintDefines.PageBreakObj[]
  export type ShowPageNumber = boolean
  export type CustomStyle = string
  export type ShowAllPageTitle = boolean
  export type HeaderHtml = string | ((params: VxePrintDefines.PageBreakParam) => string)
  export type FooterHtml = string | ((params: VxePrintDefines.PageBreakParam) => string)
  export type LeftHtml = string | ((params: VxePrintDefines.PageBreakParam) => string)
  export type RightHtml = string | ((params: VxePrintDefines.PageBreakParam) => string)
  export type BeforeMethod = (params: {
    html: string
    options: VxePrintProps

    /**
     * 已废弃，请使用 html
     * @deprecated
     */
    content: string
  }) => string
}

export type VxePrintProps = {
  align?: VxePrintPropTypes.Align
  title?: VxePrintPropTypes.Title
  headerAlign?: VxePrintPropTypes.HeaderAlign
  html?: VxePrintPropTypes.Html
  customLayout?: VxePrintPropTypes.CustomLayout
  showPageNumber?: VxePrintPropTypes.ShowPageNumber
  footerAlign?: VxePrintPropTypes.FooterAlign
  customStyle?: VxePrintPropTypes.CustomStyle
  headerHtml?: VxePrintPropTypes.HeaderHtml
  footerHtml?: VxePrintPropTypes.FooterHtml
  leftHtml?: VxePrintPropTypes.LeftHtml
  rightHtml?: VxePrintPropTypes.RightHtml
  pageBreaks?: VxePrintPropTypes.PageBreaks
  showAllPageTitle?: VxePrintPropTypes.ShowAllPageTitle
  beforeMethod?: VxePrintPropTypes.BeforeMethod

  /**
   * 已废弃，请使用 html
   * @deprecated
   */
  content?: VxePrintPropTypes.Content
}

export interface PrintPrivateComputed {
}
export interface VxePrintPrivateComputed extends PrintPrivateComputed { }

export interface PrintReactData {
  staticPageBreaks: VxePrintDefines.PageBreakConfig[]
}

export interface PrintMethods {
  dispatchEvent(type: ValueOf<VxePrintEmits>, params: Record<string, any>, evnt: Event | null): void
  print(): Promise<any>
}
export interface VxePrintMethods extends PrintMethods { }

export interface PrintPrivateMethods { }
export interface VxePrintPrivateMethods extends PrintPrivateMethods { }

export type VxePrintEmits = []

export namespace VxePrintDefines {
  export interface PrintEventParams extends VxeComponentEventParams {
    $print: VxePrintConstructor
  }

  export interface PageBreakParams {
    currentPage: number
    pageCount: number
  }

  export interface PageBreakObj {
    bodyHtml?: string | ((params: VxePrintDefines.PageBreakParam) => string)
    headerHtml?: string | VxePrintPropTypes.HeaderHtml
    footerHtml?: string | VxePrintPropTypes.FooterHtml
    leftHtml?: string | VxePrintPropTypes.LeftHtml
    rightHtml?: string | VxePrintPropTypes.RightHtml
  }

  export interface PageBreakConfig {
    id: string
    slots?: {
      default?: ((params: VxePrintSlotTypes.DefaultSlotParams) => VxeComponentSlotType[] | VxeComponentSlotType) | null
      header?: ((params: VxePrintSlotTypes.DefaultSlotParams) => VxeComponentSlotType[] | VxeComponentSlotType) | null
      footer?: ((params: VxePrintSlotTypes.DefaultSlotParams) => VxeComponentSlotType[] | VxeComponentSlotType) | null
      left?: ((params: VxePrintSlotTypes.DefaultSlotParams) => VxeComponentSlotType[] | VxeComponentSlotType) | null
      right?: ((params: VxePrintSlotTypes.DefaultSlotParams) => VxeComponentSlotType[] | VxeComponentSlotType) | null
    }
  }

  export type PrintFunction = (options?: VxePrintProps & {
    /**
     * 请使用 title
     * @deprecated
     */
    sheetName?: string
    /**
     * 请使用 customStyle
     * @deprecated
     */
    style?: string
    /**
     * 请使用 customStyle
     * @deprecated
     */
    beforePrintMethod?: VxePrintPropTypes.BeforeMethod
  }) => Promise<any>
}

export type VxePrintEventProps = {}

export interface VxePrintListeners { }

export namespace VxePrintEvents { }

export namespace VxePrintSlotTypes {
  export interface HeaderSlotParams extends VxePrintDefines.PageBreakParams {}
  export interface DefaultSlotParams {}
  export interface FooterSlotParams extends VxePrintDefines.PageBreakParams {}
  export interface LeftSlotParams extends VxePrintDefines.PageBreakParams {}
  export interface RightSlotParams extends VxePrintDefines.PageBreakParams {}
}

export interface VxePrintSlots {
  default: (params: VxePrintSlotTypes.DefaultSlotParams) => any
  header: (params: VxePrintSlotTypes.HeaderSlotParams) => any
  footer: (params: VxePrintSlotTypes.FooterSlotParams) => any
  left: (params: VxePrintSlotTypes.LeftSlotParams) => any
  right: (params: VxePrintSlotTypes.RightSlotParams) => any
}

export const Print: typeof VxePrint
export default VxePrint
