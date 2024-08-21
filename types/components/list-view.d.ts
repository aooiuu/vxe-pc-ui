import { RenderFunction, SetupContext, Ref, ComponentPublicInstance, DefineComponent } from 'vue'
import { defineVxeComponent, VxeComponentBaseOptions, VxeComponentEventParams, ValueOf } from '@vxe-ui/core'
import { VxeListDesignDefines } from './list-design'
import { VxeGridInstance, VxeGridPropTypes, VxeGridProps, VxeGridListeners } from './grid'
import { VxeColumnSlotTypes } from './column'
import { VxeButtonProps } from './button'

/* eslint-disable no-use-before-define,@typescript-eslint/ban-types */

export declare const VxeListView: defineVxeComponent<VxeListViewProps, VxeListViewEventProps, VxeListViewSlots>
export type VxeListViewComponent = DefineComponent<VxeListViewProps & VxeListViewEventProps>

export type VxeListViewInstance = ComponentPublicInstance<VxeListViewProps, VxeListViewConstructor>

export interface VxeListViewConstructor<D = any> extends VxeComponentBaseOptions, VxeListViewMethods<D> {
  props: VxeListViewProps
  context: SetupContext<VxeListViewEmits>
  reactData: ListViewReactData
  getRefMaps(): ListViewPrivateRef<D>
  getComputeMaps(): ListViewPrivateComputed
  renderVN: RenderFunction
}

export interface ListViewPrivateRef<D = any> {
  refElem: Ref<HTMLDivElement | undefined>
  refGrid: Ref<VxeGridInstance<D> | undefined>
}
export interface VxeListViewPrivateRef<D = any> extends ListViewPrivateRef<D> { }

export namespace VxeListViewPropTypes {
  export type Config = null | VxeListDesignDefines.ListDesignConfig
  export type Loading = boolean
  export type Height = string | number
  export type FormData = Record<string, any>
  export type ActionButtons = VxeListDesignDefines.DefaultSettingFormActionButton[]
  export type GridOptions<D = any> = Omit<VxeGridProps<D>, 'columns'>
  export type GridEvents<D = any> = VxeGridListeners<D>
  export type ViewRender = {
    name?: string
  }
}

export type VxeListViewProps<D = any> = {
  config?: VxeListViewPropTypes.Config
  loading?: VxeListViewPropTypes.Loading
  height?: VxeListViewPropTypes.Height
  formData?: VxeListViewPropTypes.FormData
  gridOptions?: VxeListViewPropTypes.GridOptions<D>
  gridEvents?: VxeListViewPropTypes.GridEvents<D>
  viewRender?: VxeListViewPropTypes.ViewRender
}

export interface ListViewPrivateComputed {
}
export interface VxeListViewPrivateComputed extends ListViewPrivateComputed { }

export interface ListViewReactData {
  searchFormData: any
  searchFormItems: VxeListDesignDefines.SearchItemObjItem[]
  listTableColumns: VxeListDesignDefines.ListColumnObjItem[]
  tableColumns: VxeGridPropTypes.Columns
}

export interface ListViewMethods<D = any> {
  dispatchEvent(type: ValueOf<VxeListViewEmits>, params: Record<string, any>, evnt: Event | null): void
  /**
   * 清除所有配置
   */
  clearConfig(): Promise<any>
  /**
   * 加载配置
   */
  loadConfig(config: VxeListDesignDefines.ListDesignConfig): Promise<any>
  /**
   * 解析配置
   */
  parseConfig(config: VxeListDesignDefines.ListDesignConfig): {
    formData: Record<string, any>
    formItems: VxeListDesignDefines.SearchItemObjItem[]
    tableColumns: VxeGridPropTypes.Columns
    actionButtons: VxeListViewPropTypes.ActionButtons
  }
  /**
   * 获取表单查询条件
   */
  getQueryFilter(): VxeListViewDefines.QueryFilterResult
  /**
   * 给 Grid 数据代理提交指令
   * @param code 指令编码
   */
  commitProxy(code: string, ...args: any[]): Promise<any>
}
export interface VxeListViewMethods<D = any> extends ListViewMethods<D> { }

export interface ListViewPrivateMethods { }
export interface VxeListViewPrivateMethods extends ListViewPrivateMethods { }

export type VxeListViewEmits = [
  'cell-action',
  'update:formData',
  'update:actionButtons'
]

export namespace VxeListViewDefines {
  export interface ListViewEventParams extends VxeComponentEventParams {
    $listView: VxeListViewConstructor
  }

  export interface CellActionEventParams<D = any> extends VxeColumnSlotTypes.DefaultSlotParams<D>, ListViewEventParams {
    button: VxeButtonProps
  }

  export interface QueryFilterCondition {
    /**
     * 字段名
     */
    field: string
    /**
     * 值
     */
    value: any
    /**
     * 匹配方式
     */
    match: '' | 'fuzzy' | 'exact'
    /**
     * 值类型
     */
    type: 'array' | ''
  }

  export interface QueryFilterItem {
    /**
     * 字段多个查询条件
     */
    condition: QueryFilterCondition[]
    /**
     * 查询类型
     */
    type: 'and' | 'or' | ''
  }

  export interface QueryFilterResult {
    /**
     * 筛选字段列表
     */
    items: QueryFilterItem[]
    /**
     * 查询类型
     */
    type: 'and' | 'or' | ''
  }
}

export interface VxeListViewEventProps<D = any> {
  onCellAction?: VxeListViewEvents.CellAction<D>
}

export interface VxeListViewListeners<D = any> {
  cellAction?: VxeListViewEvents.CellAction<D>
}

export namespace VxeListViewEvents {
  export type CellAction<D = any> = (params: VxeListViewDefines.CellActionEventParams<D>) => void
}

export namespace VxeListViewSlotTypes {
  export interface DefaultSlotParams {}
  export interface GridSlotParams {}
  export interface CellActionSlotParams {
    // buttons: VxeButtonProps[]
  }
}

export interface VxeListViewSlots<D = any> {
  default?: (params: VxeListViewSlotTypes.DefaultSlotParams) => any
  grid?: (params: VxeListViewSlotTypes.GridSlotParams) => any
  cellAction?: (params: VxeListViewSlotTypes.CellActionSlotParams) => any

  [key: string]: ((params: {
    [key: string]: any
  }) => any) | undefined
}

export const ListView: typeof VxeListView
export default VxeListView
