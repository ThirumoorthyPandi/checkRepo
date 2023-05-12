import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Site24Service {
  
  url = 'https://www.site24x7.com/api/availability/group/305524000000344017?period=13&start_date=&end_date=&maintenance_required=&subgroup_monitors=';
  my_token = '1000.09c814661b2a9eb9d693d7752b18d165.32da0e8717a23f02726e4fe17ecd14ca';

  constructor() { 
    
   }
}
