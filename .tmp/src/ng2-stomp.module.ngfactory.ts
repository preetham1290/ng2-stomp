/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../src/ng2-stomp.module';
import * as import2 from '@angular/core/src/di/injector';
class Ng2StompModuleInjector extends import0.NgModuleInjector<import1.Ng2StompModule> {
  _Ng2StompModule_0:import1.Ng2StompModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.Ng2StompModule {
    this._Ng2StompModule_0 = new import1.Ng2StompModule(this.parent.get(import1.Ng2StompModule,(null as any)));
    return this._Ng2StompModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.Ng2StompModule)) { return this._Ng2StompModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const Ng2StompModuleNgFactory:import0.NgModuleFactory<import1.Ng2StompModule> = new import0.NgModuleFactory(Ng2StompModuleInjector,import1.Ng2StompModule);