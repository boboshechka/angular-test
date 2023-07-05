import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor() {}

  isVisible$ = new BehaviorSubject<boolean>(false);
  productItems = null;
  isLoading = false;
  date = new Date();

  open() {
    this.isVisible$.next(true);
    this.isLoading = true;
    const token = localStorage.getItem('token');
    fetch('https://core.nekta.cloud/api/device/metering_devices', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: `{"page":1,"last_page":0,"sort_field":"id","sort":"desc","search_string":null,"device_state":"all","is_archived":false,"paginate":true,"append_fields":["active_polling","attributes","tied_point"],"per_page":10}`,
    })
      .then((res) => res.json())
      .then((tableData) => {
        this.productItems = tableData.data.metering_devices.data;
        this.isLoading = false;
        console.log(
          'data from product list',
          tableData.data.metering_devices.data
        );
      });
  }
  dateFormatter() {
    return this.date.toISOString().split('T')[0];
  }
}
