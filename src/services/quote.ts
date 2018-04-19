import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuoteService{
    
    public data:any;

    constructor(public http:Http){
    }

    getQuotes(){
        this.http.get("http://127.0.0.1:8081/sports.json")
            .subscribe(
                res=>{
                    this.data=res.json();
                    console.log(this.data);
                },
                err=>{
                    console.log("Error!!!!")
                    console.log(err);
                }
            );
    }
}