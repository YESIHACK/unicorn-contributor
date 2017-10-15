import { expect } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import { parseDate } from '../src/parsers';
import { DEFAULT_REALISTIC_GAPS } from '../src/defaults';

let sandbox, processExit;
let program = {
  from: parseDate('20160101'),
  to: parseDate('20190101'),
  contributions: 1000,
};

import * as utils from '../src/utils';
const { initDaysList } = proxyquire('../src/unicorn', {
  'commander': program,
  'cli-progress': {},
  './utils': {
    ...utils,
    printError: () => {},
  }
});

describe('unicorn', function() {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    processExit = sandbox.stub(process, 'exit');
    processExit.callsFake((errorCode) => { throw new Error(errorCode) })
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('--from and --to', () => {
    it('starts the days matrix correctly', function() {
      program.from = parseDate('20150101');
      const days = initDaysList();
      expect(days.length).to.eql(1461);
    });

    it('can not set date after to date', function() {
      program.from = parseDate('20200101');
      program.to = parseDate('20190101');
      expect(() => initDaysList()).to.throw('1');
    });
  });

  describe('--realistic', () => {
    it('leaves gaps', function() {
      program.from = parseDate('20160101');
      program.to = parseDate('20170101');
      program.realistic = true;
      program.realisticGaps = DEFAULT_REALISTIC_GAPS;
      const days = initDaysList();
      const gaps = days.filter(day => day.contributions.length === 0);
      expect(gaps.length).to.be.eql(DEFAULT_REALISTIC_GAPS);
    });
  });
});
