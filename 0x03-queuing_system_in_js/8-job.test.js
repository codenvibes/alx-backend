import sinon from 'sinon';
import { expect } from 'chai';
import { createQueue } from 'kue';
import createPushNotificationsJobs from './8-job.js';

/**
 * Unit tests for the createPushNotificationsJobs function.
 */
describe('createPushNotificationsJobs', () => {
  /** @type {sinon.SinonSpy} */
  const BIG_BROTHER = sinon.spy(console);
  
  /** @type {Queue} */
  const QUEUE = createQueue({ name: 'push_notification_code_test' });

  before(() => {
    QUEUE.testMode.enter(true);
  });

  after(() => {
    QUEUE.testMode.clear();
    QUEUE.testMode.exit();
  });

  afterEach(() => {
    BIG_BROTHER.log.resetHistory();
  });

  /**
   * Test case for handling non-array job input.
   * It should throw an error if jobs is not an array.
   */
  it('displays an error message if jobs is not an array', () => {
    expect(
      createPushNotificationsJobs.bind(createPushNotificationsJobs, {}, QUEUE)
    ).to.throw('Jobs is not an array');
  });

  /**
   * Test case for adding jobs to the queue with the correct type.
   * It verifies the jobs are correctly added and the type is as expected.
   * @param {function} done - Callback to signal test completion.
   */
  it('adds jobs to the queue with the correct type', (done) => {
    expect(QUEUE.testMode.jobs.length).to.equal(0);
    const jobInfos = [
      {
        phoneNumber: '44556677889',
        message: 'Use the code 1982 to verify your account',
      },
      {
        phoneNumber: '98877665544',
        message: 'Use the code 1738 to verify your account',
      },
    ];
    createPushNotificationsJobs(jobInfos, QUEUE);
    expect(QUEUE.testMode.jobs.length).to.equal(2);
    expect(QUEUE.testMode.jobs[0].data).to.deep.equal(jobInfos[0]);
    expect(QUEUE.testMode.jobs[0].type).to.equal('push_notification_code_3');
    QUEUE.process('push_notification_code_3', () => {
      expect(
        BIG_BROTHER.log
          .calledWith('Notification job created:', QUEUE.testMode.jobs[0].id)
      ).to.be.true;
      done();
    });
  });

  /**
   * Test case for registering the progress event handler for a job.
   * It checks if the progress event logs the correct output.
   * @param {function} done - Callback to signal test completion.
   */
  it('registers the progress event handler for a job', (done) => {
    QUEUE.testMode.jobs[0].addListener('progress', () => {
      expect(
        BIG_BROTHER.log
          .calledWith('Notification job', QUEUE.testMode.jobs[0].id, '25% complete')
      ).to.be.true;
      done();
    });
    QUEUE.testMode.jobs[0].emit('progress', 25);
  });

  /**
   * Test case for registering the failed event handler for a job.
   * It checks if the failure event logs the correct output.
   * @param {function} done - Callback to signal test completion.
   */
  it('registers the failed event handler for a job', (done) => {
    QUEUE.testMode.jobs[0].addListener('failed', () => {
      expect(
        BIG_BROTHER.log
          .calledWith('Notification job', QUEUE.testMode.jobs[0].id, 'failed:', 'Failed to send')
      ).to.be.true;
      done();
    });
    QUEUE.testMode.jobs[0].emit('failed', new Error('Failed to send'));
  });

  /**
   * Test case for registering the complete event handler for a job.
   * It checks if the complete event logs the correct output.
   * @param {function} done - Callback to signal test completion.
   */
  it('registers the complete event handler for a job', (done) => {
    QUEUE.testMode.jobs[0].addListener('complete', () => {
      expect(
        BIG_BROTHER.log
          .calledWith('Notification job', QUEUE.testMode.jobs[0].id, 'completed')
      ).to.be.true;
      done();
    });
    QUEUE.testMode.jobs[0].emit('complete');
  });
});
