import { createQueue } from 'kue';

/**
 * Create a queue for processing jobs.
 * @type {Queue}
 */
const queue = createQueue();

/**
 * List of blacklisted phone numbers.
 * @type {string[]}
 */
const BLACKLISTED_NUMS = ['4153518780', '4153518781'];

/**
 * Sends a notification message to a phone number.
 * Updates job progress and handles blacklisted numbers.
 * 
 * @param {string} phoneNumber - The phone number to send the notification to.
 * @param {string} message - The notification message.
 * @param {Job} job - The job object to track progress and completion.
 * @param {Function} done - The callback function to signal job completion or error.
 */
const sendNotification = (phoneNumber, message, job, done) => {
  const total = 2; 
  let pending = 2;

  const sendInterval = setImmediate(() => {
    if (total - pending <= total / 2) {
      job.progress(total - pending, total);
    }

    if (BLACKLISTED_NUMS.includes(phoneNumber)) {
      done(new Error(`Phone number ${phoneNumber} is blacklisted`));
      clearInterval(sendInterval);
      return;
    }

    if (total === pending) {
      console.log(`Sending notification to ${phoneNumber},`, `with message: ${message}`);
    } 
    --pending || done();
    pending || clearInterval(sendInterval);
  }, 1000);
};

/**
 * Processes 'push_notification_code_2' jobs from the queue.
 * 
 * @param {Job} job - The job object containing job data.
 * @param {Function} done - The callback function to signal job completion.
 */
queue.process('push_notification_code_2', 2, (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
});
