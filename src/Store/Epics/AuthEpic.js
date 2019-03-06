import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE
} from '../Constant'
import 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './../../Services/https';
import Path from './../../Config/path';

//** Epic Middlewares For Auth **//
export default class AuthEpic {

    //Epic middleware for signup
    static signupEpic = (action$) =>
        action$.ofType(SIGNUP)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.SIGNUP, payload)
                    .switchMap(({ response }) => {
                        if (response.err) {
                            return Observable.of({
                                type: SIGNUP_FAILURE,
                                payload: response.err
                            });
                        }
                        return Observable.of({
                            type: SIGNUP_SUCCESS,
                            payload: response
                        });
                    });
            })
}