// Copyright 2017 The gachain-front Authors
// This file is part of the gachain-front library.
// 
// The gachain-front library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// The gachain-front library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public License
// along with the gachain-front library. If not, see <http://www.gnu.org/licenses/>.
import 'rxjs';
import 'lib/external/fsa';
import GachainAPI, { IRequestTransport,  } from 'lib/gachainAPI';

describe('getPageTreeEpic', () => {
    it('gets page tree json', () => {

        const paramTestingAPIHost = 'http://test_Url.com';
        const paramTestingAPIEndpoint = 'api/v2';

        const paramsTransportMock: IRequestTransport = request => {
            return new Promise<any>((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        body: {
                            __requestUrl: request.url,
                            body: {'tree': []}
                        }
                    });
                }, 0);
            });
        };

        const paramTestingAPIMock = () => new GachainAPI({
            apiHost: paramTestingAPIHost,
            apiEndpoint: paramTestingAPIEndpoint,
            transport: paramsTransportMock
        });

        const testRequest = {
            template: '',
            locale: 'en-US',
            source: true
        };

        paramTestingAPIMock().contentJson(testRequest).then((response: any) => {
            expect(response).toEqual({
                __requestUrl: `${paramTestingAPIHost}/${paramTestingAPIEndpoint}/content`,
                body: {
                    tree: []
                }
            });
        });
    });
});