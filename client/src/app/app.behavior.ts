import { IActor } from './app.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class AppBehaviourService {

    private islog = false

    private login = new BehaviorSubject<boolean>(this.islog)
    curLog = this.login.asObservable()

    constructor(){}

    changeLogin(bool:boolean){
        this.login.next(bool)
    }
}