import { watch } from 'vue'
import { renderer } from '../../ui'
import XEUtils from 'xe-utils'
import { ItemInfo } from './itemInfo'
import { isEnableConf } from '../../ui/src/utils'

import type { VxeFormConstructor, VxeFormDefines } from '../../../types'

export interface XEFormItemProvide {
  formItem: ItemInfo;
}

export function isFormItem (item: any): item is ItemInfo {
  return item instanceof ItemInfo
}

export function createItem ($xeForm: VxeFormConstructor, _vm: any) {
  return isFormItem(_vm) ? _vm : new ItemInfo($xeForm, _vm)
}

export function handleFieldOrItem ($xeForm: VxeFormConstructor, fieldOrItem: string | VxeFormDefines.ItemInfo) {
  if (fieldOrItem) {
    return XEUtils.isString(fieldOrItem) ? $xeForm.getItemByField(fieldOrItem) : fieldOrItem
  }
  return null
}

export function isHiddenItem ($xeForm: VxeFormConstructor, formItem: VxeFormDefines.ItemInfo) {
  const { reactData } = $xeForm
  const { collapseAll } = reactData
  const { folding, visible } = formItem
  return visible === false || (folding && collapseAll)
}

export function isActiveItem ($xeForm: VxeFormConstructor, formItem: VxeFormDefines.ItemInfo) {
  let { visibleMethod, itemRender, visible, field } = formItem
  if (visible === false) {
    return visible
  }
  const compConf = isEnableConf(itemRender) ? renderer.get(itemRender.name) : null
  const fiVisibleMethod = compConf ? (compConf.formItemVisibleMethod || compConf.itemVisibleMethod) : null
  if (!visibleMethod && fiVisibleMethod) {
    visibleMethod = fiVisibleMethod
  }
  if (!visibleMethod) {
    return true
  }
  const formProps = $xeForm.props
  const { data } = formProps
  return visibleMethod({ data, field, property: field, item: formItem, $form: $xeForm, $grid: $xeForm.xegrid })
}

export function watchItem (props: any, formItem: ItemInfo) {
  Object.keys(props).forEach(name => {
    watch(() => props[name], (value: any) => {
      formItem.update(name, value)
    })
  })
}

export function assembleItem ($xeForm: VxeFormConstructor, el: HTMLDivElement, formItem: ItemInfo, formGroup: XEFormItemProvide | null) {
  const { reactData } = $xeForm
  const { staticItems } = reactData
  const parentElem = el.parentNode
  const parentItem = formGroup ? formGroup.formItem : null
  const parentItems = parentItem ? parentItem.children : staticItems
  if (parentElem) {
    parentItems.splice(XEUtils.arrayIndexOf(parentElem.children, el), 0, formItem)
    reactData.staticItems = staticItems.slice(0)
  }
}

export function destroyItem ($xeForm: VxeFormConstructor, formItem: ItemInfo) {
  const { reactData } = $xeForm
  const { staticItems } = reactData
  const index = XEUtils.findIndexOf(staticItems, item => item.id === formItem.id)
  if (index > -1) {
    staticItems.splice(index, 1)
  }
  reactData.staticItems = staticItems.slice(0)
}
