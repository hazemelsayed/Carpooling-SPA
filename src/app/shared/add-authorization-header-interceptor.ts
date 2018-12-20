import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { OpenIdConnectService } from '../_services/OpenIdConnect.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AddAuthorizationHeaderInterceptor implements HttpInterceptor {

    constructor(private openIdConnectService: OpenIdConnectService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler):
         Observable<HttpEvent<any>> {
        // add the access token as bearer token, cloned it as it is an immutable.
        request = request.clone(
            { setHeaders: { Authorization: this.openIdConnectService.user.token_type
                + ' ' + this.openIdConnectService.user.access_token } });
        return next.handle(request);
    }
}
