import { Component, State, h } from '@stencil/core';
import { Covid19Data } from '../../services/covid-19-data.js';

@Component({
  tag: 'data-dump',
  styleUrl: 'data-dump.css',
  shadow: true
})
export class DataDump {
  @State() areas: any;

  constructor() {
    this.getData();
  }

  async getData() {
    const allResults = await Covid19Data.getInstance().getData();
    this.areas = allResults.results.map(result => result.provinceEnglishName);
    console.log('Areas Received', allResults);
  }

  render() {
      return (
        <div class="data-dump">
          <p>
            {JSON.stringify(this.areas, null, 2)}
          </p>
        </div>
      );
  }
}
