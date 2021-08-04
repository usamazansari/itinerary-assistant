import { IconModel, IconStub } from '@itinerary-assistant/ui/core';

/**
 * Virtual Memory for `ToolbarComponent`
 *
 * ```ts
 * interface ToolbarVMModel {
 *   assets  : {
 *     trigger : IconModel
 *     logo    : string
 *   }
 * }
 * ```
 *
 * @export
 * @interface ToolbarVMModel
 */
export interface ToolbarVMModel {
  /**
   * Assets for `ToolbarComponent`
   *
   * @type {{
   *   trigger: ;
   *   logo: ;
   * }}
   * @memberof ToolbarVMModel
   */
  assets: {
    /**
     * Trigger for the Sidenav
     *
     * @type {IconModel}
     * @memberof ToolbarVMModel
     */
    trigger: IconModel;

    /**
     * Logo of the application
     *
     * @type {string}
     * @memberof ToolbarVMModel
     */
    logo: string;
  };
}

/**
 * Stub for `ToolbarVMModel`
 *
 * ```ts
 * const ToolbarVMStub: ToolbarVMModel = {
 *   assets  : {
 *     trigger : { ...IconStub }
 *     logo    : ''
 *   }
 * };
 * ```
 */
export const ToolbarVMStub: ToolbarVMModel = {
  assets: {
    trigger: { ...IconStub },
    logo: ''
  }
};
