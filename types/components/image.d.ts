import { RenderFunction, SetupContext, Ref, ComponentPublicInstance, DefineComponent } from 'vue'
import { defineVxeComponent, VxeComponentBaseOptions, VxeComponentEventParams, ValueOf } from '@vxe-ui/core'

/* eslint-disable no-use-before-define,@typescript-eslint/ban-types */

export declare const VxeImage: defineVxeComponent<VxeImageProps, VxeImageEventProps>
export type VxeImageComponent = DefineComponent<VxeImageProps, VxeImageEmits>

export type VxeImageInstance = ComponentPublicInstance<VxeImageProps, VxeImageConstructor>

export interface VxeImageConstructor extends VxeComponentBaseOptions, VxeImageMethods {
  props: VxeImageProps
  context: SetupContext<VxeImageEmits>
  reactData: ImageReactData
  getRefMaps(): ImagePrivateRef
  getComputeMaps(): ImagePrivateComputed
  renderVN: RenderFunction
}

export interface ImagePrivateRef {
  refElem: Ref<HTMLDivElement | undefined>
}
export interface VxeImagePrivateRef extends ImagePrivateRef { }

export namespace VxeImagePropTypes {
  export type Src = string
  export type Alt = number | string
  export type Loading = '' | 'lazy'
  export type Title = number | string
  export type Width = number | string
  export type Height = number | string
}

export type VxeImageProps = {
  src?: VxeImagePropTypes.Src
  alt?: VxeImagePropTypes.Alt
  loading?: VxeImagePropTypes.Loading
  title?: VxeImagePropTypes.Title
  width?: VxeImagePropTypes.Width
  height?: VxeImagePropTypes.Height
}

export interface ImagePrivateComputed {
}
export interface VxeImagePrivateComputed extends ImagePrivateComputed { }

export interface ImageReactData {
}

export interface ImageMethods {
  dispatchEvent(type: ValueOf<VxeImageEmits>, params: Record<string, any>, evnt: Event | null): void
}
export interface VxeImageMethods extends ImageMethods { }

export interface ImagePrivateMethods {}
export interface VxeImagePrivateMethods extends ImagePrivateMethods { }

export type VxeImageEmits = [
  'click'
]

export namespace VxeImageDefines {
  export interface ImageEventParams extends VxeComponentEventParams {
    $image: VxeImageConstructor
  }

  export type PreviewImageFunction = (options: {
    url?: string
    urlList?: string[]
    activeIndex?: number
  }) => Promise<any>
}

export type VxeImageEventProps = {}

export interface VxeImageListeners { }

export namespace VxeImageEvents { }

export namespace VxeImageSlotTypes {
  export interface DefaultSlotParams {}
}

export interface VxeImageSlots {
  default: (params: VxeImageSlotTypes.DefaultSlotParams) => any
}

export const Image: typeof VxeImage
export default VxeImage
