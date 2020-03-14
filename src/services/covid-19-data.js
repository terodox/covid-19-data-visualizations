let _instance;
export class Covid19Data {
  constructor() {
    this._dataPromise = null;
  }

  static getInstance() {
    if(!_instance) {
      _instance = new Covid19Data();
    }
    return _instance;
  }

  async getData() {
    if(this._dataPromise) {
      return this._dataPromise;
    }

    try {
      this._dataPromise = (await fetch('https://lab.isaaclin.cn/nCoV/api/area')).json();
      return this._dataPromise;
    } catch (error) {
      this._dataPromise = null;
      console.error(error);
      window.alert('Failed to fetch data. Please refresh to try again.');
    }
  }
}
