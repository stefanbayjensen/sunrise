(()=>{"use strict";const o={sectionRendering:window.component((()=>{console.log("render:some:sections"),window.app.unmount(),window.app.mount()})),consoleLog:window.component((o=>{const{text:n}=o.dataset;console.log("console:log",n)}))};window.app.add(o),window?.app?.getState()?.cart&&window.app.mount()})();