import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class ApidataService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos/1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {
  }
  showTasks(name:string) {
    //https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=hdfc&apikey=XYZ
   let temp='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+name+'&outputsize=full&apikey=ODIYRTX6RZVJ36MY';
    //let apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=ODIYRTX6RZVJ36MY';
    //'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=ODIYRTX6RZVJ36MY'
   //'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=TSCO.LON&apikey=ODIYRTX6RZVJ36MY'
   //'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=TSCO.LON&apikey=ODIYRTX6RZVJ36MY'
   //ODIYRTX6RZVJ36MY
   //let apiURL='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=60min&slice=year1month3&adjusted=false&apikey=ODIYRTX6RZVJ36MY'
   let apiURL=temp;
    console.log(temp);
    
    let promise = new Promise<any>((resolve, reject) => {
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any) => { // Success
            let data: any = Object.values(res["Time Series (Daily)"]);
            let timesdata: any = Object.keys(res["Time Series (Daily)"]);
            
            let final_data =  data.map((row: any, index: any) => {
              Object.keys(row).map(key => {
                let new_key = key.replace(/. /g, "");
                row[new_key] = row[key];
                // +Object.keys(res["Time Series (Daily)"]);
                delete row[key];
              })
              let newData = {'0date': timesdata[index], ...row};
              // console.log(newData);
              return newData;
            })
            
            resolve({final_data, metadata: res["Meta Data"],timesdata});
          }
        );
    });
    return promise;
  }
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  showTasksWeekly(name:string) {
    //https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=hdfc&apikey=XYZ
   //let temp='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+name+'&outputsize=full&apikey=ODIYRTX6RZVJ36MY';
    //let apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=ODIYRTX6RZVJ36MY';
    //'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=ODIYRTX6RZVJ36MY'
    let temp='https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol='+name+'&apikey=ODIYRTX6RZVJ36MY';
   //console.log(temp);
   //let temp='https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='+name+'&apikey=ODIYRTX6RZVJ36MY';
   //ODIYRTX6RZVJ36MY
   //let apiURL='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=60min&slice=year1month3&adjusted=false&apikey=ODIYRTX6RZVJ36MY'
   let apiURL=temp;
    console.log(temp);
    
    let promise = new Promise<any>((resolve, reject) => {
     
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any) => { // Success
            let data: any = Object.values(res["Weekly Time Series"]);
            let timesdata: any = Object.keys(res["Weekly Time Series"]);
            
            let final_data =  data.map((row: any, index: any) => {
              Object.keys(row).map(key => {
                let new_key = key.replace(/. /g, "");
                row[new_key] = row[key];
                delete row[key];
              })
              let newData = {'0date': timesdata[index], ...row};
              console.log(newData);
              return newData;
            })
            
            resolve({final_data, metadata: res["Meta Data"],timesdata});
          }
        );
    });
    return promise;
  }
  errorweekly(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  showTasksMonthly(name:string) {
    //https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=hdfc&apikey=XYZ
  // let temp='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+name+'&outputsize=full&apikey=ODIYRTX6RZVJ36MY';
    //let apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=ODIYRTX6RZVJ36MY';
    //'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=ODIYRTX6RZVJ36MY'
   //'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol='+name+'&apikey=ODIYRTX6RZVJ36MY'
   let temp='https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='+name+'&apikey=ODIYRTX6RZVJ36MY'
   //ODIYRTX6RZVJ36MY
   //let apiURL='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=60min&slice=year1month3&adjusted=false&apikey=ODIYRTX6RZVJ36MY'
   let apiURL=temp;
    console.log(temp);
    
    let promise = new Promise<any>((resolve, reject) => {
      
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any) => { // Success
            let data: any = Object.values(res["Monthly Time Series"]);
            let timesdata: any = Object.keys(res["Monthly Time Series"]);
            
            let final_data =  data.map((row: any, index: any) => {
              Object.keys(row).map(key => {
                let new_key = key.replace(/. /g, "");
                row[new_key] = row[key];
                // +Object.keys(res["Time Series (Daily)"]);
                delete row[key];
              })
              let newData = {'0date': timesdata[index], ...row};
              // console.log(newData);
              return newData;
            })
            
            resolve({final_data, metadata: res["Meta Data"],timesdata});
          }
        );
    });
    return promise;
  }
  errormonthly(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  SearchData(name1:string) {
    let temp1='https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+name1+'&apikey=XYZ'
    let apiURL=temp1;
    console.log(temp1);
    let promise = new Promise<any>((resolve, reject) => {
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any) => { // Success
            let data: any = Object.values(res["bestMatches"]);
            let final_data =  data.map((row: any) => {
              Object.keys(row).map(key => {
                
              })
              return row;
            })
            resolve({final_data});
          }
        );
    });
    return promise;
  }
}
