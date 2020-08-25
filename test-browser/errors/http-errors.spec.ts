import { HttpService, retryService } from '../../lib';

describe('Http errors', () => {
    const expectedRetryAttempts = 2;
    const MAX_SAFE_TIMEOUT = Math.pow(2, 31) - 1;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = MAX_SAFE_TIMEOUT;

    beforeAll(done => {
        spyOn(retryService, 'debugLogAttempt').and.callThrough();

        const httpService = new HttpService();

        httpService
            .get(
                {
                    url: 'https://deliver.kenticocloud.com/da5abe9f-fdad-4168-97cd-b3464be2ccb9/items/warrior-invalid-rxjs'
                },
                {
                    retryStrategy: {
                        deltaBackoffMs: 1000,
                        maxCumulativeWaitTimeMs: 4000,
                        addJitter: false,
                        maxAttempts: 100,
                        canRetryError: (xError) => true,
                    }
                }
            )
            .subscribe(() => done(), () => done());
    });

    it(`Warning for retry attempt should have been called '${expectedRetryAttempts}' times`, () => {
        expect(retryService.debugLogAttempt).toHaveBeenCalledTimes(expectedRetryAttempts);
    });
});
