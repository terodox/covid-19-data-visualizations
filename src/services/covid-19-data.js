let _instance;
export class Covid19Data {
  constructor() {

  }

  static getInstance() {
    if(!_instance) {
      _instance = new Covid19Data();
    }
    return _instance;
  }

  async getData() {
    try {
      return (await fetch('https://lab.isaaclin.cn/nCoV/api/area')).json();
    } catch (error) {
      console.error(error);
      window.alert('Failed to fetch data. Please refresh to try again.');
    }
  }
}
