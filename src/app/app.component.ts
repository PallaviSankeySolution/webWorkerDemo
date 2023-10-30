import { AfterViewInit, Component, ViewChild ,OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'webWorkerDemo';
 

workerData:any=[]
  constructor(){
   // const markerCluster = new MarkerClusterer({ markers, map });
  }
  ngOnInit(){
    console.log("----before", this.workerData)
    this.callWebWorker().then((result)=>{
    this.workerData=result
    console.log("********** after", this.workerData)
   })
   .catch((error)=>{
    console.log("eror",error)
   })
   
  
  }

  async callWebWorker(){
    return new Promise(( resolve,reject) => {
      try{
        if (typeof Worker !== 'undefined') {
          // Create a new
          const worker = new Worker(new URL('./app.worker', import.meta.url));
        worker.onmessage = ({ data }) => {
            console.log("_______________________________________________",typeof(data))
            console.log(`page got message: `,data);
          resolve(data);
          };
          
          worker.postMessage('');
        } else {
        }
      
      }catch(err){
           console.log("catch error ,",err)
      }
     
    })
  }

  

 

}






